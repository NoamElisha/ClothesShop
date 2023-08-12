import './login.page.css'

//import postClient from '../../Helpers/postClient.js'
import postAvailableClient from '../../Helpers/postAvailableClient.js'

 function LoginPage(setUser,setPage) {
   // //console.log();
    const element = document.createElement('div');
    
      const app = `
       
    <div class="login-container">
      <h1><strong>Welcom to ClothesShop</strong> </h1>
      <h2>Login</h2>
      <form id="login-form" class="login-form-class">
          <label for="username">Username:</label>
          <input type="text" class="user" id="username" name="username" required>
          <label for="password">Password:</label>
          <input type="password" class="pass" id="password" name="password" required>
          <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="register.html">Register here</a></p>

    </div>
    
      `;
  
      element.innerHTML = app;

      const form = element.querySelector(".login-form-class");
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = form.querySelector(".user").value;
        const password = form.querySelector(".pass").value;

        
        try {
            const client = await postAvailableClient(username,password,[])

            setPage(1);
            setUser(client);
  
           console.log("User logged successfully!");

        } catch (error) {
            console.error("Error:", error);
        }
    });
      return element; 
    
  }

  export default LoginPage;







//   element.innerHTML = app;
//   const form = element.getElementsByClassName("login-form-class")[0];
//   form.addEventListener('submit',(event) => {
//   event.preventDefault();
//   const username = form.getElementByClassName("user")[0];
//   const password = form.getElementByClassName("pass")[0];
//   //console.log(username,password);
//   });
//   return element.firstChild;



// form.addEventListener('submit', (event) => {
      
//     event.preventDefault();
    
//     const username = form.querySelector(".user").value;
//     const password = form.querySelector(".pass").value;
    
//     //console.log(form.querySelector(".user"));
//     //console.log('Username:', username);
//     //console.log('Password:', password);
//   });