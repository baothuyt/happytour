// src/BlogList.js

import React from 'react';


const BlogList = () => {
  const posts = [
    {
      date: "26 Th6",
      title: "Lộ diện địa điểm hot ở Măng Đen – du khách check in rần rần",
      content: "De Vivre Măng Đen tọa lạc giữa 'trái tim' thị trấn Măng Đen, là địa ...",
      image: "path/to/image1.jpg"
    },
    {
      date: "26 Th6",
      title: "Vẻ đẹp hoang sơ, lạ mắt của rừng ngập mặn Bàu Cá Cái",
      content: "Bàu Cá Cái (Quảng Ngãi) là rừng ngập mặn được bao bọc xung quanh bởi ...",
      image: "path/to/image2.jpg"
    },
    {
      date: "26 Th6",
      title: "Chiêm ngưỡng tượng Phật cao 81m tạc trong vách núi An Giang",
      content: "Thất Sơn huyền bí luôn mang đến cho du khách những điều mới mẻ để ...",
      image: "path/to/image3.jpg"
    },
    {
      date: "26 Th6",
      title: "Cẩm nang du lịch Vịnh Hạ Long",
      content: "Vịnh Hạ Long rộng hơn 1.500 km2, với hơn 2.000 hòn đảo lớn nhỏ với ...",
      image: "path/to/image4.jpg"
    },
    {
      date: "26 Th6",
      title: "Bánh flan Việt vào top món tráng miệng ngon nhất châu Á",
      content: "Món bánh quen thuộc làm từ trứng, sữa, đường caramel du nhập từ châu Âu, ...",
      image: "path/to/image5.jpg"
    },
    {
      date: "26 Th6",
      title: "Hai khách sạn Việt được công nhận 'tốt nhất thế giới'",
      content: "Sofitel Legend Metropole và Four Seasons Resort The Nam Hai được chọn vào ...",
      image: "path/to/image6.jpg"
    },
    {
      date: "26 Th6",
      title: "Người Việt ngày càng thích du lịch tâm linh",
      content: "Đà Lạt hiện đang phát triển du lịch tâm linh, thu hút ngày càng nhiều ...",
      image: "path/to/image7.jpg"
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          {posts.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={post.image} className="card-img" alt={post.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"><small className="text-muted">{post.date}</small></p>
                    <p className="card-text">{post.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="search-bar mb-3">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active">
              Bài viết mới
            </button>
            {posts.map((post, index) => (
              <button key={index} type="button" className="list-group-item list-group-item-action">
                <img src={post.image} className="sidebar-img" alt={post.title} />
                {post.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
