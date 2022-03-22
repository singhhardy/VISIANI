import './Showcase.css'



function Showcase() {
  return (
    <div>
        <section class="showcase">
            <video src='./showcase.mp4' autoPlay muted loop></video>
            <div class="overlay"></div>
            <div class="text">
            <h2>WE RENDER YOUR VISIONS</h2> 
            <h3>AT "VISIANI"</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
            <a href="#">Explore</a>
            </div>
            <ul class="social">
            <li><a href="#"><img src="./ig.png" width="40px"></img></a></li>
            <li><a href="#"><img src="./linkedin.png" width="55px"></img></a></li>
            <li><a href="#"><img src="./youtube.png" width="55px"></img></a></li>
            </ul>
        </section>
    </div>

  )
}

export default Showcase