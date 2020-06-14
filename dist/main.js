/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navbar.js */ "./src/modules/navbar.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");





var clearContent = function clearContent() {
  var content = document.getElementById("homeContainer");
  content.querySelectorAll("*").forEach(function (n) {
    return n.remove();
  });
};

var displayHome = function displayHome() {
  clearContent();
  Object(_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var menuBtn = document.getElementById("menu1");
  menuBtn.addEventListener("click", displayMenu);
};

var displayMenu = function displayMenu() {
  clearContent();
  _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].setMenu();
};

var displayContact = function displayContact() {
  clearContent();
  Object(_modules_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

document.addEventListener('DOMContentLoaded', function () {
  Object(_modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var home = document.getElementById("home");
  var menu = document.getElementById("menu2");
  var menuBtn = document.getElementById("menu1");
  var contact = document.getElementById("contact");
  menuBtn.addEventListener("click", displayMenu);
  menu.addEventListener('click', displayMenu);
  home.addEventListener('click', displayHome);
  contact.addEventListener('click', displayContact);
});

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Contact = function Contact() {
  var container = document.getElementById("homeContainer");
  var form = document.createElement("form");
  form.className = "contactForm";
  var nameLabel = document.createElement("label");
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerText = 'Name:'; //nameLabel.c

  var name = document.createElement("input");
  name.id = "name";
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'name');
  var emailLabel = document.createElement("label");
  emailLabel.setAttribute('for', 'email');
  emailLabel.innerText = 'Email:';
  var email = document.createElement("input");
  email.id = "email";
  email.setAttribute('type', 'email');
  email.setAttribute('name', 'email');
  var textAreaLabel = document.createElement("label");
  textAreaLabel.setAttribute('for', 'message');
  textAreaLabel.innerText = 'Send us your comments:';
  var textarea = document.createElement('textarea');
  textarea.id = "message";
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('id', 'message');
  textarea.setAttribute('cols', '30');
  textarea.setAttribute('rows', '10');
  textarea.setAttribute('required', 'true');
  var submitBtn = document.createElement('button');
  submitBtn.id = "contactBtn";
  submitBtn.classList.add('form-btn');
  submitBtn.innerText = 'Send';
  form.appendChild(nameLabel);
  form.appendChild(name);
  form.appendChild(emailLabel);
  form.appendChild(email);
  form.appendChild(textAreaLabel);
  form.appendChild(textarea);
  form.appendChild(submitBtn);
  container.appendChild(form);
  return container;
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Home = function Home() {
  var container = document.getElementById("homeContainer");
  var homeContainer = document.createElement("div");
  homeContainer.className = "home";
  var EBlogo = document.createElement("h1");
  EBlogo.innerHTML = "EARLY BIRD";
  homeContainer.appendChild(EBlogo);
  var EBtagline = document.createElement("p");
  EBtagline.innerHTML = "Not your everyday brunch, every day.";
  homeContainer.appendChild(EBtagline);
  var EBmenu = document.createElement("h2");
  EBmenu.innerHTML = "MENU";
  EBmenu.id = "menu1";
  homeContainer.appendChild(EBmenu);
  var hours = document.createElement("p");
  hours.innerHTML = "Everyday: 7:00am - 2:00pm";
  homeContainer.appendChild(hours);
  var delivery = document.createElement("p");
  delivery.innerHTML = "Get delivery through DoorDash or GrubHub";
  homeContainer.appendChild(delivery);
  var carryOut = document.createElement("p");
  carryOut.innerHTML = "We are now accepting carry-out orders all day on Sat/Sun.";
  homeContainer.appendChild(carryOut);
  container.appendChild(homeContainer);
  return container;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Menu = function () {
  var menuList = [{
    title: "Breakfast",
    items: ["Pancakes", "Eggs", "Waffles"]
  }, {
    title: "Drinks",
    items: ["Coffee", "Chai", "Orange Juice"]
  }];

  var addSection = function addSection(menu) {
    var section = document.createElement('section');
    var h2 = document.createElement('h2');
    h2.innerText = menu.title;
    h2.className = "title";
    var ul = document.createElement('ul');
    menu.items.forEach(function (item) {
      var li = document.createElement('li');
      li.innerText = item;
      li.className = "item";
      ul.appendChild(li);
    });
    section.appendChild(h2);
    section.appendChild(ul);
    return section;
  };

  var setMenu = function setMenu() {
    var content = document.getElementById('homeContainer');
    var main = document.createElement('main');
    main.className = "menu";
    main.classList.add('menu-main');
    menuList.forEach(function (menu) {
      var section = addSection(menu);
      main.appendChild(section);
    });
    content.appendChild(main);
  };

  return {
    setMenu: setMenu
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Navbar = function Navbar() {
  var container = document.getElementById("navContainer");
  var navBar = document.createElement("div");
  navBar.className = "navbar";
  var home = document.createElement("a");
  home.innerHTML = "HOME";
  home.id = "home";
  navBar.appendChild(home);
  var menu = document.createElement("a");
  menu.innerHTML = "MENU";
  menu.id = "menu2";
  navBar.appendChild(menu);
  var contact = document.createElement("a");
  contact.innerHTML = "CONTACT";
  contact.id = "contact";
  navBar.appendChild(contact);
  container.appendChild(navBar);
  return container;
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map