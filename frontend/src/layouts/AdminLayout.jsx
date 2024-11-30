import { Outlet } from 'react-router-dom';
import NavigationBar from '@/components/navigation-bar/NavigationBar';

const AdminLayout = () => {
    return (
        <div className='w-full flex'>
            {/* Navigation Bar */}
            <NavigationBar />
            {/* Main Component */}
            <main className='grow'>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
