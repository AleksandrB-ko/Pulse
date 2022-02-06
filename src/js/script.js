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
				dotsClass: "my-dots",
				arrows: false,
				
				}
			}
		]
	});
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	// $('.catalog-item__link').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// })

	// $('.catalog-item__back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });

	function toggleSlide(classes) {
		$(classes).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');


});