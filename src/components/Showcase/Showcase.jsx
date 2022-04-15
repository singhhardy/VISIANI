import './Showcase.css'



function Showcase() {
  return (
    <div>
        <section class="showcase">
            <video src='./showcaseB.mp4' autoPlay playsInline muted loop></video>
            <div class="overlay"></div>
            <div class="text">
            <h2>WE RENDER YOUR VISIONS</h2> 
            <h3>AT "VISIANI"</h3>
            <p>Everybody has a story to tell and what nicer way to tell your story than in the form of Animation. Whether you are and individual who wants to convey a message or you have
               a brand that needs to showcase its vision? VISIANI is for you.</p>
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