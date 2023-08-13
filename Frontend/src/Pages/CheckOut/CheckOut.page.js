 import MainNavbar from "../../Components/MainNavbar/Navbar.component";
 import Carousel from "../../Components/Carousel/Carousel.component";
 import SearchNavbar from "../../Components/SearchNavbar/SearchNavbar.component";
 import Products from "../../Components/Products/Products";
 import ProductPages from "../../Components/ProductPages/ProductPages.component";
 import Copyright from "../../Components/Copyright/Copyright.component";
import Garment from "../../../../Backend/Models/Garment.model";
  function CheckOutPage(garments,user,setUser,setPage) {
     ////console.log(_App.state.garments);
     const element = document.createElement('div');

     const sum = user.garments.reduce((total, garment) => total + garment.price, 0);


       const app = `
     
         ${MainNavbar(setUser)}
         ${Carousel()}
         <h1 align="center"><strong>Cart: </strong></h1>
       <div id="product-to-buy">
      
      
       </div>
        <h1 align="center">total price to pay: ${sum}$</h1>
         ${Copyright()}
       `;
       element.innerHTML = app;
       const cart = element.querySelector("#product-to-buy");
       cart.after(Products(user.garments, user, setUser));
        
       // const sum=user.garments.map((garment)=>garment.price);

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