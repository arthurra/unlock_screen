function clock(){var e=new Date,t=e.getHours();if(t>12){newHour=t-12;t=newHour}var n=e.getMinutes();if(n<10){newMin="0"+n;n=newMin}var r=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),i=r[e.getDay()],s=new Array("January","February","March","April","May","June","July","August","September","Octoaber","November","December"),o=s[e.getMonth()],u=e.getDate();document.getElementById("timeHours").innerHTML=t;document.getElementById("timeMinutes").innerHTML=n;document.getElementById("weekday").innerHTML=i;document.getElementById("date").innerHTML=o+" "+u;setTimeout("clock()",1e3)}clock();