import MainNavbar from "../../Components/MainNavbar/Navbar.component";
import Carousel from "../../Components/Carousel/Carousel.component";
import SearchNavbar from "../../Components/SearchNavbar/SearchNavbar.component";
import Products from "../../Components/Products/Products";
import ProductPages from "../../Components/ProductPages/ProductPages.component";
import Copyright from "../../Components/Copyright/Copyright.component";


 function MainPage(garments, user, setUser,setPage,sumProduct,totalAmount) {
    ////console.log(_App.state.garments);
    const element = document.createElement('div');

      const app = `
       
        ${MainNavbar()}
        ${Carousel()}
      <div class="contanier">
        ${SearchNavbar(garments)}
        ${ProductPages()}
      </div>
        ${Copyright()}
      `;
      
      element.innerHTML = app;
      const search = element.querySelector("#search-navbar");
      search.after(Products(garments, user, setUser,sumProduct,totalAmount));


      const cart = element.querySelector("#cart");
        if(cart)
    {
      cart.addEventListener("click",() => goToCheckOut());
      function goToCheckOut() {
          setPage(3);
      }
    }

      
    return element;
  }

  export default MainPage;