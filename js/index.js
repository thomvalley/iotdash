  google.load("visualization", "1", {packages:["corechart"]});
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(drawRoomChart);
  google.setOnLoadCallback(drawSnackChart);
  google.setOnLoadCallback(drawLunchChart);
  google.setOnLoadCallback(drawGauges);
  
  function drawRoomChart() {
    var data = google.visualization.arrayToDataTable([
      ['Day', 'Bird Cage', 'Boardroom', 'Cassandra', 'Flight Deck', 'Grizzly', 'Vortex', 'Yeager'],
	  ['M',	55,	25,	15,	15,	5,	12,	22],
	  ['T',	85,	60,	25,	22,	36,	34,	39],
	  ['W',	90,	60,	25,	32,	44,	59,	56],
	  ['T',	90,	65,	20,	18,	18,	11,	17],
	  ['F',	35,	50,	25,	27,	12,	8,	5]
	  
    ]);

    var options = {
      title: 'Conferene Room Utilization',
      hAxis: {title: '2014/05/26-2014/05/30', titleTextStyle: {color: 'black'}}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('room_chart'));
    chart.draw(data, options);
  }
 
 
  //Draw Snack consumption chart
  function drawSnackChart() {
    var data = google.visualization.arrayToDataTable([
      ['Snack', 'Withdrawals', 'Additions', 'Inventory'],
	  ['Apples',	55,	25,	15],
	  ['Granola Bars',	85,	60,	25],
	  ['Almonds',	90,	60,	25],
	  ['Peanuts',	90,	65,	20],
	  ['Peanuts',	90,	65,	20],
	  ['Jerky',	90,	65,	20],
	  ['Cookies',	90,	65,	20],
	  ['Oreos',	35,	50,	25]
	  
    ]);

    var options = {
      title: 'Snack Utilization',
      hAxis: {title: '2014/05/26-2014/05/30', titleTextStyle: {color: 'black'}}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('snack_chart'));
    chart.draw(data, options);
  }
  
  //Draw Snack lunch room utilization chart
  function drawLunchChart() {
    var data = google.visualization.arrayToDataTable([
      ['Day', 'Average Attendance', 'Peak', 'Ordered', 'Waste', 'Projected Order'],
      ['M',  24, 30, 50, 12, 0],
      ['T',  28, 34, 50, 8, 0],
      ['W',  30, 38, 50, 2, 0],
      ['T',  22, 26, 50, 6, 0],
	  ['F',  18, 20, 50, 14, 0],
      ['M',  24, 30, 0, 0, 40],
      ['T',  28, 34, 0, 0, 42],
      ['W',  30, 38, 0, 0, 48],
      ['T',  22, 26, 0, 0, 43],
	  ['F',  18, 20, 0, 0, 38]
    ]);

    var options = {
      title: 'Lunch Room Attendance',
      hAxis: {title: 'Current Week - Forecast',  titleTextStyle: {color: '#333'}},
	  seriesType: "bars",
	  series:{0:{type: "line"}},
	  series:{1:{type: "line"}},
	  series:{2:{type: "bars"}},
	  series:{3:{type: "bars"}},
      vAxes: {
	  	vAxis: {title: "People", minValue: 0, titleTextStyle: {color: '#333'}},
	  	vAxis: {title: "Servings", minValue: 0, titleTextStyle: {color: '#333'}}
		},
      series: {4: {type: "bars"}}

    };

    var chart = new google.visualization.ComboChart(document.getElementById('lunch_chart'));
    chart.draw(data, options);
  }
  
  function drawGauges() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Sensors', 84],
      ['Messages', 185],
      ['Occupancy', 68]
    ]);

    var options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauges'));
    chart.draw(data, options);
  }


