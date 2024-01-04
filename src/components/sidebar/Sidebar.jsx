import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-profile">
        <img src="/icons/profile image.jpg" alt="profile" />
        <div className="details">
          <p>Hello</p>
          <h3>Ravi Manjhi</h3>
        </div>
      </div>

      <div className="sidebar-container">
        <h4>My Profile</h4>
        <div className="sidebar-info">
          <Link className="active" to="/">
            Personal Information
          </Link>
          <Link to="/">Manage Addresses</Link>
          <Link to="/">Payment Card Information</Link>
          <Link to="/">All Notification</Link>
        </div>
      </div>

      <div className="sidebar-container">
        <h4>My Orders</h4>
        <div className="sidebar-info">
          <Link to="/">All Order</Link>
          <Link to="/">My Wishlist</Link>
          <Link to="/">My Review</Link>
          <Link to="/">Saved for Later</Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
