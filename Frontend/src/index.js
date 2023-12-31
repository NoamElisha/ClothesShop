import './style.css';
import Links from './Components/Links/link.js';
import getGarments from './Helpers/getGarments.js';
import MainPage from './Pages/MainPage/MainPage.page.js';
import LoginPage from './Pages/Login/Login.page.js';
import getUsers from './Helpers/getUsers.js'
import Scripts from './Components/Links/scripts'
import RegisterPage from './Pages/Register/Register.page';
import CheckOutPage from './Pages/CheckOut/CheckOut.page';


const App = async function _App() {

  ////console.log(_App.state.garments);
  //  const element = document.createElement('div');
  //    const app = `
  //    ${LoginPage()}
  //    `;
  console.log(_App.state.numberPage);
  const element = document.createElement('div');
  element.setAttribute('id','app-content');
  const loginPage = LoginPage(_App.state.setUser,_App.state.setPage); // Create the LoginPage component
  
  if(_App.state.numberPage==0)
  {
    element.appendChild(loginPage); // Append the LoginPage element to the container
  }
  else if(_App.state.numberPage==1)
  {
    
    element.appendChild(MainPage(_App.state.garments, _App.state.user, _App.state.setUser,_App.state.setPage));
    element.insertAdjacentHTML("beforeend",Scripts());

    
    return element;

  }
  else if(_App.state.numberPage==2)
  {
    element.appendChild(RegisterPage(_App.state.setPage));

  }
   else if(_App.state.numberPage==3)
   {
     element.appendChild(CheckOutPage(_App.state.garments, _App.state.user, _App.state.setUser,_App.state.setPage));

   }

  // element.innerHTML = app;
   return element;
}

// ${MainPage(_App.state.garments)}
//      ${Scripts()}


App.state = { // this function is used to store the data
  numberPage: 0,
  user:{},
  garments: await getGarments(),
  totalAmount: 0,
  
  setUser: (user) => {
    setState(() =>App.state.user = user)
  },
  setPage: (number) => { // the increment fucntion increse the count by 1
    setState(() => App.state.numberPage = number );// update the var inside the state
  },
  sumProduct: (number) => {
      setState(() => App.state.totalAmount = number);
    }
};

const setState = (callback) => { //call back is a function
  callback(); // execute the function that we got
  updateTree(); // call update tree function
}



const updateTree = async () => {
  const appContent = document.getElementById('app-content');
  appContent.replaceWith(await App());
  //document.body.appendChild(await App());
};



document.body.appendChild(await App());

document.head.insertAdjacentHTML("beforeend",Links());

// updateTree();

//document.body.insertAdjacentHTML("beforeend", Scripts());