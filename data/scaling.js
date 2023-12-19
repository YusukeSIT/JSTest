var plane = document.getElementById('scaling');

document.addEventListener('DOMContentLoaded', function() {
  var scale = plane.getAttribute('scale');
  var pinchStartDistance = null;

  function handleTouchMove(e) {
    if (e.touches.length !== 2) {
      return;
    }

    var distance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );

    if (pinchStartDistance === null) {
      pinchStartDistance = distance;
      return;
    }
    
    scale *= distance / pinchStartDistance;
    pinchStartDistance = distance;
    plane.setAttribute('scale', scale);
  }

  function handleTouchEnd() {
    pinchStartDistance = null;
  }

  document.body.addEventListener('touchmove', handleTouchMove);
  document.body.addEventListener('touchend', handleTouchEnd);
  document.body.addEventListener('touchcancel', handleTouchEnd);
});