import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/transactions" className="navText">
        <h1>Budget App</h1>
      </Link>
      <Link to="/transactions/new" className="navText">
        <p>NEW TRANSACTION</p>
      </Link>
    </nav>
  );
}
