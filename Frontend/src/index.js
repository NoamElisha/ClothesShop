import './style.css';
import Links from './Components/Links/link.js';
import getGarments from './Helpers/getGarments.js';
import MainPage from './Pages/MainPage/MainPage.page.js';
import LoginPage from './Pages/Login/Login.page.js';
import getUsers from './Helpers/getUsers.js'
import Scripts from './Components/Links/scripts'
const App = async function _App() {
  
  //console.log(_App.state.garments);
  //  const element = document.createElement('div');
  //    const app = `
  //    ${LoginPage()}
  //    `;
   const element = document.createElement('div');
   element.setAttribute('id','app-content');
   const loginPage = LoginPage(_App.state.setUser,_App.state.user); // Create the LoginPage component
   element.appendChild(loginPage); // Append the LoginPage element to the container

  // element.innerHTML = app;
   return element;
}

// ${MainPage(_App.state.garments)}
//      ${Scripts()}


App.state = { // this function is used to store the data
  count: 0,
  user:{},
  garments: await getGarments(),
  

  setUser: (user) => {
    setState(() =>App.state.user = user)
  },
  increment: () => { // the increment fucntion increse the count by 1
    setState(() => App.state.count++);// update the var inside the state
  },
  decrement: () => { 
      setState(() => App.state.count--);
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

//updateTree();

//document.body.insertAdjacentHTML("beforeend", Scripts());