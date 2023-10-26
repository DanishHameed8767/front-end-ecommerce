import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import Navbar from "../features/navbar/Navbar";
function AdminProductDetailPage() {
    return ( 
        <div>
            <Navbar Children={<AdminProductDetail />} />
        </div>
     );
}

export default AdminProductDetailPage;