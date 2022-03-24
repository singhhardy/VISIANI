import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header class="header">
          <a href="" class="logo"><img src='./Yellow Visiani Logo.png'></img></a>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/Tv">TV</a></li>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </header>
    </div>
  )
}

export default Navbar