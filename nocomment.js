$(function(){
	var css = 'width: 100%;text-align: center;background: #ccc;height: 100px;padding-top: 40px;';
	$('#comments_wrap').hide();

	var racism_abolished  = '<div id="tali-noracism"><h3>Comments removed by <strong>No Comment.</strong> Because Racism.That\'s Why<br /><a href="#" class="tali-toggle-racism">Show Racism</a></h3><pre>"We must learn to live together as brothers or perish together as fools." - Martin Luther King Jr</pre></div>';
	var i_want_my_racism_back  = '<div id="tali-yesracism" style="display: none"><h3>You wanted your precious racism back. There it is. Hope you are proud of yourself<br /><a href="#" class="tali-toggle-racism">Abolish Racism</a></h3><br /><pre>"Racism isn\'t born, folks, it\'s taught. I have a two-year-old son. You know what he hates? Naps! End of list." - Denis Leary</pre></div>';

	$('#comments_wrap').before('<div class="tali-nocomment" style="' + css + '">' + racism_abolished + i_want_my_racism_back +  '</div>');

	$('.tali-toggle-racism').click(function(){
		$('#tali-noracism, #tali-yesracism').toggle();
		$('#comments_wrap').slideToggle('fast');
		return false;
	});
});
