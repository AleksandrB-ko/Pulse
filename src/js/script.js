// let answer = confirm('вам есть 18?');
// console.log(answer);

// let answer = prompt('вам есть 18?');
// console.log(answer);

// let isChecked = true,
// isClose = false;
// console.log(isCheched && isClose);

// console.log(isCheched || isClose);

// if (2*3 == 8*1) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 
// const num = 50;
// if (num < 49) {
//    console.log('Неправильно' ); 
// } else if (num > 100) {
// 	console.log('много');
// } else {
// 	console.log('верно' );
// }

// for (let i = 1; i<8; i++) {
// 	console.log(i);
// }

// function logging (a,b) {
// 	console.log(a+b);
// }

// logging(3,5);
$(document).ready(function(){
	$('.carousel__inner').slick({
  		speed: 1200,
  		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
				dots: true,
				arrows: false,
				
				}
			}
		]
	  });
  });