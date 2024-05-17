import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./layouts/layout";
import HomePages from "./pages/HomePages";
import Detail from "./components/Detail/Detail";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout>
        <HomePages/>
      </Layout>} />
      <Route path="/search" element={<Layout>
        <p>Search Page</p>
      </Layout>} />
      <Route path="/detail" element={<Layout>
        <Detail/>
      </Layout>} />
      <Route path="/home" element={<Layout>
        <p>Trang Chủ</p>
      </Layout>} />
    </Routes>
  </Router>
  )
}

export default App
