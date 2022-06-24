import { Link } from "react-router-dom";
function Header() {
  const selectHeader = document.getElementById("header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 10
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
    console.log("working");
  }
  return (
    <header
      id="header"
      className="header neshed d-flex align-items-center fixed-top"
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to='/' className="logo d-flex align-items-center">
          <h1 className="d-flex align-items-center">React</h1>
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to='/'  className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'  >About</Link>
            </li>
            <li>
              <Link to='/services'  >Services</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/blogs'>Blog</Link>
            </li>
            
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
