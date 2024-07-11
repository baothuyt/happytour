
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Dangnhap = () => {
    return ( 
     <>
        
        <div className="container">
            <h3 className="fw-bold mt-5">ĐĂNG NHẬP TÀI KHOẢN</h3>
            <div className="row g-3 justify-content-center">
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
                    Chưa có tài khoản? <Link to="/dangky" className="text-decoration-none fw-bold"> Tạo tài khoản ở đây</Link> 
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-success fw-bold px-5">
                        Đăng nhập
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

export default Dangnhap;
