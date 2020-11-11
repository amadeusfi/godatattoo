require(["./lightgallery.js"], function () {
  require(["./lg-zoom.js", "./lg-thumbnail.js"], function () {
    $("#lightgallery").lightGallery();
  });
});
