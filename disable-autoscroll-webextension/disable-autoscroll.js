const MIDDLE_MOUSE_BUTTON_ID = 1;

document.addEventListener('mousedown', function disableAutoscroll(mouseEvent) {
  // Let other mouse button events propagate:
  if (mouseEvent.button != MIDDLE_MOUSE_BUTTON_ID)
    return; 
  // Otherwise cancel middle mouse button event:
  mouseEvent.preventDefault();
  mouseEvent.stopPropagation();
});