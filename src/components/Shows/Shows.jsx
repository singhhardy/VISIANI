import './Shows.css'

function Shows() {
  return (
    <div>
      <div class="show-container">
      <div class="video-container">
          <video src='./showsvid.mp4' autoPlay loop muted width='400px'></video>
          </div>
          <div class="Shows">
            <h1>ENJOY OUR SHOWS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <a href='#'><button>Watch Now</button></a>
          </div>
        </div>
      </div>
  )
}

export default Shows