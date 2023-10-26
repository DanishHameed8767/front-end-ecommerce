import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <Navbar Children={<AdminProductList />} />
        </div>
     );
}

export default AdminHome;