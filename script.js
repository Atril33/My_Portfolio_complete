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
    name: 'Tonic',
    projectStuff: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    projectImage: 'Images/Image_1.png',
    projectText: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    projectLanguages: ['Css', 'Html', 'Javascript'],
    projectLive: '#',
    projectSource: '#',
    liveIcons: 'GitHub_icon.png',
  },
  {
    closeImage: 'Images/close_menu_black.png',
  },
  {
    name: 'Multi-Post Stories',
    projectImage: 'Images/Image_2.png',
  },
  {
    name: 'Facebook 360',
    projectImage: 'Images/Image_3.png',
  },
  {
    name: 'Uber Navigation',
    projectImage: 'Images/Image_4.png',
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
myCloseImg.src = `${projectDatiels[1].closeImage}`;
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
myProjectDes.innerText = `${projectDatiels[0].projectText}`;
projectPop.appendChild(myProjectDes);

const ul1 = document.createElement('ul');
ul1.classList = 'myCode_lan';
projectPop.appendChild(ul1);

const listLang1 = document.createElement('li');
listLang1.classList = 'lang_list';
listLang1.innerText = `${projectDatiels[0].projectLanguages[0]}`;
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
a.innerText = 'See Live';
a.href = `${projectDatiels[0].projectLive}`;
myButtons.appendChild(a);

const a1 = document.createElement('a');
a1.classList = 'pop_button';
a1.innerText = 'See Source';
a1.href = `${projectDatiels[0].projectLive}`;
myButtons.appendChild(a1);

const myPopProjects = document.querySelectorAll('.bttn');
const myPopBox = document.getElementById('myPopFull');
const popMenuClose = document.getElementById('close_menu1');

function popBox() {
  if (myPopBox.style.display === 'none') {
    myPopBox.style.display = 'block';
    myImage.src = `${projectDatiels[0].projectImage}`;
    textInner.innerText = `${projectDatiels[0].name}`;
    window.scroll(0, 1);
  } else {
    myPopBox.style.display = 'none';
  }
}

myPopProjects[0].addEventListener('click', popBox);

function popBox1() {
  if (myPopBox.style.display === 'none') {
    myPopBox.style.display = 'block';
    myImage.src = `${projectDatiels[2].projectImage}`;
    textInner.innerText = `${projectDatiels[2].name}`;
    window.scroll(0, 1);
  } else {
    myPopBox.style.display = 'none';
  }
}

myPopProjects[1].addEventListener('click', popBox1);

function popBox2() {
  if (myPopBox.style.display === 'none') {
    myPopBox.style.display = 'block';
    myImage.src = `${projectDatiels[3].projectImage}`;
    textInner.innerText = `${projectDatiels[3].name}`;
    window.scroll(0, 1);
  } else {
    myPopBox.style.display = 'none';
  }
}

myPopProjects[2].addEventListener('click', popBox2);

function popBox3() {
  if (myPopBox.style.display === 'none') {
    myPopBox.style.display = 'block';
    myImage.src = `${projectDatiels[4].projectImage}`;
    textInner.innerText = `${projectDatiels[4].name}`;
    window.scroll(0, 1);
  } else {
    myPopBox.style.display = 'none';
  }
}

myPopProjects[3].addEventListener('click', popBox3);

function menuClose1() {
  if (myPopBox.style.display === 'block') {
    myPopBox.style.display = 'none';
  }
}
popMenuClose.addEventListener('click', menuClose1);