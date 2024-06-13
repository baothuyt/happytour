import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePages from "./pages/HomePages";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import UsersPage from "./pages/admin/UsersPage";
import BookingPage from "./pages/admin/BookingPage";
import CategoryPage from "./pages/admin/CategoryPage";
import TourPage from "./pages/admin/TourPage";
import TourActivePage from "./pages/admin/TourActivePage";
import CommentPage from "./pages/admin/CommentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <HomePages />
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>} />

        <Route path="/home" element={<Layout>
          <p>Trang Chủ</p>
        </Layout>} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user" element={<UsersPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="tour" element={<TourPage />} />
          <Route path="tour-active" element={<TourActivePage />} />
          <Route path="comment" element={<CommentPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
