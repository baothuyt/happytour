import React, { useEffect, useState } from 'react';
import { apiGetBookingTour } from '../../apis/booking'; // Đảm bảo đường dẫn đúng
import moment from 'moment';
import InputField from '../../components/InputField';

const BookingPage = () => {
    const [bookingTours, setBookingTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [queries, setQueries] = useState({
      q: ''
    });

    // Hàm gọi API và cập nhật dữ liệu
    const fetchBookingTours = async () => {
        try {
            const response = await apiGetBookingTour();
            if (response.success) {
                setBookingTours(response.bookingTours); // Giả sử response chứa mảng dữ liệu cần hiển thị
            } else {
                setError('Không thể tìm nạp các chuyến tham quan đã đặt trước');
            }
        } catch (err) {
            setError('Đã xảy ra lỗi khi lấy dữ liệu!');
        } finally {
            setLoading(false);
        }
    };

    // Gọi hàm fetchBookingTours khi component được render
    useEffect(() => {
        fetchBookingTours();
    }, []);

    return (
        <>
            <div className="flex justify-between m-5">
                <h1 className="text-2xl font-bold my-4">Booking List</h1>
                <div className="flex">
                  <InputField
                    nameKey="q"
                    value={queries.q}
                    setValue={setQueries}
                    placeholder="Search tour..."
                    isHideLabel
                  />
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && (
                    <div className="overflow-x-auto bg-white mx-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <h1>Tour Information</h1>
                                        <th>#</th>
                                        <th>Tour ID</th>
                                        <th>Tour Name</th>
                                        <th>Tour Price</th>
                                        <th>Status</th>
                                    <h2>Order By</h2>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mobile</th>
                                    <h2>Details</h2>
                                        <th>Adults</th>
                                        <th>Children</th>
                                        <th>Infants</th>
                                        <th>Total</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingTours.map((booking, idx) => (
                                    <tr key={booking._id}>
                                        <td>{idx + 1}</td>
                                        <td>{booking.tour.name}</td>
                                        <td>{booking.tour.price.toLocaleString()} VND</td>
                                        <td>{booking.status}</td>
                                        <td>{booking.orderBY.firstname}</td>
                                        <td>{booking.orderBY.lastname}</td>
                                        <td>{booking.orderBY.mobile}</td>
                                        <td>{booking.adult}</td>
                                        <td>{booking.children}</td>
                                        <td>{booking.infant}</td>
                                        <td>{booking.total.toLocaleString()} VND</td>
                                        <td>{moment(booking.createdAt).format('DD/MM/YYYY')}</td>
                                        <td>{moment(booking.updatedAt).format('DD/MM/YYYY')}</td>
                                        <td>
                                            <span
                                                onClick={() => console.log('Edit', booking)}
                                                className="px-2 text-orange-600 hover:underline cursor-pointer"
                                            >
                                                Edit
                                            </span>
                                            <span
                                                onClick={() => console.log('Delete', booking)}
                                                className="px-2 text-red-600 hover:underline cursor-pointer"
                                            >
                                                Delete
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default BookingPage;
