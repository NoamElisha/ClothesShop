 import MainNavbar from "../../Components/MainNavbar/Navbar.component";
 import Carousel from "../../Components/Carousel/Carousel.component";
 import SearchNavbar from "../../Components/SearchNavbar/SearchNavbar.component";
 import Products from "../../Components/Products/Products";
 import ProductPages from "../../Components/ProductPages/ProductPages.component";
 import Copyright from "../../Components/Copyright/Copyright.component";
  function CheckOutPage(garments,user,setUser,setPage) {
     ////console.log(_App.state.garments);
     const element = document.createElement('div');
       const app = `
     
         ${MainNavbar(setUser)}
         ${Carousel()}
         <h1 align="center"><strong>Cart: </strong></h1>
       <div id="product-to-buy">
      
      
       </div>

         ${Copyright()}
       `;
       element.innerHTML = app;
       const cart = element.querySelector("#product-to-buy");
       cart.after(Products(user.garments, user, setUser));

       const HomePage = element.querySelector("#HomePage");
       if(HomePage)
   {
     HomePage.addEventListener("click",() => goToHomePage());
     function goToHomePage() {
         setPage(1);
     }
   }



     return element;
   }
   export default CheckOutPage;