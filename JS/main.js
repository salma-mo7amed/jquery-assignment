// start of home section

$(".navbtn").click(function(){
    $(".navmenu").css("left" ,"0");
});

$(".closeicon").click(function(){
    $(".navmenu").css("left" ,"-250px");
});

$(".navmenu ul a").click(function(){
    const hrefofclickedelement=$(this).attr("href");
    const sectionOffSet=$(hrefofclickedelement).offset().top;
    $("html,body").animate({scrollTop:sectionOffSet},1500);
});
// end of home section
// start of slider

$("#Slider h3").click(function(){
    $(this).next().slideToggle();
    $("#Slider .inner").not($(this).next()).slideUp();
});

// end of slider
// start of details

window.onload=function() {
   
    countDownToTime("4 february 2024 7:00:00");
  };

  function countDownToTime(mytime) {
  
    let futureDate = new Date(mytime);
    futureDate = (futureDate.getTime()/1000);

    let nowTime = new Date();
    nowTime = (nowTime.getTime()/1000);

    timeBetween = (futureDate- nowTime);
        
   let days = Math.floor( timeBetween / (24*60*60));
   let hours = Math.floor((timeBetween - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeBetween - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeBetween - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(mytime); }, 500);
  };
//   end of details

// start of count

$("textarea").keyup(function(){
    let inputLength= $(this).val().length;
    console.log(inputLength);
    $("#characterNumber").text(100-inputLength + " Character Remaining")
     if(100-inputLength<= 0){
        $("#characterNumber").text("your available characters are finished")
     }

    
    
})


// end of count

