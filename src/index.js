// import './main.scss';
import "./tailwind.css";
import 'alpinejs';
// ai is my namespace
const html = document.getElementsByTagName('html')[0];
/*const AIApp = {
  darkMode(){
    if(html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('white');
    console.log("To white");

  } else {
    html.classList.add('dark');
    html.classList.remove('white');
    console.log("To dark");
  }
  }
};*/

window.aiDarkMode = function(){
  return {
    toggle(){
      console.log("Toggle");
      if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('white');
        console.log("To white");
      } else {
        html.classList.add('dark');
        html.classList.remove('white');
        console.log("To dark");
      }
    }
  };
};


function helloWorld(){
  console.log("Hi!! Change");
  // const header = document.querySelector("#header");
  // header.innerHTML = "Modified by javascript.";
}

helloWorld();

// export default {helloWorld, aiHtmlDarkMode};
