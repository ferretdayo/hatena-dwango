$(function(){
	$(document).ready(function(){
		function getParam() {
			var url   = location.href;
			parameters = url.split("?");
			params = parameters[1].split("=");
			return params[1];
		}
		var i=0;
		var comment_array=[];
		$.ajax({
			type    : 'GET',
			url     : 'http://b.hatena.ne.jp/entry/json/?url='+getParam(),
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
				
				//--------------------グラフの表示--------------------------
				var barChartData = {
					labels: ["aaa","bbb","ccc","ddd","eee","fff"],
					datasets: [
						{
							label: "My First dataset",
							fillColor: "rgba(129,159,247,0.2)",
							strokeColor: "rgba(129,159,247,1)",
							pointColor: "rgba(129,159,247,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(129,159,247,1)",
							data: [1,2,4,5,6,4]
						}
					]
				};
				var options = {
					scaleOverride : true,
					scaleSteps : 10,
					scaleStepWidth : 50,
					scaleStartVaule : 0,
					pointLabelFontSize : 16,
				};
				//ラインチャートの表示
				exec_radar_chart(barChartData, options, "Bar");
			}
		});
	});
});
