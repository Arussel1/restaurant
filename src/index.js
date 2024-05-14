import './style.css';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';

const divContent = document.querySelector("#content");
const buttons = document.querySelectorAll('button');

function switchPages(){
    buttons.forEach(button => button.addEventListener('click', () => {
      if(button.classList.contains("homeButton")){
        Home(divContent);
      } else if (button.classList.contains("menuButton")){
        Menu(divContent);
      } else if(button.classList.contains("aboutButton")){
        About(divContent);
      } else if(button.classList.contains("contactButton")){
        Contact(divContent);
      }
    }));
  }
  


Home(divContent);
switchPages();