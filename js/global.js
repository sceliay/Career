// JavaScript Document

$(function() {
	var x=0;
  $("#logon-buttom").click(function(){
	  $("#load").slideToggle();
	  if(x%2==0)
	  {
		  $("#logon-buttom").addClass("logon-buttom-after");
		   $("#logon-buttom").removeClass("logon-buttom-before");
		  x++;
	  }
	  else
	  {
		  $("#logon-buttom").removeClass("logon-buttom-after");
		  $("#logon-buttom").addClass("logon-buttom-before");
		  x--;
	  }
  });
});