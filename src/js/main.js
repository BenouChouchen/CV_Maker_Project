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

	//send mail with ajax
/*
	$('#send_email').click(function(e){
		e.preventDefault();
		//classe date
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
			objet: $('#firstname').val(),
			message: $('#message').val()
		};
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			//Callbacks (succès ou erreur)
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){ // On attend 3 secondes
					$('#js_alert_success').css({'display' : 'none'});
					//vider les champs
					$('#email').val("");
					$('#name').val("");
					$('#firstname').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#firstname').val("");
					$('#message').val("")
				}, 3000);
			}
		});
	});
*/
});