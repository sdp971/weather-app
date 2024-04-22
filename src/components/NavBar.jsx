import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/accueil'>Accueil</Link>
        </li>
        <li>
          <Link to='/favorites'>Villes préférées</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar