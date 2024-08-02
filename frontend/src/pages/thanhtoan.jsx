import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { apiGetTour, apiCreateBooking } from '../apis';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { totalBooking, formatMoney, formatDate } from '../ultils/helpers';
import Swal from 'sweetalert2';

const Thanhtoan = () => {
  const { tourId } = useParams();
  const [tours, setTour] = useState(null);
  const [payload, setPayload] = useState({
    tourId,
    tripId: '',
    adult: 1,
    children: 0,  // Khởi tạo giá trị mặc định
    infant: 0,  // Khởi tạo giá trị mặc định
  });

  const fetchTours = async () => {
    const response = await apiGetTour(tourId);
    if (response.success) setTour(response.tourData);
  };

  useEffect(() => {
    if (tourId) fetchTours();
  }, [tourId]);

  const resetPayload = () => {
    setPayload({
      tourId,
      tripId: '',
      adult: 1,
      children: 0,  // Reset về giá trị mặc định
      infant: 0,  // Reset về giá trị mặc định
    })
  }

  const handleBooking = async () => {
    const response = await apiCreateBooking(payload);
    if (response.success) {
      Swal.fire('Congratulations!', "You have successfully booked your tour", 'success').then(() => { resetPayload() })
    } else Swal.fire('Oops!', response.response, 'error')
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-header bg-success text-white">DỊCH VỤ TOUR</div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Tour yêu cầu</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value={tours?.name || ''} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Khách sạn</label>
                <div className="col-sm-10 flex">
                  {tours?.destination?.map(el => (
                    <span className='px-2' key={el._id} >{el.hotel}</span>
                  ))}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ngày vào tour</label>
                <div className="col-sm-10">
                  <span>{formatDate(tours?.startDate)}</span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ngày ra tour</label>
                <div className="col-sm-10">
                  <span>{formatDate(tours?.endDate)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-success text-white">CHI TIẾT TOUR</div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Chọn chuyến đi</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name=""
                    id=""
                    value={payload.tripId}
                    onChange={(e) => setPayload({ ...payload, tripId: e.target.value })}
                  >
                    <option value=""> -Lựa chọn- </option>
                    {tours?.trip?.map(el => (
                      <option key={el._id} value={el._id}>{`${el.vehicel} (${el.licensePlate})`}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Người lớn</label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    min={1}
                    value={payload.adult}
                    onChange={(e) => setPayload({ ...payload, adult: e.target.value })}
                  />
                </div>
                <label className="col-sm-3 col-form-label">Giá người lớn</label>
                <div className="col-sm-3">
                  <span>{formatMoney(payload.adult * (tours?.price || 0))} VND</span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Trẻ em</label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    value={payload.children}
                    onChange={(e) => setPayload({ ...payload, children: e.target.value })}
                  />
                </div>
                <label className="col-sm-3 col-form-label">Giá trẻ em (75%)</label>
                <div className="col-sm-3">
                  <span>{formatMoney(payload.children * (tours?.price || 0) * 0.75)} VND</span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Trẻ nhỏ</label>
                <div className="col-sm-3">
                  <input
                    type="number"
                    className="form-control"
                    value={payload.infant}
                    onChange={(e) => setPayload({ ...payload, infant: e.target.value })}
                  />
                </div>
                <label className="col-sm-3 col-form-label">Giá trẻ nhỏ (free)</label>
                <div className="col-sm-3">
                  <input type="text" readOnly className="form-control-plaintext" value="0 VND" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tổng giá</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    value={totalBooking((tours?.price || 0), Number(payload.adult), Number(payload.children))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card">
              <div className="card-header bg-success text-white">LƯU Ý</div>
              <div className="card-body">
                <p className="text-muted">
                  * Xin vui lòng nhập tên hành khách phải đúng tên như trong CMND/Hộ chiếu (tên không dấu, có dấu cách giữa họ và tên).<br />
                  * Quý khách vui lòng mang đầy đủ giấy tờ tùy thân.<br />
                  * Hãy để lại địa chỉ liên lạc chính xác nhất và chúng tôi sẽ liên hệ lại cho bạn trong thời gian sớm nhất.<br />
                  * Booking có giá trị khi được nhân viên xác nhận.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-12 d-flex justify-content-center">
          <Button
            name={'Xác nhận thanh toán'}
            handleOnClick={handleBooking}
          />
        </div>
      </div>
    </div>
  );
};

export default Thanhtoan;
