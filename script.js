const myItem = document.getElementById('menuitems');
const myMenu = document.getElementById('menuholder');
const myMenuClose = document.getElementById('close_menu');

function mobileMenu() {
  if (myItem.style.display === 'none') {
    myItem.style.display = 'block';
  } else {
    myItem.style.display = 'none';
  }
}
myMenu.addEventListener('click', mobileMenu);

function menuClose() {
  if (myItem.style.display === 'block') {
    myItem.style.display = 'none';
  }
}
myMenuClose.addEventListener('click', menuClose);

// PopUp Model Start //

const projectDatiels = [
  {
    name: 'QR Generator',
    projectStuff: { org: 'Syed', type: 'Front-End Dev', year: '2023' },
    projectImage: 'Images/Image_1.png',
    projectText: 'QR Code Generator is a website that allows users to generate custom QR codes by entering text or links. Developed using HTML, CSS, and JS, it uses an API for code generation. This project makes it easy for users to create QR codes for their websites, social media profiles, and other links.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLive: 'https://atril33.github.io/QR_Code_Generator/',
    projectSource: 'https://github.com/Atril33/QR_Code_Generator',
    liveSource: '<i class="fa-brands fa-github"></i>',
    liveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    liveText: 'See Live',
    sourceText: 'See Source',
  },
  {
    name: 'Math Megican',
    projectImage: 'Images/Image_2.png',
    projectText: 'Math Megican is a simple app that uses React.js to help with basic math problems. It also has educational quotes that make it fun and engaging for users.',
    projectLanguages: ['REACT', 'CSS'],
    projectLive: 'https://math-magicians-71f359xxb-atril33.vercel.app/',
    projectSource: 'https://github.com/Atril33/math-magicians',
  },
  {
    name: 'Programming Languages',
    projectImage: 'Images/Image_3.png',
    projectText: 'World Top Languages is a website that shows you information about the most popular computer programming languages in the world and the best developers who use them. The website was made using HTML and CSS, which are computer languages used to create websites..',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLive: 'https://atril33.github.io/World_top_languages/index.html',
    projectSource: 'https://github.com/Atril33/World_top_languages',
  },
  {
    name: 'Awesome Books',
    projectImage: 'Images/Image_4.png',
    projectText: 'In this Awesome Book Project, I utilized my HTML, CSS, and JS skills with advanced syntax (ES6) to create a dynamic website where users can store their book and author names.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLive: 'https://atril33.github.io/Awesome_books/',
    projectSource: 'https://github.com/Atril33/Awesome_books',
  },
  {
    closeImage: 'Images/close_menu_black.png',
  },
];

const fullProjectPop = document.createElement('div');
fullProjectPop.id = 'myPopFull';
fullProjectPop.classList = 'myFullProject';
document.body.append(fullProjectPop);

const projectPop = document.createElement('div');
projectPop.classList = 'My_container';
fullProjectPop.append(projectPop);

const myCloseImg = document.createElement('img');
myCloseImg.id = 'close_menu1';
myCloseImg.classList = 'cross_img';
myCloseImg.src = `${projectDatiels[4].closeImage}`;
projectPop.appendChild(myCloseImg);

const nameText = document.createElement('div');
nameText.classList = 'My_Text';
projectPop.append(nameText);

const textInner = document.createElement('h1');
textInner.innerText = `${projectDatiels[0].name}`;
nameText.append(textInner);

const ul = document.createElement('ul');
ul.classList = 'list_holder';
projectPop.append(ul);

const list1 = document.createElement('li');
list1.classList = 'lists_items';
list1.textContent = `${projectDatiels[0].projectStuff.org}`;
ul.appendChild(list1);

const list2 = document.createElement('li');
list2.classList = 'lists_items';
list2.textContent = `${projectDatiels[0].projectStuff.type}`;
ul.appendChild(list2);

const list3 = document.createElement('li');
list3.classList = 'lists_items';
list3.textContent = `${projectDatiels[0].projectStuff.year}`;
ul.appendChild(list3);

const myImage = document.createElement('img');
myImage.src = `${projectDatiels[0].projectImage}`;
myImage.classList = 'myPop_img';
projectPop.appendChild(myImage);

const myProjectDes = document.createElement('p');
myProjectDes.classList = 'myPop_des';
projectPop.appendChild(myProjectDes);

const ul1 = document.createElement('ul');
ul1.classList = 'myCode_lan';
projectPop.appendChild(ul1);

const listLang1 = document.createElement('li');
listLang1.classList = 'lang_list';
ul1.appendChild(listLang1);

const listLang2 = document.createElement('li');
listLang2.classList = 'lang_list';
listLang2.innerText = `${projectDatiels[0].projectLanguages[1]}`;
ul1.appendChild(listLang2);

const listLang3 = document.createElement('li');
listLang3.classList = 'lang_list';
listLang3.innerText = `${projectDatiels[0].projectLanguages[2]}`;
ul1.appendChild(listLang3);

const myButtons = document.createElement('div');
myButtons.classList = 'my_btns';
projectPop.appendChild(myButtons);

const a = document.createElement('a');
a.classList = 'pop_button';
a.innerHTML = `${projectDatiels[0].liveText}  ${projectDatiels[0].liveIcons}`;
myButtons.appendChild(a);

const a1 = document.createElement('a');
a1.classList = 'pop_button';
a1.innerHTML = `${projectDatiels[0].sourceText}  ${projectDatiels[0].liveSource}`;
myButtons.appendChild(a1);

const myPopProjects = document.querySelectorAll('.bttn');
const myPopBox = document.getElementById('myPopFull');
const popMenuClose = document.getElementById('close_menu1');

for (let i = 0; i < 4; i += 1) {
  myPopProjects[i].addEventListener('click', () => {
    if (myPopBox.style.display === 'none') {
      myPopBox.style.display = 'block';
      myImage.src = `${projectDatiels[i].projectImage}`;
      textInner.innerText = `${projectDatiels[i].name}`;
      myProjectDes.innerText = `${projectDatiels[i].projectText}`;
      listLang1.innerText = `${projectDatiels[i].projectLanguages[i]}`;
      a.href = `${projectDatiels[i].projectLive}`;
      a1.href = `${projectDatiels[i].projectSource}`;
      window.scroll(0, 1);
    } else {
      myPopBox.style.display = 'none';
    }
  });
}

function menuClose1() {
  if (myPopBox.style.display === 'block') {
    myPopBox.style.display = 'none';
  }
}
popMenuClose.addEventListener('click', menuClose1);

/// my contact form ////

const myEmail = document.querySelector('.emaill');
const myName = document.querySelector('.namme');
const mySubmit = document.querySelectorAll('.submit');
const myTextShow = document.getElementById('erormessage');

const saveUserData = {};

function myEmailChecker(event) {
  const myEmailTest = /[A-Z]/.test(myEmail.value);
  if (myEmailTest === true) {
    myTextShow.innerText = 'All letters in the email must be lowercase';
    event.preventDefault();
  } else {
    myTextShow.innerText = '';
    saveUserData.name = myName.value;
    saveUserData.email = myEmail.value;

   
  }
}

mySubmit[0].addEventListener('click', myEmailChecker);

let myPreserveData = JSON.parse(localStorage.getItem('data'));
if(myPreserveData != null) {
myEmail.value = myPreserveData[0].email;
myName.value = myPreserveData[0].name;
}
console.log(myPreserveData)
mySubmit[0].addEventListener('click', function() {
let myData = [];
myData.push({name: myName.value, email: myEmail.value})
localStorage.setItem('data', JSON.stringify(myData));
});

