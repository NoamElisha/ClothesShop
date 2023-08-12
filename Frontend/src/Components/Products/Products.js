
import Product from "../Product/Product";



function Products(garments) {
  ////console.log(garments);
    return `
    <section>
    <div class="text-center">
      <div class="row">
        
       
          ${garments.map((garment) => {
            return Product(garment);
          })}
        
   
        
      </div>
    </div>
  </section>  
    `;
  }; // this screen is represent the user interface of the website
  // the H1 get a counter inside him from the "state"

  export default Products;
   
