$(function(){
	$('#submit').click(function(){
		var target_url = $('#target_url').val();
		if(target_url != ""){
			location.href = "./main.html?url="+encodeURI(target_url);
		}
	});
	$('#submit_1').click(function(){
		var target_url = $('#target_url').val();
		if(target_url != ""){
			location.href = "./sub.html?url="+encodeURI(target_url);
		}
	});
});