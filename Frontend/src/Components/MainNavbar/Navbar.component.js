

function MainNavbar() {
  return `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
<!-- Container wrapper -->
<div class="container">    
  <!-- Toggle button -->
  <button
    class="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i class="fas fa-bars"></i>
  </button>

  <!-- Collapsible wrapper -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">      
    <!-- Navbar brand -->
    <a class="navbar-brand mt-2 mt-sm-0" href="#">
      <img
        src="https://cdn.discordapp.com/attachments/1140175239976857702/1140296329449439283/Logo.jpg"
        height="20"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
    <!-- Left links -->
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <a class="nav-link" id="HomePage" href="#">Home</a>
      </li>
    </ul>
    <!-- Left links -->      
  </div>
  <!-- Collapsible wrapper -->
  
  <!-- Right elements -->
  <div class="d-flex align-items-center">
    <!-- Icon -->
    <a class="nav-link me-3" id="cart" href="#">
      <i class="fas fa-shopping-cart"></i>
      <span class="badge rounded-pill badge-notification bg-danger">1</span>
    </a>
  </div>
  <!-- Right elements -->
  
</div>
<!-- Container wrapper -->
</nav>
<!-- Navbar -->
  `;
}; // this screen is represent the user interface of the website
// the H1 get a counter inside him from the "state"
export default MainNavbar;
//window.MainNavbar = MainNavbar; 
