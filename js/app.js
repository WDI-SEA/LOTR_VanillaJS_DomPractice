console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']


// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = 'middle-earth'
	// 2. use a for loop to iterate over the lands array that does the following:
	for (i = 0; i < lands.length; i++){
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const article = document.createElement('article')
		//   2b. gives each land article an `id` tag of the corresponding land name
		article.id = lands[i]
		//   2c. includes an h1 with the name of the land inside each land article
		const h1 = document.createElement('h1')
		//   2c. includes an h1 with the name of the land inside each land article
		h1.innerText = lands[i]
		article.appendChild(h1)
		//   2d. appends each land to the middle-earth section
		section.appendChild(article)
	}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(section)	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// display an `unordered list` of hobbits in the shire
	const hobbitList = document.createElement('ul')
	hobbitList.id = 'hobbit-list'
	for (i = 0; i < hobbits.length; i++) {
		const li = document.createElement('li')
		li.innerText = hobbits[i]
		// give each hobbit a class of `hobbit`
		li.className = 'hobbit'
		hobbitList.appendChild(li)
	}
	document.getElementById('The-Shire').appendChild(hobbitList)
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	document.getElementById('hobbit-list').firstChild.appendChild(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const badGuys = document.createElement('ul')
	baddies.id = "baddies"
	for (i = 0; i < baddies.length; i++){
		const li = document.createElement('li')
		li.innerText = baddies[i]
		// give each of the baddies a class of "baddy"
		li.className = 'baddy'
		badGuys.appendChild(li)
	}
	// remember to append them to Mordor
	document.getElementById('Mordor').appendChild(badGuys)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const goodGuys = document.createElement('ul')
	goodGuys.id = 'buddies'
	for (i = 0; i < buddies.length; i++){
		const li = document.createElement('li')
		li.innerText = buddies[i]
		li.className = 'buddy'
		goodGuys.appendChild(li)
	}
	aside.appendChild(goodGuys)
	// insert your aside as a child element of `rivendell`
	document.getElementById('Rivendell').appendChild(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// assemble the `hobbits` and move them to `rivendell`
	const shireParty = document.getElementById('hobbit-list')
	document.getElementById('Rivendell').appendChild(shireParty)	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {	
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	const aragorn = document.getElementsByClassName('buddy')[3]
	aragorn.innerHTML = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============


function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const hobbitList = document.querySelectorAll('li.hobbit')
	const friendList = document.querySelectorAll('li.buddy')
	// create a new div called `'the-fellowship'` within `rivendell`
	const fellowshipDiv = document.createElement('div')
	const ul = document.createElement('ul')
	ul.id = 'the-fellowship'
	document.getElementById('Rivendell').appendChild(fellowshipDiv)
	fellowshipDiv.appendChild(ul)
	const theFellowship = fellowshipDiv.firstElementChild
	// // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	for (i = 0; i < friendList.length; i++){
		theFellowship.appendChild(friendList[i])
		// after each character is added make an alert that they // have joined your party
		alert(friendList[i].innerText + ' has joined the party!')
	}
	for (i = 0; i < hobbitList.length; i++){
		theFellowship.appendChild(hobbitList[i])
		// after each character is added make an alert that they // have joined your party
		alert(hobbitList[i].innerText + ' has joined the party!')
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementsByClassName('buddy')[0]
	gandalf.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style = 'background: white; border: 1px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	const boromir = document.getElementsByClassName('buddy')[4]
	document.getElementById('the-fellowship').removeChild(boromir)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const frodo = document.getElementsByClassName('hobbit')[0]
	const sam = document.getElementsByClassName('hobbit')[1]
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(frodo)
	mordor.appendChild(sam)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const doomDiv = document.createElement('div')
	doomDiv.id = 'mount-doom'
	mordor.appendChild(doomDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollumDiv = document.createElement('div')
	gollumDiv.id = 'gollum'
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	gollumDiv.appendChild(document.getElementById('the-ring'))
	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(gollumDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
