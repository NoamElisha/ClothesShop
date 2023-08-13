
import Product from "../Product/Product";



function Products(garments, user, setUser) {
    const element = document.createElement("div");
    const app = `
      <section>
        <div class="text-center">
          <div class="row" id="row">
          </div>
        </div>
      </section>  
    `;

    element.innerHTML = app;
    const row = element.querySelector("#row");
    


    
    garments.map((garment) => {
      row.appendChild(Product(garment, user, setUser));
    });

   





    return element;
  }; 
  

  export default Products;
   