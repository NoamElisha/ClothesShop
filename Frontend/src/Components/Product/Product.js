import deleteGarment from "../../Helpers/deleteGarment";
import putGarment from "../../Helpers/putGarment";

function Product(Garment, user, setUser) {
    const hasGarment = user.garments.find((garment) => garment.name == Garment.name);
    const element = document.createElement("div");
    element.setAttribute("class", "col-lg-3 col-md-6 mb-4");
    const app = `
          <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${Garment.picture}"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-dark ms-2">NEW</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-2">${Garment.name}</h5>
            </a>
            <a href="" class="text-reset ">
              <p>Shirt</p>
            </a>
            <h6 class="mb-3 price">${Garment.price}$</h6>
            <button id="purchase" type="button" class="${hasGarment ? "btn btn-outline-danger btn-rounded" : "btn btn-outline-success btn-rounded"}" data-mdb-ripple-color="dark">
              ${hasGarment ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
    `;
    element.innerHTML = app;
    const button = element.querySelector("#purchase");

    button.addEventListener("click", async (e) => {
      e.preventDefault();
      if (hasGarment) {
        const data = await deleteGarment(user._id, Garment._id);
        console.log(data);
        setUser(data);
      }
      else {
        const data = await putGarment(user._id, Garment._id);
        
        console.log(data);
        setUser(data);
      }
    });

    return element;
  }; // this screen is represent the user interface of the website
  // the H1 get a counter inside him from the "state"
export default Product;