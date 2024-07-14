import React from "react";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
const Breadcrumbs = () =>{
    const breadcrumbs = useBreadcrumbs()
    console.log(breadcrumbs)
    return(
        <span>Trang chủ &gt; Tour miền bắc &gt; HÀ NỘI - NINH BÌNH - HẠ LONG - YÊN TỬ - SA PA (đường cao tốc) - HÀ NỘI</span>

    )
}

export default Breadcrumbs