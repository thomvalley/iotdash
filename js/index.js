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
      title: 'Conference Room Utilization',
      hAxis: {title: '2014/05/26 - 2014/05/30', titleTextStyle: {color: 'black'}}
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
      ['Day', 'Average Attendance', 'Peak Attendance', 'Portions Ordered', 'Portions Wasted', 'Projected Order'],
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
      title: 'Lunch Room Attendance / Lunch Orders',
      hAxis: {title: 'Current Week - Forecast',  titleTextStyle: {color: '#333'}},
	  vAxis: {title: "People/Orders", minValue: 0, titleTextStyle: {color: '#333'}},
	  series:{0:{type: "line"}, 1:{type: "line"}, 2:{type: "bars"}, 3:{type: "bars"}, 4:{type: "bars"}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('lunch_chart'));
    chart.draw(data, options);
  }
  
  function drawGauges() {
    var data1 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Sensors', 135]
    ]);
	
    var data2 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Messages', 3700]
    ]);
	
    var data3 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Occupancy', 84]
    ]);

    var options1 = {
      width: 130, height: 120,
	  max: 1000,  min: 0,
      redFrom: 950, redTo: 1000,
      yellowFrom:900, yellowTo: 950,
      minorTicks: 5
    };
	
    var options2 = {
      width: 130, height: 120,
	  max: 5000, min: 0,
      redFrom: 4500, redTo: 5000,
      yellowFrom:4000, yellowTo: 4500,
      minorTicks: 3
    };
    var options3 = {
      width: 130, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart1 = new google.visualization.Gauge(document.getElementById('gauge1'));
    chart1.draw(data1, options1);
    var chart2 = new google.visualization.Gauge(document.getElementById('gauge2'));
    chart2.draw(data2, options2);
    var chart3 = new google.visualization.Gauge(document.getElementById('gauge3'));
    chart3.draw(data3, options3);
  }


