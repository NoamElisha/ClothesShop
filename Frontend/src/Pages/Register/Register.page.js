import './register.css'

//import postClient from '../../Helpers/postClient.js'
import postAvailableClient from '../../Helpers/postAvailableClient.js'
import checkUsername from '../../Helpers/checkUsername';
import postClient from '../../Helpers/postClient';


 function RegisterPage(setPage) {
   // //console.log();
    const element = document.createElement('div');
    
      const app = `
       
      <div class="register-container">
      <h1><strong>Welcome to ClothesShop</strong> </h1>
      <h2>Register</h2>
      <form id="register-form-class">
          <label for="username">Username:</label>
          <input type="text" id="username" class="user" name="username" required>
          <label for="password">Password:</label>
          <input type="password" id="password" class="pass" name="password" required>
          <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" id="login-link" >Login here</a></p>
      <p><a href="index.html">Go to Main Page </a></p>
      </div>
    
      `;
  
      element.innerHTML = app;

      const form = element.querySelector("#register-form-class");
     
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = form.querySelector(".user").value;
        const password = form.querySelector(".pass").value;

        
        try {
            const availableUser = await checkUsername(username);

            if(availableUser==true)
            {
                console.log(username);
                alert("client username already exist");
            }
            else if(availableUser==false)
            {
                await postClient(username,password,[])
                setPage(0);
                
            }

        } catch (error) {
            console.error("Error:", error);
        }
    });

    const loginLink = element.querySelector("#login-link");
    if(loginLink)
    {
        loginLink.addEventListener("click", () => goToLogin());
    
        function goToLogin() {
            setPage(0);
        }

    }
      return element; 
    
  }

 
  export default RegisterPage;









