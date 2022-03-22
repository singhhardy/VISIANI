import './Movies.css';

function Movies() {
  return (
    <div>
    <div class="show-container">
          <div class="Shows">
            <h1>Watch Our Latest Movies</h1>
            <p>Buy Now and Watch our premium Movies Live or download</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <a href='#'><button>Watch Now</button></a>
          </div>
          <div class="video-container">
          <video src='./movievid.mp4' autoPlay loop muted width='400px'></video>
          </div>
        </div>
        
    </div>
  )
}

export default Movies