import React from "react";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from "react-router-dom";
import { IoChevronForward } from 'react-icons/io5';
//import { IoIoChevronForward} from 'react-icons/io'
const Breadcrumbs = ({name, category}) =>{
    // console.log(name, category)
    const routes = [
        {path: "/:category", breadcrumb: category},
        {path: "/", breadcrumb: "Home"},
        {path: "/:category/:tourId/:name", breadcrumb: name},
        
    ];
    const breadcrumb = useBreadcrumbs(routes)
    console.log(breadcrumb)
    return(
        <>
        
        <div style={{ display: 'flex', alignItems: 'center'}}>
            {breadcrumb?.filter(el => !el.match.route === false).map(({match, breadcrumb}, index, self) => (
                <Link key={match.pathname} to={match.pathname}
                 style={{display: 'flex', 
                        alignItems: 'center', 
                        textDecoration: 'none', 
                        color:'black',
                        '&:hover': {color: 'red'} 
                        }}>
                    <span>{breadcrumb}</span>
                    {index !== self.length - 1 && <IoChevronForward style={{ marginLeft: '5px' }} />}
                </Link>
            ))}
        </div>
        </>
        
    )
}

export default Breadcrumbs
