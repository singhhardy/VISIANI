import './Plans.css';


function Plans() {
  return (
    <div>
<div class="background">
  <div class="container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img src="basic.png" width="200px" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">BASIC</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item"> Including Ads</li>
          <li class="pricing-features-item">Watch Our Free Movies And Shows</li>
        </ul>
        <span class="pricing-price">Free</span>
        <a href="#/" class="pricing-button">Sign up</a>
      </div>
      
      <div class="pricing-plan">
        <img src="advanced.png" width="200px" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">Advanced</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Ad Free /2 month</li>
          <li class="pricing-features-item">Watch All Our Premium Shows And Movies</li>
          <li class="pricing-features-item">Use Your Account With 2 Different Devices</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
      </div>
      
      <div class="pricing-plan">
        <img src="premium.png" width="200px" alt="" class="pricing-img"></img>
        <h2 class="pricing-header">Premium (popular)</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Ad free /6 months</li>
          <li class="pricing-features-item">Enjoy All our Shows and Movies </li>
          <li class="pricing-features-item">Use your Account With 5 Different Devices</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>
    </div>
    )
 }

export default Plans