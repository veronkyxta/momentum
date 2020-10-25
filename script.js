// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  data = document.getElementById('data'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
 
// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    weekName = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
    monthName = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    date = today.getDate(),
    day = today.getDay(),
    month = today.getMonth();
    

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 24hr Format
  hour = hour % 24 || 24;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;
  data.innerHTML = `${weekName[day]} <span> , </span> ${date} <span> </span> ${monthName[month]}`;

  setTimeout(showTime, 1000);
}


// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('/images/morning/05.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('/assets/images/day/13.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24) {
    // Evening
    document.body.style.backgroundImage =
      "url('/assets/images/evening/06.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  } else if (hour < 6) {
    // Night
    document.body.style.backgroundImage =
      "url('/assets/images/night/06.jpg')";
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}


//Set Name 
function setName(e) {
  if(e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('name', e.target.innerText);  
          name.blur();
      }
  } else {  
      localStorage.setItem('name', e.target.innerText);   
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('name') === '') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//Set Focus
function setFocus(e) {
  if(e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('focus', e.target.innerText);  
          focus.blur();
      }
  } else {  
      localStorage.setItem('focus', e.target.innerText);   
  }
}

//Clear Name
function clearName() {
let currentText = localStorage.getItem('name');
if (name.textContent) {
  name.textContent = '';
} 
}

//Return name
function returnName() {
let currentText = localStorage.getItem('name');
let currentName = name.textContent;
if ( localStorage.getItem('name') === null) {
  name.textContent = '[Enter name]';
}
else if(localStorage.getItem('name') !== ''){
  
  name.textContent = currentText;
}
else {
  name.textContent = '[Enter name]';
}
}

//Clear Focus
function clearFocus() {
  let currentText = localStorage.getItem('focus');
  if (focus.textContent) {
    focus.textContent = '';
  } 
}

//Return Focus
function returnFocus() {
  let currentText = localStorage.getItem('focus');
  let currentFocus = focus.textContent;
  if ( localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';
  }
  else if(localStorage.getItem('focus') !== ''){
    
    focus.textContent = currentText;
  }
  else {
    focus.textContent = '[Enter focus]';
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('click', clearName);
name.addEventListener('blur', returnName);
focus.addEventListener('click', clearFocus);
focus.addEventListener('blur', returnFocus);
focus.addEventListener('keypress', setFocus);


// Slider
const base = '/assets/images/night/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

// Run
showTime();
setBgGreet();
getName();
getFocus();