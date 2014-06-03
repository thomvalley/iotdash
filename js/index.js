  google.load("visualization", "1", {packages:["corechart"]});
  google.load("visualization", "1", {packages: ["calendar"]});
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(drawRoomChart);
  google.setOnLoadCallback(drawLunchChart);
  google.setOnLoadCallback(drawSnackChart);
  google.setOnLoadCallback(drawGauges);

  // Draw gauges for top bar
  //Currently a separate call for each gauge until I figure out
  //how to set options for each display in a gauge set
  function drawGauges() {
      var dataSensors = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Sensors', 135]
      ]);

      var dataMessages = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Messages', 3700]
      ]);

      var dataOccupancy = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Occupancy', 84]
      ]);

      var optionsSensors = {
          width: 130, height: 120,
          max: 1000,  min: 0,
          redFrom: 950, redTo: 1000,
          yellowFrom:900, yellowTo: 950,
          minorTicks: 5
      };
      var optionsMessages = {
          width: 130, height: 120,
          max: 5000, min: 0,
          redFrom: 4500, redTo: 5000,
          yellowFrom:4000, yellowTo: 4500,
          minorTicks: 3
      };
      var optionsOccupancy = {
          width: 130, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
      };

      var chart1 = new google.visualization.Gauge(document.getElementById('sensors'));
      chart1.draw(dataSensors, optionsSensors);
      var chart2 = new google.visualization.Gauge(document.getElementById('messages'));
      chart2.draw(dataMessages, optionsMessages);
      var chart3 = new google.visualization.Gauge(document.getElementById('occupancy'));
      chart3.draw(dataOccupancy, optionsOccupancy);
  }
  
  function drawRoomChart() {
    var roomdata = google.visualization.arrayToDataTable([
      ['Day', 'BirdCage', 'Boardroom', 'Cassandra', 'Flight Deck', 'Grizzly', 'Vortex', 'Yeager'],
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


    var roomchart = new google.visualization.ColumnChart(document.getElementById('room_chart'));
    roomchart.draw(roomdata, options);

    google.visualization.events.addListener(roomchart, 'select', function() {
        //alert();
        //drawCalendarChart();
        $('#modal_content').empty();
        drawPieChart();
        $('#chart_title').text("Detailed Room Utilization - " + roomdata.getColumnLabel(roomchart.getSelection()[0].column));
        $('#chart_modal').modal({
            keyboard: false
        });
    })

  }
 
  //Draw Snack consumption chart
  function drawSnackChart_old() {
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
  
  //Draw lunch room utilization chart
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
      title: 'Lunch Room Attendance / Lunch Orders (w/ forecast)',
      hAxis: {title: 'Current Week - Forecast',  titleTextStyle: {color: '#333'}},
	  vAxis: {title: "People/Orders", minValue: 0, titleTextStyle: {color: '#333'}},
	  series:{0:{type: "line"}, 1:{type: "line"}, 2:{type: "bars"}, 3:{type: "bars"}, 4:{type: "bars"}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('lunch_chart'));
    chart.draw(data, options);
  }

  function drawSnackChart() {
      var data = google.visualization.arrayToDataTable([
          ['ID', 'Taken', 'Restocked', 'Region',     'Inventory'],
          ['',    80.66,              1.67,      'Peanuts',  50],
          ['',    79.84,              1.36,      'Almonds',         75],
          ['',    78.6,               1.84,      'Granola Bars',         74],
          ['',    72.73,              2.78,      'Oreos',    66],
          ['',    80.05,              2,         'Choc. Chip',         43],
          ['',    72.49,              1.7,       'Apples',    80],
          ['',    68.09,              4.77,      'Bananas',    35],
          ['',    81.55,              2.96,      'Jerky',    21],
          ['',    68.6,               1.54,      'Cheese Crackers',         24],
          ['',    78.09,              2.05,      'M & Ms',  67]
      ]);

      var options = {
          title: 'Snack Utilization & Restock / Current Inventory (unit weight)',
          hAxis: {title: 'Taken'},
          vAxis: {title: 'Restocked'},
          bubble: {textStyle: {fontSize: 11}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('snack_chart'));
      chart.draw(data, options);
  }

  function drawPieChart() {
      var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
      ]);

      var options = {
          title: 'My Daily Activities',
          is3D: true,
          width: 800,
          height: 450
      };

      var chart = new google.visualization.PieChart(document.getElementById('modal_content'));
      chart.draw(data, options);
  }


