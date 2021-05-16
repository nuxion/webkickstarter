import './main.scss';

function helloWorld(){
  console.log("Hi!!");
  const header = document.querySelector("#header");
  header.innerHTML = "Modified by javascript.";
}

helloWorld();

export default helloWorld;
