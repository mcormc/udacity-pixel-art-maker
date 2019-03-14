function makeGrid() {

  var canvas = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  canvas.innerHTML = ''; // remove children

  for (tr = 0; tr < height; tr++) {
    var row = canvas.insertRow(tr); // create TR element for each 'grid height' https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
    for (td = 0; td < width; td++) {
      var cell = row.insertCell(td); // create TD element for each 'grid width' https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
      cell.addEventListener('click', function(event) { // get color on click
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

document.querySelector('form').addEventListener('submit', function(event) { // create canvas on submit
  event.preventDefault();
  makeGrid();
});
