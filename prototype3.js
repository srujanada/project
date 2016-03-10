$(document).ready(function() {
	console.log("ready");
	
	$("#assign1show").hide();
	
	$(function() {
		$( "#todo" ).draggable({ handle: "h2"});
    	$( "#postits" ).draggable();
    	
    	$( "#syllabus" ).draggable({ handle: "h2" });
		$( "#classes" ).accordion();
		$( "#items li" ).sortable();
		$( "#items li" ).disableSelection();
		
	});

	
	
	//TODO CODE
	var counter = 1;
	function appendThing() {
    	$("<li id='#items" + counter + "' class='ui-state-default'>Text" + counter + "</li>").appendTo($("#items"));
	    $("#items").sortable({ refresh: mySortable })
	    counter++;   
	};
	
	//POSITS code
	$(function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).click(function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  	});
	
	
	//ASSIGNMENTS code
	$( "#assign1" ).click(function() {
		$("#assign1show").slideToggle( "slow", "swing");
	});
	$( "#assign2" ).click(function() {
		$("#assign2show").slideToggle( "slow", "swing");
	});
	$( "#assign3" ).click(function() {
		$("#assign3show").slideToggle( "slow", "swing");
	});
	$( "#assign4" ).click(function() {
		$("#assign4show").slideToggle( "slow", "swing");
	});
	//OFFICE code
	$( "#office1" ).click(function() {
		$("#office1show").slideToggle( "slow", "swing");
	});
	$( "#office2" ).click(function() {
		$("#office2show").slideToggle( "slow", "swing");
	});
	$( "#office3" ).click(function() {
		$("#office3show").slideToggle( "slow", "swing");
	});
	$( "#office4" ).click(function() {
		$("#office4show").slideToggle( "slow", "swing");
	});
	//TIMING code
	$( "#timing1" ).click(function() {
		$("#timing1show").slideToggle( "slow", "swing");
	});
	$( "#timing2" ).click(function() {
		$("#timing2show").slideToggle( "slow", "swing");
	});
	$( "#timing3" ).click(function() {
		$("#timing3show").slideToggle( "slow", "swing");
	});
	$( "#timing4" ).click(function() {
		$("#timing4show").slideToggle( "slow", "swing");
	});
	//GRADES code
	$( "#grades1" ).click(function() {
		$("#grades1show").slideToggle( "slow", "swing");
	});
	$( "#grades2" ).click(function() {
		$("#grades2show").slideToggle( "slow", "swing");
	});
	$( "#grades3" ).click(function() {
		$("#grades3show").slideToggle( "slow", "swing");
	});
	$( "#grades4" ).click(function() {
		$("#grades4show").slideToggle( "slow", "swing");
	});
	
});		//close jQuery function