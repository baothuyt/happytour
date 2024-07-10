// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Thanhtoan = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-header bg-success text-white">DỊCH VỤ TOUR</div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Mã tour</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value="XNMT 03" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Tour yêu cầu</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value="TOUR MIỀN TÂY 3 NGÀY 2 ĐÊM" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Khách sạn</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value="⭐️⭐️" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Số ngày đi tour</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value="3 Ngày 2 Đêm" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Phương tiện</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" value="Ô tô" />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-success text-white">CHI TIẾT TOUR</div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã booking</label>
                <div className="col-sm-9">
                  <input type="text" readOnly className="form-control-plaintext" value="BPT26032024101" />
                  <small className="form-text text-muted">
                    (Quý khách vui lòng nhớ số booking để tiện cho các giao dịch sau này)
                  </small>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Người lớn</label>
                <div className="col-sm-3">
                  <input type="number" className="form-control" defaultValue="1" />
                </div>
                <label className="col-sm-3 col-form-label">Giá người lớn</label>
                <div className="col-sm-3">
                  <input type="text" readOnly className="form-control-plaintext" value="3.080.000 VND" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Trẻ em</label>
                <div className="col-sm-3">
                  <input type="number" className="form-control" defaultValue="0" />
                </div>
                <label className="col-sm-3 col-form-label">Giá trẻ em</label>
                <div className="col-sm-3">
                  <input type="text" readOnly className="form-control-plaintext" value="2.310.000 VND" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Trẻ nhỏ</label>
                <div className="col-sm-3">
                  <input type="number" className="form-control" defaultValue="0" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày đặt tour</label>
                <div className="col-sm-9">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tổng giá</label>
                <div className="col-sm-9">
                  <input type="text" readOnly className="form-control-plaintext" value="3.080.000 VND" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header bg-success text-white">THÔNG TIN LIÊN LẠC</div>
            <div className="card-body">
              <div className="form-group">
                <label>Họ tên*</label>
                <input type="text" className="form-control" placeholder="Nhập họ tên" />
              </div>
              <div className="form-group">
                <label>Điện thoại*</label>
                <input type="text" className="form-control" placeholder="Nhập điện thoại" />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input type="email" className="form-control" placeholder="Nhập email" />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
              </div>
              <div className="form-group">
                <label>Ghi chú</label>
                <textarea className="form-control" rows="3" placeholder="Nhập ghi chú"></textarea>
              </div>
              <button className="btn btn-warning">ĐẶT TOUR</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-8">
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
      <br />
    </div>
    
  );
};

export default Thanhtoan;
