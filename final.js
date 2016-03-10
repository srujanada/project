$(document).ready(function() {
	console.log("ready");
	
	$("#assign1show").hide();
	$("#assign2show").hide();
	$("#assign3show").hide();
	$("#assign4show").hide();
	$("#office1show").hide();
	$("#office2show").hide();
	$("#office3show").hide();
	$("#office4show").hide();
	$("#timing1show").hide();
	$("#timing2show").hide();
	$("#timing3show").hide();
	$("#timing4show").hide();
	$("#grades1show").hide();
	$("#grades2show").hide();
	$("#grades3show").hide();
	$("#grades4show").hide();
	
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
	$( "#assign1" ).hover(function() {
		$("#assign1show").slideDown( "slow", "swing");
		}, function() {
		$("#assign1show").slideUp( "slow", "swing");
	});
	$( "#assign2" ).hover(function() {
		$("#assign2show").slideDown( "slow", "swing");
		}, function() {
		$("#assign2show").slideUp( "slow", "swing");
	});
	$( "#assign3" ).hover(function() {
		$("#assign3show").slideDown( "slow", "swing");
		}, function() {
		$("#assign3show").slideUp( "slow", "swing");
	});
	$( "#assign4" ).hover(function() {
		$("#assign4show").slideDown( "slow", "swing");
		}, function() {
		$("#assign4show").slideUp( "slow", "swing");
	});
	//OFFICE code
	$( "#office1" ).hover(function() {
		$("#office1show").slideDown( "slow", "swing");
		}, function() {
		$("#office1show").slideUp( "slow", "swing");
	});
	$( "#office2" ).hover(function() {
		$("#office2show").slideDown( "slow", "swing");
		}, function() {
		$("#office2show").slideUp( "slow", "swing");
	});
	$( "#office3" ).hover(function() {
		$("#office3show").slideDown( "slow", "swing");
		}, function() {
		$("#office3show").slideUp( "slow", "swing");
	});
	$( "#office4" ).hover(function() {
		$("#office4show").slideDown( "slow", "swing");
		}, function() {
		$("#office4show").slideUp( "slow", "swing");
	});
	//TIMING code
	$( "#timing1" ).hover(function() {
		$("#timing1show").slideDown( "slow", "swing");
		}, function() {
		$("#timing1show").slideUp( "slow", "swing");
	});
	$( "#timing2" ).hover(function() {
		$("#timing2show").slideDown( "slow", "swing");
		}, function() {
		$("#timing2show").slideUp( "slow", "swing");
	});
	$( "#timing3" ).hover(function() {
		$("#timing3show").slideDown( "slow", "swing");
		}, function() {
		$("#timing3show").slideUp( "slow", "swing");
	});
	$( "#timing4" ).hover(function() {
		$("#timing4show").slideDown( "slow", "swing");
		}, function() {
		$("#timing4show").slideUp( "slow", "swing");
	});
	//GRADES code
	$( "#grades1" ).hover(function() {
		$("#grades1show").slideDown( "slow", "swing");
		}, function() {
		$("#grades1show").slideUp( "slow", "swing");
	});
	$( "#grades2" ).hover(function() {
		$("#grades2show").slideDown( "slow", "swing");
		}, function() {
		$("#grades2show").slideUp( "slow", "swing");
	});
	$( "#grades3" ).hover(function() {
		$("#grades3show").slideDown( "slow", "swing");
		}, function() {
		$("#grades3show").slideUp( "slow", "swing");
	});
	$( "#grades4" ).hover(function() {
		$("#grades4show").slideDown( "slow", "swing");
		}, function() {
		$("#grades4show").slideUp( "slow", "swing");
	});
	
});		//close jQuery function