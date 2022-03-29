import './Navbar.css'

const Navbar = () => {
  return (
    <div>
 <header>
    <div class="nav nav-box-shadow">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
          <div class="nav-title">
              <img src="Yellow Visiani Logo.png" class="navbar-brand-img" alt="Logo" />
          </div>
      </div>
      <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>  
            <span></span>
          </label>
      </div>
      <div class="nav-items">
          <a href="/">Home</a>
          <a href="/Tv">TV</a>
          <a href="/Services">Services</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <input type="checkbox" id="nav-dropdown"></input>
          <label for="nav-dropdown">Login</label>
          <ul class="nav-dropdown-list">
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
      </div>
  </div>
  </header>        
    </div>
  )
}

export default Navbar