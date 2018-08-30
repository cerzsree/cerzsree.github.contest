/// <reference path="c:/users/osama/typings/globals/jquery/index.d.ts" />


//card container
var $con = $("#con");

var $thecard = $(".the-card");
var $cont = $("#contwo");
var $ull = $(".ull");
var $lil = $(".lil");
var $par = $(".parallax");
var $dis = $(".dis");
var $para = $(".slow-para");

$lil.css('opacity','0');

//way point for the first three cards
$con.waypoint(function(direction){
    if(direction == 'down'){
        $thecard.removeClass('cardrot');
    }else{
        $thecard.addClass('cardrot');
    }
},{offset:'50%'})


//way point for the Need Help
$cont.waypoint(function(direction){
    if(direction == 'down'){
        $dis.addClass("animated bounceIn");
    }else{
        $dis.removeClass("animated bounceIn");
                }
},{offset:'80%'})

//way point for the Eethar
$par.waypoint(function(direction){
    if(direction == 'down'){
        $ull.addClass("animated rotateInDownLeft slower");
        $lil.css('opacity','1');
    }else{
        $ull.removeClass("animated rotateInDownLeft slower");
        $lil.css('opacity','0');
    }
},{offset: '55%'})
        
