function clock() {
  var now = new Date();

  // HOUR
  var hourStr = now.getHours();
  if (hourStr >12){newHour = hourStr-12;hourStr = newHour;}

  // MINUTES
  var minStr = now.getMinutes();
  if (minStr <10){newMin = "0"+minStr; minStr = newMin;}

  // DAY OF THE WEEK
  var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var dayStr = dayNames[now.getDay()];

  // DAY OF THE MONTH
  var monthNames = new Array("January","February","March","April","May","June","July","August","September","Octoaber","November","December");
  var monthStr = monthNames[now.getMonth()];
  var dateStr = now.getDate();
  
  document.getElementById('timeHours').innerHTML=hourStr;
  document.getElementById('timeMinutes').innerHTML=minStr;
  document.getElementById('weekday').innerHTML=dayStr;
  document.getElementById('date').innerHTML=monthStr+" "+dateStr;
  setTimeout('clock()',1000);
}
clock();