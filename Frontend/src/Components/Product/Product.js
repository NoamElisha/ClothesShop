

function Product(Garment) {
  //console.log(Garment);
  console.log(Garment.picture);

    return `

<div class="col-lg-3 col-md-6 mb-4">
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
    </div>
  </div>
</div>


    `;
  }; // this screen is represent the user interface of the website
  // the H1 get a counter inside him from the "state"




  export default Product;
   
