var i = 0; // Start point
var images = [];
var time = 6000;

// Image List
  images[0] = 'Image16.jpg';
  images[1] = 'https://i.imgur.com/uwXNMZb.jpg';
  images[2] = 'https://i.imgur.com/fOWDP00.jpg';

  // Change Image
  function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);

  }

  window.onload = changeImg;