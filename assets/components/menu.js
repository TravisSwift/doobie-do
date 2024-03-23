const menuTemplate = document.createElement('template');

menuTemplate.innerHTML = `
<style>

* {
text-decoration: none;
}

  nav {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;      
    font-family: 'Times New Roman', Times, serif;
    background-color: black;
    text-decoration: none; 
    padding: 10px;  
  }

  ul {
    padding: 0;
  }
  
  ul li {
    list-style: none;
    display: inline;
  }
  
  a {
    font-weight: 100;
    margin: 0 25px;
    color: #fff;
    text-decoration: none;
    font-size: .4em;
  }
  
  a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #fff;
    text-decoration: none;
    color:red;
  }
</style>
  <header>
    <nav>
    <div class="header-right">
    <a class="active" href="./index.html">Home</a>
      <a class="active"./comicstrips.html"./">Comics</a>
      <a href="https://fun-fun-shop.printify.me/products" target="blank">Shop</a>
      <a href="./comingsoon.html" class="image-link">Coming Soon!</a>
      </div>
    </nav>
  </header>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(menuTemplate.content);
  }
}

customElements.define('menu-component', Menu);
