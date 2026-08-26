import React from 'react';
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-links">
        <a href="/animes" className="link">Бидний тухай</a>
        <a href="/animes" className="link">Оюуны өмч</a>
        <a href="/animes" className="link">Үйлчилгээний нөхцөл</a>
      </div>
      <div className="footer-app">
        <a href="" className="app-link">
            <img src="https://animax.mn/animax/img/playstore.cce2ab38.png" alt="store" class="store-logo"/>
            <span>Playstore</span>
        </a>
        <a href="" className="app-link">
            <img src="https://animax.mn/animax/img/appstore.04203de2.png" alt="store" class="store-logo"/>
            <span>Appstore</span>
        </a>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 All rights reserved by Playmax TV. This website is used for purely educational purposes </p>
      </div>
    </div>
  )
}
