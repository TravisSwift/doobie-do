/* ADD A CLICKABLE WITH A RESULT LIKE CONFETTI OR SMOKE */

class footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class:"footer">

        <style>
        * {
          box-sizing: border-box;
          text-decoration: none;  
        }
        
        /* Create three equal columns that floats next to each other */
        .left {
          float: left;
          width: 33.33%;
          padding: 10px;
          
        }
        
        .center {
          float: left;
          width: 33.33%;
          padding: 10px;
          
        }

        .right {
          float: left;
          width: 33.33%;
          padding: 10px;
          
        }
        


        </style>  
        
          <nav class="footer-component">  

          
          <ul class="footerLinks">
          <div>
          <a>Made with ❤️ & <img src="./assets/images/logos/cannabis.png"  text-align: center; class="leaf"> by SuperDoobie.com<a class="footerLinks" text-align: center;>superdoobie.com copyright 2024 All Rights Reserved</a></div>

          <ui>
          
        </div></h1>
      </div>
<div>
          <ul>
          <div class="footer">
          <ui></ui>
          <ui><a href="./about.html" target="_blank" class="about"> <i class="fa fa-question-circle" aria-hidden="true"></i></i></a></ui>
          <ui><a href="https://twitter.com/Super_Doobie" target="_blank" class="twitter"> <i class="fa fa-twitter"></i></a></ui>
          <ui><a href="https://www.instagram.com/superdoobie/" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a></ui>
          <ui> <a href="https://www.youtube.com/@superdoobie/featured" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a></ui>
          <ui><a href="mailto:thesuperdoobie@gmail.com" target="_blank" class="mailto"> <i class="fa fa-envelope"></i></a>  </ui>
          </div>
          </ul>
          </nav>
          </div>





 
      

        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', footer);