import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex align-items-center border-bottom">
        <div className="container">
          <img
            src="https://s7d2.scene7.com/is/image/PartyRental/black_logo_web?fmt=png-alpha"
            style={{ width: '300px' }}
          />
          <ul className="list-unstyled m-0 d-flex gap-3 ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}