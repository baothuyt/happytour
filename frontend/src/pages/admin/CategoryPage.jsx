import React, { useCallback, useEffect, useState } from 'react';
import { apiGetCategories } from '../../apis/app'; // Assuming there's an API function to fetch tours
import moment from 'moment';
import InputField from '../../components/InputField';
import useDebounce from '../../hooks/useDebounce';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';

const CategoryPage = () => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    status: ''
  });
  const [categories, setCategories] = useState(null);
  const [queries, setQueries] = useState({
    q: ''
  });
  const [editTour, setEditTour] = useState(null);

  const fetchCategories = async (params) => {
    const response = await apiGetCategories(params);
    if (response.success) setCategories(response.tourCategories);
  };

  // Fetch tours when the debounce time for the search query is reached
  const queriesDebounce = useDebounce(queries.q, 800);
  useEffect(() => {
    const params = {};
    if (queriesDebounce) params.q = queriesDebounce;
    fetchCategories(params);
  }, [queriesDebounce]);

  const handleUpdate = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-between m-5">
        <h1 className="text-2xl font-bold">Category List</h1>
        <div className="flex">
          <InputField
            nameKey="q"
            value={queries.q}
            setValue={setQueries}
            placeholder="Search category..."
            isHideLabel
          />
        </div>
      </div>
      <div>
        <div className="overflow-x-auto bg-white mx-2">
          <div className="flex justify-end py-4">
            {/* Add button or other actions */}
          </div>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((categories, idx) => (
                  <tr key={categories._id}>
                    <td>{idx + 1}</td>
                    <td>{categories.name}</td>
                    
                    
                    <td>
                      <span
                        onClick={() => setEditTour(tour)}
                        className="px-2 text-orange-600 hover:underline cursor-pointer"
                      >
                        Edit
                      </span>
                      <span className="px-2 text-orange-600 hover:underline cursor-pointer">
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;