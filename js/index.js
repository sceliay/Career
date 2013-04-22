//JavaScript Document
$(function() {
	var x=0;
  $("#job").click(function(){
	$("#findPerson").hide();
	$("#findHelp").hide();   
    $("#findJob").show();    
	$("#job").removeClass("li-before");
	$("#job").addClass("li-after");
	$("#person").removeClass("li-after");
	$("#person").addClass("li-before");
	$("#help").removeClass("li-after");
	$("#help").addClass("li-before");
  })
  
  $("#person").click(function(){
 	$("#findJob").hide();
	$("#findHelp").hide();
    $("#findPerson").show();
	$("#person").removeClass("li-before");
	$("#person").addClass("li-after");
	$("#job").removeClass("li-after");
	$("#job").addClass("li-before");
	$("#help").removeClass("li-after");
	$("#help").addClass("li-before");
  })
  
  $("#help").click(function(){
	$("#findJob").hide();
	$("#findPerson").hide();
    $("#findHelp").show();    
	$("#help").removeClass("li-before");
	$("#help").addClass("li-after");
	$("#person").removeClass("li-after");
	$("#person").addClass("li-before");
	$("#job").removeClass("li-after");
	$("#job").addClass("li-before");
  })
  
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