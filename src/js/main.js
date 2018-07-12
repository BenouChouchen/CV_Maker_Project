$(document).ready(function() {
	// open modal
	$('#open_modal').click(function() {
		$('#modal_to_open').css(
			{
				'display': 'block'
			}
		)
	});
	//close modal
	$('#close_modal').click(function() {
		$('#modal_to_open').css(
			{
				'display': 'none'
			}
		)
	})
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});
});
