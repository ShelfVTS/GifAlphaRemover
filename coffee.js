var gif = document.getElementById('gif');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// copy GIF onto canvas
ctx.drawImage(gif, 0, 0, canvas.width, canvas.height);

// Loop through every pixel in the canvas
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
for (var i = 0; i < imageData.data.length; i += 4) {
  var r = imageData.data[i];
  var g = imageData.data[i + 1];
  var b = imageData.data[i + 2];

  // Check if pixel == white
  if (r == 255 && g == 255 && b == 255) {
    // Set the alpha value to 0 (transparent)
    imageData.data[i + 3] = 0;
  }
}

// Put modified image data back onto canvas
ctx.putImageData(imageData, 0, 0);

// makesx new img
var newGif = new Image();
newGif.src = canvas.toDataURL();

// new img ----> img element
gif.src = newGif.src;
