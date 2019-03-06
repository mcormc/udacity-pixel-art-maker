// Select color input
var colorPicker = getElementByID('colorPicker');
// Select size input
var sizePicker = getElementByID('sizePicker');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var canvas = document.getElementByID('pixel_canvas');
  var height = document.getElementByID('inputHeight').value;
  var width = document.getElementByID('inputWidth').value;
  canvas.innerHTML = '';
  for (var x = 0; x < height; x++) {
    var row = document.createElement('tr');
    canvas.appendChild(row);
    for (var y = 0; y < width; y++) {
      var column = document.createElement('td');
      canvas.appendChild(column);
      // Add color to selected cell
      column.addEventListener('click', function(event) {
        var color = colorPicker.value;
        event.target.style.backgroundColor = color;
      }
    }
  }
});
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
