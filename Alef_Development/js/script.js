//Menu burger=======================================================================
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');
headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})
//Select checkbox=======================================================================
let checkbox = document.querySelector('.footer__checkbox-label');
checkbox.addEventListener('click', () => {
	checkbox.classList.toggle('footer__checkbox-label-not-active');
})



//Sort of price=======================================================================
let catsItems = document.querySelectorAll('.cats__item'); //массив
let dataPrice = document.querySelectorAll('div[data-price]'); //массив
let catsPriseSort = document.querySelector('.cats__price');
let catsPriseButton = document.querySelector('#price-img');

let arrPrice1sort = [];
let arrPrice2 = [];


for (let price of dataPrice) {
	arrPrice1sort.push(price.textContent);
	arrPrice2.push(price.textContent);
}
let sortArrPrice = arrPrice1sort.sort();


catsPriseSort.addEventListener('click', () => {
	for (let i = 0; i < catsItems.length; i++) {
		for (let j = 0; j < catsItems.length; j++) {
			if (sortArrPrice[i] == arrPrice2[j]) {
				catsItems[j].classList.toggle(`item-${i + 1}`);
			}
		}
	}
	catsPriseButton.classList.toggle('active-img');
})
//Sort of age=======================================================================
let dataAge = document.querySelectorAll('span[data-age]'); //массив
let catsAgeSort = document.querySelector('.cats__age');
let catsAgeButton = document.querySelector('#age-img');

let arrAge1sort = [];
let arrAge2 = [];


for (let age of dataAge) {
	arrAge1sort.push(age.textContent);
	arrAge2.push(age.textContent);
}
let sortArrAge = arrAge1sort.sort();

catsAgeSort.addEventListener('click', () => {

	for (let i = 0; i < catsItems.length; i++) {
		for (let j = 0; j < catsItems.length; j++) {
			if (sortArrAge[i] == arrAge2[j]) {
				catsItems[j].classList.toggle(`item-${i + 1}`);
			}
		}
	}
	catsAgeButton.classList.toggle('active-img');
})

//Scroll-button=====================================================================
let scrollButton = document.querySelector('.scroll');

window.onscroll = function () {
	if (window.pageYOffset > 200) {
		scrollButton.classList.add('shown');
	} else {
		scrollButton.classList.remove('shown');
	}
};

scrollButton.addEventListener('click', () => {
	window.scrollTo(0, 0);
})


//Email===============================================================================
let subscribe = document.querySelector('.footer__submit')
let email = document.querySelector('.footer__email');
let errorSpan = document.querySelector('.span');

let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


email.addEventListener('input', () => {
	if (!reg.test(email.value)) {
		errorSpan.classList.add('error');
		subscribe.disabled = true;
	} else {
		errorSpan.classList.remove('error');
	}
	if (email.value == 0) {
		errorSpan.classList.remove('error');
	}
})

//Likes===============================================================================
let catsLikes = document.querySelectorAll('.cats__likes');
let catsAlert = document.querySelector('.alert');

for (let like of catsLikes) {
	like.addEventListener('click', () => {
		like.classList.toggle('cats__likes-active');
		catsAlert.classList.remove('alert-active');
		if (!like.classList.contains('cats__likes-active')) {
			catsAlert.classList.add('alert-active');
			catsAlert.style.background = 'red';
			catsAlert.textContent = 'Вы убрали котика из избранного';
			catsAlert.style.top = event.pageX;
			setTimeout(() => catsAlert.classList.remove('alert-active'), 1500)

		} else {
			catsAlert.classList.add('alert-active');
			catsAlert.style.background = 'green';
			catsAlert.textContent = 'Вы добавили котика в избранное';
			setTimeout(() => catsAlert.classList.remove('alert-active'), 1500)
		}
	})
}