import './Movies.css';

function Movies() {
  return (
    <div>
    <div class="Movie-container">
          <div class="Movie">
            <h1>Watch Our Latest Movies</h1>
            <p>Buy Now and Watch our premium Movies Live or download</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
            </p>
            <a href='/Tv'><button class="btn1">Watch Now</button></a>
          </div>
          <div class="Movievideo-container">
          <video src='./movievid.mp4' autoPlay loop playsInline muted width='400px'></video>
          </div>
        </div>
        
    </div>
  )
}

export default Movies