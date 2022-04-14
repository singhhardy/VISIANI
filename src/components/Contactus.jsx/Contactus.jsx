import './Contactus.css';



function Contactus() {
  return (
      <div>
          <section class="Contact">
            <video src='./contact.mp4' autoPlay playsInline muted loop></video>
            <div class="con">
            <form>
            <div>
            <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"></img>
            </div>
            <input type="text" placeholder="Name (required)" required></input>
            <input type="text" placeholder="Return address (required)" required></input>
            <input type="text" placeholder="Topic (required)" required></input>
            <textarea placeholder="Subject (required)" required></textarea>
            <input type="submit" value="Send"></input>
          </form>
            </div>
            <ul class="social">
            <li><a href="https://www.instagram.com/visianistudios/" target="_blank"><img src="./ig.png" width="40px"></img></a></li>
            <li><a href="https://www.linkedin.com/in/visiani-studios-00828b235/" target="_blank"><img src="./linkedin.png" width="55px"></img></a></li>
            <li><a href="https://www.youtube.com/channel/UCGiqufRusa67eJ54Yeo09xg" target="_blank"><img src="./youtube.png" width="70px"></img></a></li>
            </ul> 
        </section>

      </div>
  )
}

export default Contactus