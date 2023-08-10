const _MainNavbar = window.MainNavbar;
const _Carousel= window.Carousel;
const _SearchNavbar= window.SearchNavbar;
const _Products= window.Products;
const _ProductPages = window.ProductPages;
const _Copyright = window.Copyright;
const App = function _App() {
  return `
  ${_MainNavbar()}
  ${_Carousel()}
  <main>
  <div class="container"> 
  ${_SearchNavbar()}
  ${_Products()}
  ${_ProductPages()}
  </div>
  </main>
  ${_Copyright()}
  `;
}; // this screen is represent the user interface of the website
// the H1 get a counter inside him from the "state"


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

fetch("http://localhost:3000/") // Replace YOUR_BACKEND_PORT with the actual port
  .then((response) => response.json())
  .then((data) => {
    // Process the data and update the UI
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });