import './style.css';
import MainNavbar from './Components/MainNavbar/Navbar.component';
import Scripts from './Components/Links/scripts';
import Links from './Components/Links/link';



function App() {
  const element = document.createElement('div');
    const app = ` <h1>Hello Vanilla JS!</h1>
      <div>
        Example of state management in Vanilla JS
      </div>
      <br />
      ${MainNavbar()}
      <button id="increase">Increase</button>
      <button id="decrease">decrease</button>
    `;
  element.innerHTML = app;
  return element;
}

document.head.insertAdjacentHTML("beforeend", Links());
document.body.appendChild(App());
document.body.insertAdjacentHTML("beforeend", Scripts());