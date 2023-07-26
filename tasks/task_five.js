/* An HTML table is built with the following tag structure:

<table>
<tr>
<th>name</th>
<th>height</th>
<th>place</th>
</tr>
<tr>
<td>Kilimanjaro</td>
<td>5895</td>
<td>Tanzania</td>
</tr>
</table>

For each row, the <table> tag contains a <tr> tag. Inside these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>). Given a data set of mountains, an array of objects with name, height, and place properties, generates the DOM structure for a table that enumerates the objects. It should have one column per key, one row per object, plus a header row with <th> elements at the top, listing the column names.
Write this so that columns are automatically derived from the objects, by taking the property names of the first object in data.
Add the resulting table to the element with an id attribute of “mountains” so that it becomes visible in the document. Once you have this working, right-align cells that contain number values by setting their style.textAlign property to “right” */

// SOLUTION

// create an array of objects for each mountain
const mountains = [
  {
    name: 'Kilimanjaro',
    height: 5895,
    place: 'Tanzania'
  },
  {
    name: 'Everest',
    height: 10,
    place: 'Awka'
  },
  {
    name: 'Futa Jalon',
    height: 5,
    place: 'Nnewi'
  }
]

//  create the table
const table = document.createElement('table')
table.innerHTML = '<tr><th>Name</th><th>Height</th><th>Place</th></tr>'

//  iterate over the array of mountain objects
for (const mountain of mountains) {
  // create a row and new cells to take in the values of the mountain objects
  const newRow = document.createElement('tr')
  const mountName = document.createElement('td')
  const mountHeight = document.createElement('td')
  const mountPlace = document.createElement('td')
  // fill in the cells and align number cells to the right
  mountName.innerText = mountain.name
  mountHeight.innerText = mountain.height
  mountHeight.style.textAlign = 'right'
  mountPlace.innerText = mountain.place
  // append the cells to the row created
  newRow.appendChild(mountName)
  newRow.appendChild(mountHeight)
  newRow.appendChild(mountPlace)
  // append the row to the table created
  table.appendChild(newRow)
}

//  get the element with id=mountains (in task_five.html) and assign it to a variable; then append the table to it
const target = document.getElementById('mountains')
target.appendChild(table)
