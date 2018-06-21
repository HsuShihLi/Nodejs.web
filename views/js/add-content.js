var today = new Date();
var hourNow = today.getHours();
var greetings;

if(hourNow>18){
	greetings = 'Good evenings!';
} else if (hourNow>12){
	greetings = 'Good afternoon!';
} else if (hourNow>0){
	greetings = 'Good morning!';
} else {
	greetings = 'welcome!';
}

document.write('<h3>'+greetings+'</h3>');