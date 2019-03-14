function makeGrid() {
  var canvas = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  canvas.innerHTML = ''; // remove children
  for (tr = 0; tr < height; tr++) { // loop over rows/height
    var row = document.createElement("tr"); // create row
    canvas.appendChild(row); // insert row (attribution - https://knowledge.udacity.com/questions/29796)
    for (td = 0; td < width; td++) { // loop over cells/width
      var cell = document.createElement("td"); // create cell
      row.appendChild(cell); // insert cell (attribution - https://knowledge.udacity.com/questions/29796)
      cell.addEventListener('click', function(event) { // get color on click
        event.target.style.backgroundColor = document.getElementById('colorPicker').value; // get color
      });
    }
  }
}

document.querySelector('form').addEventListener('submit', function(event) { // create canvas on submit
  event.preventDefault(); // prevent default action
  makeGrid(); // fire function
});
