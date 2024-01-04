import { Link } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { CgShoppingBag } from "react-icons/cg";
import LinkItem from "../shared/LinkItem";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <img src="/icons/logo.png" alt="logo" />
        </Link>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search for products, Brands, Markets & More"
            className="header-search_input"
          />
          <HiOutlineMagnifyingGlass size={20} />
        </div>
        <div className="header-profile">
          <img src="/icons/profile-placeholder.svg" alt="icon" />
          <p>Ravi Manjhi</p>
          <Link to="/">
            <HiOutlineChevronDown />
          </Link>
        </div>
        <div className="cart-logo">
          <Link to="/" className="cart-link">
            <CgShoppingBag size={20} />
            <p>Cart</p>
          </Link>
        </div>
      </div>

      <div className="header-bottom">
        <ul className="list">
          <LinkItem path="/" title="Mobile & Table" />
          <LinkItem path="/" title="Electronic & Electronics" />
          <LinkItem path="/" title="Grocery" />
          <LinkItem path="/" title="TV & Appliances" />
          <LinkItem path="/" title="Fashion" />
          <LinkItem path="/" title="Home & Kitchen" />
          <LinkItem path="/" title="Furniture" />
          <LinkItem path="/" title="Grocery" />
          <LinkItem path="/" title="Grocery" />
          <LinkItem path="/" title="Grocery" />
          <LinkItem path="/" title="Top Saving Offer" />
        </ul>
      </div>
    </header>
  );
}

export default Header;
