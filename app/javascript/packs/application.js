// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


const themeSwitcher = () => {
const themeSwitch = document.querySelector(".click-toggle");
if(!themeSwitch) return;
themeSwitch.addEventListener("click", function() {
  console.log("test")
    document.body.classList.toggle("theme-switcher");
  });
}


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

document.addEventListener("turbolinks:load", () => {
  themeSwitcher()
  // fitMapToMarkers();
});
