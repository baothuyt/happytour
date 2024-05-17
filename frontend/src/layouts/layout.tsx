// import Footer from "../components/Footer/Footer";
// import Headers from "../components/Header/Headers";
// import HomePages from "../pages/HomePages";
import '../index.css'

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div>
            
            <div className="section">
                {children}
            </div>
            
            {/* <Footer/> */}
        </div>
    )
}

export default Layout;