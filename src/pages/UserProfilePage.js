import Navbar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserOrdersPage() {
  return (
    <div>
        <Navbar Children={<UserProfile />} />
    </div>
  );
}

export default UserOrdersPage;