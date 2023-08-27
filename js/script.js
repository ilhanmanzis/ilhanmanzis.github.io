//ilhan

const ilhan= document.querySelector('#hamburger');
const navmenu= document.querySelector('#nav-menu');
ilhan.addEventListener('click', function(){
    ilhan.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
});

//navabar fixed

window.onscroll=function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const totop = document.querySelector('#to-top');

    if (window.pageYOffset>fixednav){
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    }
    else{
        header.classList.remove('navbar-fixed');
        totop.classList.add('hidden');
        totop.classList.remove('flex');
    }
};

//klik diluar hamburger

window.addEventListener('click', function(e){
    if(e.target != ilhan && e.target != navmenu){
        ilhan.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');



darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark'
    }
    else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
  } else {
    darkToggle.checked = false
  }


//lihat selengkapnya project

const seeMoreButton = document.getElementById('see-more-button');
const content = document.getElementById('content');

seeMoreButton.addEventListener('click', () => {
    content.classList.toggle('expanded');
    if (content.classList.contains('expanded')) {
        seeMoreButton.textContent = 'Lihat Lebih Sedikit ▲';
    } else {
        seeMoreButton.textContent = 'Lihat Selengkapnya ▼';
    }
});



const seeMoreButton2 = document.getElementById('see-more-button2');
const content1 = document.getElementById('max-project');

seeMoreButton2.addEventListener('click', () => {
    content1.classList.toggle('expanded1');
    if (content1.classList.contains('expanded1')) {
        seeMoreButton2.textContent = 'Lihat Lebih Sedikit ▲';
    } else {
        seeMoreButton2.textContent = 'Lihat Selengkapnya ▼';
    }
});

