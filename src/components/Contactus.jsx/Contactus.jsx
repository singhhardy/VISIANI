import './Contactus.css';



function Contactus() {
  return (
    <div>
<section class="contact" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="title">
                        <h3>Contact detail</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                    <div class="content">
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block">PHONE :
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        <div class="info">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block">EMAIL :
                                
                                <span>example@info.com</span></h4>
                        </div>
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block">ADDRESS :
                                <span>6743 last street , Abcd, Xyz</span></h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">

                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name"></input>
                            </div>
                            <div class="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email"></input>
                            </div>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button class="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contactus