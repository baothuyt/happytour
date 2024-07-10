//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Searchtour = () => {
  const tours = [
    {
      location: "Hà Nội",
      title: "Buổi biểu diễn múa rối nước Thăng Long",
      rating: "4.5",
      reviews: 754,
      price: "€4.45",
      imgSrc: "https://via.placeholder.com/150",
      freeCancellation: true,
    },
    {
      location: "Hà Nội",
      title: "Tour Vịnh Hạ Long cả ngày có kèm bữa trưa, đi từ Hà Nội",
      rating: "4.4",
      reviews: 192,
      price: "$61.50",
      imgSrc: "https://via.placeholder.com/150",
      freeCancellation: true,
      bestSeller: true,
    },
    // Add more tour items as needed
  ];

  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Bạn muốn đi đâu?" />
            <input type="date" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-success" type="button">Tìm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">Lọc</div>
            <div className="card-body">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="hanoi" />
                <label className="form-check-label" htmlFor="hanoi">Hà Nội</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="dalat" />
                <label className="form-check-label" htmlFor="dalat">Đà Lạt</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="danang" />
                <label className="form-check-label" htmlFor="danang">Đà Nẵng</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {tours.map((tour, index) => (
            <div key={index} className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={tour.imgSrc} className="card-img" alt={tour.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{tour.title}</h5>
                    <p className="card-text">{tour.location}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        ⭐ {tour.rating} / 5 Tuyệt vời ({tour.reviews} đánh giá)
                      </small>
                    </p>
                    {tour.freeCancellation && (
                      <p className="card-text">
                        <small className="text-success">Có lựa chọn hủy miễn phí</small>
                      </p>
                    )}
                    {tour.bestSeller && (
                      <span className="badge badge-success">#2 Bán chạy nhất</span>
                    )}
                    <p className="card-text">{tour.price}</p>
                    <a href="/" className="btn btn-primary">Xem chỗ trống</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchtour;
