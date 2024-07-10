// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingHistory = () => {
  const bookings = [
    {
      id: 1,
      title: 'Buổi biểu diễn múa rối nước Thăng Long',
      location: 'Hà Nội',
      price: '4.48 USD',
      image: 'https://th.bing.com/th/id/OIP.L0eeTIbbYc8JHezrZjNEhAHaFj?w=1040&h=780&rs=1&pid=ImgDetMain',
      day: '20/4/2024',
      reviews: 453,
      matour: "MB062BB",
    },
    {
      id: 2,
      title: 'Tour Vịnh Hạ Long cả ngày & kèm bữa trưa, đi từ Hà Nội',
      location: 'Hạ Long',
      price: '39.56 USD',
      image: 'https://th.bing.com/th/id/R.c8131187b1af857c89b2f3f1a4bb12ba?rik=b5VWFbRrAdf2Ww&riu=http%3a%2f%2fthinhvuongvietnam.com%2fContent%2fUploadFiles%2fEditorFiles%2fimages%2f2020%2fQuy3%2fvinh-ha-long01082020031309.jpg&ehk=Hu8h4O9%2bNdW3ldBSrrk9XPaaQ%2fTx2fze9vrufSStSUg%3d&risl=&pid=ImgRaw&r=0',
      rating: 4.7,
      reviews: 568,
      khachsan: '3*',
    },
    // Add more bookings as needed
  ];

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col">
          <h2>Lịch sử đặt vé</h2>
        </div>
      </div>
      <div className="row">
        {bookings.map((booking) => (
          <div className="col-md-12 mb-4" key={booking.id}>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={booking.image} className="card-img" alt={booking.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{booking.title}</h5>
                    <p className="card-text">Địa điểm: {booking.location}</p>
                    <p className="card-text text-success">Giá: {booking.price}</p>
                    <p className="card-text">Mã tour: {booking.matour}</p>
                    <p className="card-text">Khách sạn: {booking.khachsan}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Ngày khởi hành: {booking.day}
                      </small>
                    </p>
                    <a href="/" className="btn btn-primary">ĐẶT LẠI</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;
