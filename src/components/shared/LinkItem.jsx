import { Link } from "react-router-dom";

function LinkItem({ path, title }) {
  return (
    <li className="list-item">
      <Link to={path}>{title}</Link>
    </li>
  );
}

export default LinkItem;
