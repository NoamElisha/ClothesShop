// const _MainNavbar = window.MainNavbar;
// const _Carousel= window.Carousel;
// const _SearchNavbar= window.SearchNavbar;
// const _Products= window.Products;
// const _ProductPages = window.ProductPages;
// const _Copyright = window.Copyright;
import MainNavbar from './Components/MainNavbar/Navbar.component.js';
// import Carousel from './Components/Carousel/Carousel.component.js';
// import SearchNavbar from './Components/SearchNavbar/SearchNavbar.component.js';
// import Products from './Components/Products/Products.js';
// import ProductPages from './Components/ProductPages/ProductPages.component.js';
// import Copyright from './Components/Copyright/Copyright.component.js';

const App = function _App() {
  return `
  ${MainNavbar()}
 
  `;
}; // this screen is represent the user interface of the website
// the H1 get a counter inside him from the "state"
// ${Carousel()}
// <main>
//   <div class="container"> 
//     ${SearchNavbar ()}
//     ${Products()}
//     ${ProductPages()}
//   </div>
// </main>
// ${Copyright()}

App.state = { // this function is used to store the data
  count: 0,
  increment: () => { // the increment fucntion increse the count by 1
    setState(() => App.state.count++);// update the var inside the state
  },
  decrement: () => { 
      setState(() => App.state.count--);
    }
};

const setState = (callback) => { //call back is a function
  callback(); // execute the function that we got 
  updateTree(); // call update tree function
}

const updateTree = () => {
  document.getElementById("app").innerHTML = App();
  document
    .getElementById("increase")
    .addEventListener("click", App.state.increment);
  document
    .getElementById("decrease")
    .addEventListener("click", App.state.decrement);
};

updateTree();

