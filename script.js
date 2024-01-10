let bars = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    bars.classList.remove('fa-times');
    navbar.classList.remove('active')
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}