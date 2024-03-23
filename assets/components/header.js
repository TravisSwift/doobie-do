class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <header class="header">
        <div class="hText" a href="https://www.superdoobie.com/index.html">
        <img class="logo" src="./assets/images/logos/greenlogonobackground.png" max-height="30px" 
        </div>
        <div class="slogan">Welcome to the world of Super Doobie!</a></div>

        <nav class='header-component'>

  <div class="header-right">
  <a class="active" href="./index.html">Home</a><a href="https://fun-fun-shop.printify.me/products" target="blank">Shop</a>
  <a href="./comingsoon.html" class="image-link">Coming Soon!</a>
  </div>
</div>
          
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

