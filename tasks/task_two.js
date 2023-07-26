/* Write a JavaScript function to get the values of First and Last names of the following form.
Sample HTML file :

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html> */

function getFormvalue () {
  const firstName = document.querySelector('[name="fname"]').value
  const lastName = document.querySelector('[name="lname"]').value
  const fullName = `${firstName} ${lastName}`
  return fullName
}

// I ignored lint for not reusing function
