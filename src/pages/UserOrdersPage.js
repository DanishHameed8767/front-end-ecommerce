import Navbar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
        <Navbar Children={<UserOrders />}/>
    </div>
  );
}

export default UserOrdersPage;