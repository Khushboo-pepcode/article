$(document).ready(function(){

	// $(".show").click(function(){
	// 	$(".vic").animate({
	// 		left:'200px',
	// 		width:'100px',
	// 		height:'100px',
	// 		font-size:'50px'
	// 	});
	// });

	$(".show").click(function(){
    $(".vic").animate({
      left: '250px',
      opacity: '1',
      height: '150px',
      // font-size:'50px',
      width: '150px'
    });
  });

	 //  $(".show").click(function(){
  //   $(".fab").animate({
  //     font-size:'50px'
  //   });
  // });

	$(".hide").click(function(){
    $(".vic").animate({
      left: '0',
      opacity: '1',
      height: '20px',
      // font-size:'50px',
      width: '50px'
    });
  });

	  // image animation

	  $(".show-1").click(function(){
	  	$(".animated").animate({
	  		width:'80%',
	  		height:'80%',
	  		top:'30%',
	  		left:'30%',
	  		transform: 'scale(-50%, -50%)',
	  		transform: 'scale(2,.5)'
	  	});
	  });

	  $(".hide-1").click(function(){
	    $(".animated").animate({
	      width:'20%',
	  	  height:'30%',
	  	  top:'0%',
	  	  left:'0%',
	    });
	  });
});