function enterClicked () {
  let name = document.getElementById("full-name").value
  let ssn = parseInt(document.getElementById("social-security").value)
	let credit = parseInt(document.getElementById("credit-card").value)
	let number = parseInt(document.getElementById("street-number").value)
	let Stname = document.getElementById("street-name").value
	let numbers = parseInt(document.getElementById("three-numbers").value)
  // display everything :)
  document.getElementById('user-info').innerHTML = "Your full name is " + name + ", your social security number is " + ssn + ". You live at " + number + Stname + ", your credit card number is " + credit + " and those three little numbers on the back are " + numbers + ". Thank you so much for sharing! Wasn't that fun?"
}