document.addEventListener('mousedown', function(mouseEvent) {
  if (mouseEvent.button != 1)
    return;
  mouseEvent.preventDefault();
  mouseEvent.stopPropagation();
});