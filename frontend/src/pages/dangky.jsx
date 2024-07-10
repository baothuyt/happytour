
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Dangky = () => {
    return ( 
     <>
      
   <div className="container">
           
            <h3 className="fw-bold mt-5">ĐĂNG KÝ TÀI KHOẢN</h3>
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
                    <label htmlFor="password" className="form-label text-dark fw-bold">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        aria-label="Password"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="confirmPassword" className="form-label text-dark fw-bold">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Nhập lại mật khẩu"
                        aria-label="Confirm Password"
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
                <div className="col-12">
                    Đã có tài khoản? <Link to="/dangnhap"><a href="/" className="text-decoration-none fw-bold">Quay về trang đăng nhập</a></Link>
                </div>
                
                <div className="col-12 d-flex justify-content-center">
                   <button type="button" className="btn btn-success fw-bold px-5">
                        Đăng ký
                    </button>
                    
                </div>
                
            </div>
            <div className="text-center mt-4">
                <p className="mb-0">By signing in or creating an account, you agree with our </p>
                <p className="mb-3">Terms & conditions and Privacy statement </p>
                <p className="mb-1">All rights reserved.</p>
                <p className="mb-0">Copyright (2023-2024) - HappyTour.com</p>
            </div>
        </div>
     </>
    );
}

export default Dangky;
