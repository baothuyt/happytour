import 'bootstrap/dist/css/bootstrap.min.css';

const ThaydoiThongtinCaNhan = () => {
    return ( 
     <>
      
   <div className="container">
           
            <h3 className="fw-bold mt-4">THAY ĐỔI THÔNG TIN CÁ NHÂN</h3>
            <div className="row g-3 justify-content-center">
           
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label text-dark fw-bold">
                        Họ
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Nhập họ"
                        aria-label="First name"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label text-dark fw-bold">
                        Tên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Nhập tên"
                        aria-label="Last name"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label text-dark fw-bold">
                        Địa chỉ email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Nhập địa chỉ email"
                        aria-label="Email"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="currentPassword" className="form-label text-dark fw-bold">
                        Mật khẩu hiện tại
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        placeholder="Nhập mật khẩu hiện tại"
                        aria-label="Current Password"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="newPassword" className="form-label text-dark fw-bold">
                        Mật khẩu mới
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        placeholder="Nhập mật khẩu mới"
                        aria-label="New Password"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="confirmNewPassword" className="form-label text-dark fw-bold">
                        Nhập lại mật khẩu mới
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmNewPassword"
                        placeholder="Nhập lại mật khẩu mới"
                        aria-label="Confirm New Password"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="role" className="form-label text-dark fw-bold">
                        Vai trò
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Nhập vai trò"
                        aria-label="Role"
                    />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-success fw-bold px-5">
                        Cập nhật thông tin
                    </button>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="mb-0">By updating your information, you agree with our </p>
                <p className="mb-3">Terms & conditions and Privacy statement </p>
                <p className="mb-1">All rights reserved.</p>
                <p className="mb-0">Copyright (2023-2024) - HappyTour.com</p>
            </div>
        </div>
     </>
    );
}

export default ThaydoiThongtinCaNhan;
