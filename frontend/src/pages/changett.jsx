import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiUpdateUser } from '../apis/updateuser';

const ThaydoiThongtinCaNhan = () => {
    // Khai báo state để lưu trữ giá trị của các trường nhập liệu
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        role: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Hàm xử lý sự kiện thay đổi dữ liệu trong các trường nhập liệu
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Hàm xử lý sự kiện khi người dùng nhấn nút cập nhật thông tin
    const handleSubmit = async () => {
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert('Mật khẩu mới và xác nhận mật khẩu mới không khớp!');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccessMessage('');

        try {
            // Gọi hàm API để cập nhật thông tin người dùng
            const response = await apiUpdateUser(formData);
            if (response.success) {
                setSuccessMessage('Thông tin đã được cập nhật thành công!');
            } else {
                setError('Cập nhật thông tin thất bại. Vui lòng thử lại.');
            }
        } catch (err) {
            setError('Có lỗi xảy ra. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

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
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.currentPassword}
                            onChange={handleChange}
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
                            value={formData.newPassword}
                            onChange={handleChange}
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
                            value={formData.confirmNewPassword}
                            onChange={handleChange}
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
                            value={formData.role}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button 
                            type="button" 
                            className="btn btn-success fw-bold px-5" 
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Đang cập nhật...' : 'Cập nhật thông tin'}
                        </button>
                    </div>
                </div>
                {error && <div className="alert alert-danger mt-4">{error}</div>}
                {successMessage && <div className="alert alert-success mt-4">{successMessage}</div>}
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
