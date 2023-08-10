import './style.css';
import MainNavbar from './Components/MainNavbar/Navbar.component.js';
import Scripts from './Components/Links/scripts.js';
import Links from './Components/Links/link.js';
import Carousel from './Components/Carousel/Carousel.component.js';
import SearchNavbar from './Components/SearchNavbar/SearchNavbar.component';
import Products from './Components/Products/Products';
import ProductPages from './Components/ProductPages/ProductPages.component';
import Copyright from './Components/Copyright/Copyright.component';
import getGarments from './Helpers/getGarments';

const App = async function _App() {
  
  //console.log(_App.state.garments);
  const element = document.createElement('div');
    const app = `
     
      ${MainNavbar()}
      ${Carousel()}
    <div class="contanier">
      ${SearchNavbar()}
      ${Products(_App.state.garments)}
      ${ProductPages()}
    </div>
      ${Copyright()}
      ${Scripts()}
    `;

  element.innerHTML = app;
  return element;
}

App.state = { // this function is used to store the data
  count: 0,
  garments: await getGarments(),

  increment: () => { // the increment fucntion increse the count by 1
    setState(() => App.state.count++);// update the var inside the state
  },
  decrement: () => { 
      setState(() => App.state.count--);
    }
};



document.head.insertAdjacentHTML("beforeend",Links());
document.body.appendChild(await App());
//document.body.insertAdjacentHTML("beforeend", Scripts());