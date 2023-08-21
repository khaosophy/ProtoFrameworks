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
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}