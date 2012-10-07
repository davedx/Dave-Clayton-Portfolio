$(function() {
	/**
	 * Hi there! Thanks for checking out my JavaScript!
	 * I hope you like it :-)
	 */

	/*
	 * Popup with extra content
	 */
	var show = function(elem, content) {
		var y = elem.position().top;
		$('.more-popup').show().html(content).css(
			{ 'left': '330px',
				'top': (y-20)+'px' });
		return false;
	}

	/**
	 * Handlers to close popup
	 */
	$('body').click(function() { $('.more-popup').fadeOut('fast'); });
	$('.more-popup').click(function() { $(this).fadeOut('fast'); });

	/**
	 * On-click handlers to show popup with different content
	 */
	$('.other-web-tech').click(function() {
		return show($(this), 'Rails, Node.js, ASP.NET, Unity, Android');
	});

	$('.webservices').click(function() {
		return show($(this), 'REST, SOAP');
	});

	$('.experienced').click(function() {
		return show($(this), "I've worked on and shipped many software products, including Windows software, web applications, next-gen console and smartphone games and enterprise CDN's. I'm experienced with full software lifecycles from analysis through to deployment/devops, worked with the waterfall, SCRUM and furiously-code-in-your-bedroom methodologies, and have lived in the clouds where the angels sing (EC2, Heroku).");
	});

	$('.icon-picture').click(function() {
		return show($(this), '<img src="img/me.jpg"><small>Relaxing in the Mauritius</small>');
	});

	$('.source-code-examples').click(function() {
		return show($(this), "My biggest open source <a href='https://github.com/libgdx/libgdx/blob/master/gdx/CONTRIBUTORS'>contributions</a> are to the libgdx cross-platform game library.<br>I'm also on Github as <a href='http://github.com/davedx'>davedx</a>.<br>If you'd like more examples of my code, just drop me an email.");
	});
});

