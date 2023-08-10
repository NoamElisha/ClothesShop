import './style.css';
import MainNavbar from './Components/MainNavbar/Navbar.component.js';
import Scripts from './Components/Links/scripts.js';
import Links from './Components/Links/link.js';
import Carousel from './Components/Carousel/Carousel.component.js';
import SearchNavbar from './Components/SearchNavbar/SearchNavbar.component';
import Products from './Components/Products/Products';
import ProductPages from './Components/ProductPages/ProductPages.component';
import Copyright from './Components/Copyright/Copyright.component';

function App() {
  const element = document.createElement('div');
    const app = `
     
      ${MainNavbar()}
      ${Carousel()}
    <div class="contanier">
      ${SearchNavbar()}
      ${Products()}
      ${ProductPages()}
    </div>
      ${Copyright()}
      ${Scripts()}
    `;
  element.innerHTML = app;
  return element;
}

document.head.insertAdjacentHTML("beforeend",await Links());
document.body.appendChild(App());

//document.body.insertAdjacentHTML("beforeend", Scripts());