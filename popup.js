$(function() {
	$('#popup_bg, .popup_content').hide()

	$('.popup_envoke').click(function() {
		$('#popup_bg, .popup_content').show()

		vid_num = $(this).attr('data-envoke')
		$('.popup_content iframe').attr({
			'src': $(this).attr('data-envoke'),
			'width': $('.popup_content').width(),
			'height': $('.popup_content').height()
		})
	})

	$('#popup_bg').click(function(){
		$('#popup_bg, .popup_content').hide()
	})

})