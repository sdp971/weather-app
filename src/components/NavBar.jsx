import { Link } from "react-router-dom";
import "./Navbar.css"
function NavBar() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/favorites'>Villes préférées</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar