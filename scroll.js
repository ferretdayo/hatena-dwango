$(function(){
	$(document).ready(function(){
		function getParam() {
			var url   = location.href;
			parameters = url.split("?");
			params = parameters[1].split("=");
			return params[1];
		}
		$('#target').attr('src',getParam());
		var i=0;
		var comment_array=[];
		$.ajax({
			type    : 'GET',
			url     : 'http://b.hatena.ne.jp/entry/json/?url='+$('#target').attr("src"),
			dataType: 'jsonp',
			success : function(json)
			{
				console.table(json);
				//console.log(json.bookmarks);
				json.bookmarks.forEach(function(v){
					// console.log(v.comment);
					// console.log(i);
					if(v.comment.length!=0){
					// $("#scroll" + i%10).text(v.comment);
						comment_array.push({'comment' : v.comment, 'user' : v.user});
					}
				});
				console.log(comment_array);
				//return comment_array;
				
				var obj = {
					"base" : {
						color:"white", //文字の色を指定します
						speed:"slow", //文字が流れるスピードを指定します。slow/fast/normal 
						interval:"normal",//文字が流れる間隔を指定します。slow/fast/normal
						font_size:"30px", //フォントのサイズを指定します。
						loop:false //文字が最後まで流れた後に、繰り返すかどうか　true/false
					},
					//ここに、重ねるコメントを登録します。個数制限はありません。
					"comments":comment_array,
				};
				nicoscreen.set(obj);
				nicoscreen.start();
			}
		});
	});
});
