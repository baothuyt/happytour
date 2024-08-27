import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Layout1 from "./layouts/layout1";
import Layout2 from "./layouts/layout2";
import HomePages from "./pages/HomePages";
import Dangnhap from "./pages/dangnhap"
import Searchtour from "./pages/Searchtour/Searchtour";
import Thanhtoan from "./pages/thanhtoan";
import ThaydoiThongtinCaNhan from "./pages/changett";
import BookingHistory from "./pages/member/bookinghistory";
import Detail from "./pages/Detail/Detail";
import BlogList from "./pages/Blog";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import UsersPage from "./pages/admin/UsersPage";
import BookingPage from "./pages/admin/BookingPage";
import CategoryPage from "./pages/admin/CategoryPage";
import TourPage from "./pages/admin/TourPage";
import CreateTour from "./pages/admin/CreateTours";
import TourActivePage from "./pages/admin/TourActivePage";
import CommentPage from "./pages/admin/CommentPage";
import FinalRegister from "./pages/public/FinalRegister";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./store/app/actions";
import ResetPassword from "./pages/public/ResetPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from './components/Modal'
import Checkout from "./pages/member/Checkout";
import { AdminRoute, UserRoute } from './hocs/protectedRoute'

function App() {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren } = useSelector(state => state.app)
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <div className="relative">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path="/" element={<Layout><HomePages /></Layout>} />
        <Route path="/home" element={<Layout><HomePages /></Layout>} />
        <Route path="/blog" element={<UserRoute><Layout2><BlogList /></Layout2></UserRoute>} />
        <Route path="/:category/:tourId/:name" element={<UserRoute><Layout2><Detail /></Layout2></UserRoute>} />
        <Route path="/dangnhap" element={<Layout1><Dangnhap /></Layout1>} />
        <Route path="/thanhtoan/:tourId" element={<UserRoute><Layout2><Thanhtoan /></Layout2></UserRoute>} />
        <Route path="/checkout" element={<UserRoute><Checkout /></UserRoute>} />
        <Route path="/bookinghistory" element={<UserRoute><Layout2><BookingHistory /></Layout2></UserRoute>} />
        <Route path="/thaydoi" element={<UserRoute><Layout1><ThaydoiThongtinCaNhan /></Layout1></UserRoute>} />
        <Route path="/:category" element={<UserRoute><Layout2><Searchtour /></Layout2></UserRoute>} />
        <Route path="/finalregister/:status" element={<FinalRegister />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user" element={<UsersPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="tour" element={<TourPage />} />
          <Route path="create" element={<CreateTour />} />
          <Route path="tour-active" element={<TourActivePage />} />
          <Route path="comment" element={<CommentPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
