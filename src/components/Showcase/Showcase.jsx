import './Showcase.css'



function Showcase() {
  return (
    <div>
        <section class="showcase">
            <video src='./showcase.mp4' autoPlay playsInline muted loop></video>
            <div class="overlay"></div>
            <div class="text">
            <h2>WE RENDER YOUR VISIONS</h2> 
            <h3>AT "VISIANI"</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
            <a href="Tv" >Explore</a>
            </div>
            {/* <ul class="social">
            <li><a href="https://www.instagram.com/visianistudios/" target="_blank"><img src="./ig.png" width="40px"></img></a></li>
            <li><a href="https://www.linkedin.com/in/visiani-studios-00828b235/"><img src="./linkedin.png" width="55px"></img></a></li>
            <li><a href="https://www.youtube.com/channel/UCGiqufRusa67eJ54Yeo09xg"><img src="./youtube.png" width="55px"></img></a></li>
            </ul> */}
        </section>
    </div>

  )
}

export default Showcase