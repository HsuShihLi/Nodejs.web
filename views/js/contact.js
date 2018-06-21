
function checkph(str){
	if(str.length < 10)
		{alert("at least enter 10 number");}
}

function checkEmail(remail) {
if (remail.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)!=-1) {
   alert("Email info correct");
} else {
  alert("wrong enter, please enter again");
  document.myForm.email.focus();
	}
}

