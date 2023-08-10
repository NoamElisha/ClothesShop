import MainNavbar from "../../Components/MainNavbar/Navbar.component";
import Carousel from "../../Components/Carousel/Carousel.component";
import SearchNavbar from "../../Components/SearchNavbar/SearchNavbar.component";
import Products from "../../Components/Products/Products";
import ProductPages from "../../Components/ProductPages/ProductPages.component";
import Copyright from "../../Components/Copyright/Copyright.component";


 function MainPage(garments) {
  
    //console.log(_App.state.garments);
    
      const app = `
       
        ${MainNavbar()}
        ${Carousel()}
      <div class="contanier">
        ${SearchNavbar(garments)}
        ${Products(garments)}
        ${ProductPages()}
      </div>
        ${Copyright()}
        
      `;
  
    
    return app;
  }

  export default MainPage;

