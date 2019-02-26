window.onresize = checkHeight;

window.onload = checkHeight;

function checkHeight()
{
  $(".navlinks").hover( function()
  { 
    $(this).css(
      {'border-bottom-color': getRandomColor(), 
      'border-width': "3px"});
  },
  function()
  {
    $(this).css('border-bottom-color', 'none');
  });	

  var heightOtherNews = 0;
  var footerTop = 0;

  if($(window).width() > 810)
  {
    if(document.title == "HeaderLine")
    {    
      footerTop = document.getElementById("main").clientHeight + 170;
    }
    else if(document.title == "Entertainment")
    {
      footerTop = document.getElementById("main").clientHeight + 170;
    }
    else
    {
        heightOtherNews = 
        Math.max(document.getElementById("videos").clientHeight, 
        document.getElementById("headlineNews").clientHeight, 
        document.getElementById("otherNews").clientHeight,
        document.getElementById("main").clientHeight);

        footerTop = heightOtherNews + 170;
    }
  }
  else
  {
    if(document.title == "HeaderLine")
    {  
      footerTop = document.getElementById("main").clientHeight + 170;
    }
    else if(document.title == "Entertainment")
    {
      footerTop = document.getElementById("main").clientHeight + 170;
    }
    else
    {
      heightOtherNews = document.getElementById("videos").clientHeight + 
                document.getElementById("headlineNews").clientHeight +
                document.getElementById("otherNews").clientHeight;
    
      footerTop = heightOtherNews + 220;
    }
  }


  document.getElementById("footer").style.top = footerTop + ("px");
  
  function getRandomColor()
  {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

