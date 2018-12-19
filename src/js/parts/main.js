(function($) {

	if(document.body.clientWidth > '980') {
		$('.cards__image').on('mouseenter', function () {

				var $this = $(this),
					$img = $this.children('img');

				$this.css({'background-image': 'url(' + $img.data('srcgif') + ')'});

				$this.toggleClass('play');

			}
		).on('mouseleave', function () {

				var $this = $(this);

				$this.css({'background-image': ''});

				$this.toggleClass('play');

			}
		);
	}

	$('.cards__item').click(function()
	{
		var name = $(this).find('.cards__name').text(),
			image = $(this).find('.cards__image img').data('srcgif');

		$('.modal__title').text(name);

		$('.modal__top img').attr('src', image);
	}
	);

	if(document.body.clientWidth > '600')
	{
		$('.cards__item').fancybox(
			{
				src: '#modal',
				type: 'inline',
				smallBtn: false,
				buttons: false,
			}
		);
	}
	else
	{
		$('.cards__item').click(function(e)
		{
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 500);
			$('.content').hide();
			$('.mobile').slideDown();
		}
		);
	}

	$('.preview__back').click(function (e)
	{
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 500);
		$('.mobile').hide();
		$('.content').slideDown();
	}
	);

	$('.js-how-to').click(function()
	{
		$('.modal__annotation').slideToggle();
	}
	);

})(jQuery);