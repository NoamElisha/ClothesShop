function SearchNavbar() {
  return `
  <nav id="search-navbar" class="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2" style="background-color: #607D8B">
  <!-- Container wrapper -->
  <div class="container-fluid">
 
    <!-- Navbar brand -->
    <a class="navbar-brand" href="#">Garments:</a>
 
    <!-- Toggle button -->
    <button 
       class="navbar-toggler" 
       type="button" 
       data-mdb-toggle="collapse" 
       data-mdb-target="#navbarSupportedContent2" 
       aria-controls="navbarSupportedContent2" 
       aria-expanded="false" 
       aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
 
    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
      <!-- Use ms-auto class to push search input to the right -->
      
    </div>
  </div>
  <!-- Container wrapper -->
</nav>
  `;
};

export default SearchNavbar;