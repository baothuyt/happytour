import styles from './Searchtour.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect, useState, useCallback } from 'react'
import { useParams, useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import TourCard from '../../components/TourCard';
import { apiGetTours } from '../../apis'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import SearchItem from '../../components/SearchItem';
import InputSelect from '../../components/InputSelect';
import { sorts } from '../../ultils/constant';

const Search = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [tours, setTours] = useState(null)
    const [activeClick, setActiveClick] = useState(null)
    const [sort, setSort] = useState('')
    const [params] = useSearchParams()

    const fetchToursByCategory = async (queries) => {
        const response = await apiGetTours(queries)
        if (response.success) setTours(response.toursData)
    }
    useEffect(() => {
        let param = []
        for (let i of params.entries()) param.push(i)
        const queries = {}
        for (let i of param) queries[i[0]] = i[1]

        let priceQuery = {}
        if (queries.from && queries.to) {
            priceQuery = {
                $and: [
                    { price: { gte: queries.from } },
                    { price: { lte: queries.to } }
                ]
            }
            delete queries.price
        }
        if (queries.from) queries.price = { gte: queries.from }
        if (queries.to) queries.price = { lte: queries.to }
        delete queries.to
        delete queries.from

        fetchToursByCategory({ ...priceQuery, ...queries })
    }, [params])
    const changeActiveFilter = useCallback((name) => {
        if (activeClick === name) setActiveClick(null)
        else setActiveClick(name)
    }, [activeClick])
    const changeValue = useCallback((value) => {
        setSort(value)
    }, [sort])

    useEffect(() => {
        navigate({
            pathname: `/${category}`,
            search: createSearchParams({ sort }).toString()
        })
    }, [sort])
    return (
        <div>
            <section className={styles.container}>
                <div>
                    <div className='w-full mt-4'>
                        <h3 className='font-semibold uppercase'>{category}</h3>
                        <Breadcrumbs category={category} />
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.booking_search_box}>
                    <div className='w-4/5 flex-auto flex flex-col gap-3'>
                        <span className='font-semibold text-sm'>Lọc theo:</span>
                        <div className='flex items-center gap-4'>
                            <SearchItem
                                name='price'
                                activeClick={activeClick}
                                changeActiveFilter={changeActiveFilter}
                                type='input'
                            />
                            <SearchItem
                                name='tag'
                                activeClick={activeClick}
                                changeActiveFilter={changeActiveFilter}
                            />
                        </div>
                    </div>
                    <div className='w-1/5 flex flex-col gap-3'>
                        <span className='font-semibold text-sm'>Sắp xếp theo:</span>
                        <div className='w-full'>
                            <InputSelect changeValue={changeValue} value={sort} options={sorts} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.results_section}>
                <div className={styles.container}>
                    {tours?.map(el => (
                        <TourCard
                            key={el._id}
                            _id={el._id}
                            image={el.thumb}
                            name={el.name}
                            totalRatings={el.totalRatings}
                            price={el.price}
                            description={el.description}
                            ratings={el.ratings?.length}
                            category={el.category?.name}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Search;