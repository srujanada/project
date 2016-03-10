$(document).ready(function() {
	console.log("ready");
	
	$("#assign1show").hide();
	
	$(function() {
		$( "#todo" ).draggable();
    	$( "#calendar" ).draggable();
    	$( "#syllabus" ).draggable();
		$( "#classes" ).accordion();
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