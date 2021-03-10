const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

const leaveSite = document.querySelectorAll('.leave');
const leaveMessage = document.querySelector('.leaveMessage');

const cancel = document.querySelectorAll('.bluelink');

const goButton = document.querySelectorAll('.go-button');

const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');
for (let i = 0; i < cancel.length; i++){
    (cancel[i]).addEventListener('click', cancelWindow);
}

for (let i = 0; i < leaveSite.length; i++){
    (leaveSite[i]).addEventListener('click', leaveAlert);
}

for (let i = 0; i < goButton.length; i++){
    
    (goButton[i]).addEventListener('mouseenter', function(){
        this.firstChild.innerHTML += " &#9654;";
    });
    (goButton[i]).addEventListener('mouseleave', function(){
        this.firstChild.innerHTML = this.firstChild.innerHTML.slice(0,this.firstChild.innerHTML.length-2);
    });
}

function leaveAlert(){
    leaveMessage.classList.add('show');
}

function cancelWindow(){
    leaveMessage.classList.remove('show');
}

let showMenu = false;

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}
var tl = gsap.timeline();
tl.from(".logo-large",{duration: 2, opacity:0, ease:"inOut"}, 0);
tl.from(".lg-heading",{duration: 1.5, x:-500, opacity:0, ease:"inOut"}, 0);
tl.from(".sm-heading",{duration: 1.5, x:-500, opacity:0, ease:"inOut"}, 0);
tl.from(".home-facebook",{duration: 0.5, delay: 1, opacity:0}, "-=0.5");
tl.from(".home-instagram",{duration: 0.5, opacity:0});
tl.from(".home-linkedin",{duration: 0.5, opacity:0});
tl.from(".home-github",{duration: 0.5, opacity:0});

