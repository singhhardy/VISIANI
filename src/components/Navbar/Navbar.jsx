import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header class="header">
          <a href="" class="logo"><img src='./Yellow Visiani Logo.png'></img></a>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="#work">TV</a></li>
            <li><a href="#about">Movies</a></li>
            <li><a href="#careers">Shop</a></li>
            <li><a href="#careers">Services</a></li>
            <li><a href="#contact">About</a></li>
          </ul>
        </header>
    </div>
  )
}

export default Navbar