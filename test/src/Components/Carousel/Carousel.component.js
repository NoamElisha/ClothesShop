
function Carousel() {
    return `
    <!-- carousel -->
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg" class="d-block w-100" alt="Wild Landscape"/>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)"></div>
          <div class="carousel-caption d-none d-sm-block mb-5">
            <h1 class="mb-4">
                    <strong>Welcome To ClothesShop</strong>
                  </h1>
     
                  <p>
                    <strong>This is the best clothes shop in town!</strong>
                  </p>
     
                  <p class="mb-4 d-none d-md-block">
                    <strong>You can find here the best prices all over the town and the newest collections!</strong>
                  </p>
     
   
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg" class="d-block w-100" alt="Camera"/>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)"></div>
          <div class="carousel-caption d-none d-md-block mb-5">
            <h1 class="mb-4">
            <strong>Welcome To ClothesShop</strong>
            </h1>

            <p>
              <strong>This is the best clothes shop in town!</strong>
            </p>

            <p class="mb-4 d-none d-md-block">
              <strong>You can find here the best prices all over the town and the newest collections!</strong>
            </p>


          </div>
        </div>
        <div class="carousel-item">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg" class="d-block w-100" alt="Exotic Fruits"/>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)"></div>
          <div class="carousel-caption d-none d-md-block mb-5">
            <h1 class="mb-4">
            <strong>Welcome To ClothesShop</strong>
            </h1>

            <p>
              <strong>This is the best clothes shop in town!</strong>
            </p>

            <p class="mb-4 d-none d-md-block">
              <strong>You can find here the best prices all over the town and the newest collections!</strong>
            </p>

          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;
  }; // this screen is represent the user interface of the website
  // the H1 get a counter inside him from the "state"

  
  window.Carousel = Carousel; 
 