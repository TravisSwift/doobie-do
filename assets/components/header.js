class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <header class="header">
        <div class="hText><a href="./index.html"><img class="logo" src="./assets/images/logos/greenlogonobackground.png" max-height="30px" max-width="30px"></div><div">Welcome to the world of Super Doobie!</a></div>

        <nav class='header-component'>

  <div class="header-right">
  <a class="active" href="./index.html">Home</a>
    <a class="active" href="#home">Comics</a>
    <a href="#contact">Entertainment</a>
    <a href="#about">Gallery</a>
    <a href="https://fun-fun-shop.printify.me/products" target="blank">Shop</a>
    <a href="#about">Community</a>
  </div>
</div>

<div style="padding-left:20px">
  <h1></h1>
  <p></p>
  <p></p>
</div>
           
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

