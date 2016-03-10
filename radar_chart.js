	/*
		htmlのcanvasのid属性を指定し、
		そのタグのある場所にグラフの表示を行う関数
	*/
	//車速のグラフの表示
	function exec_radar_chart(barChartData, options, data_type){
		//getElementByIdの中身は、表示するcanvasタグのID要素
		var ctx = document.getElementById("canvas_"+data_type).getContext("2d");
		window.myLine = new Chart(ctx).Bar(barChartData, options);
	}