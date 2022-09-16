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

	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	for (let i = 0; i < lands.length; i++) {
		const land = document.createElement('article')	
	//   2b. gives each land article an `id` tag of the corresponding land name
	land.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
	land.innerHTML = `<h1>${lands[i]}</h1>`
	//   2d. appends each land to the middle-earth section
	middleEarth.appendChild(land)
	}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	const ulHob = document.createElement('ul')
	const theShire = document.getElementById('The-Shire')
	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	for (let i = 0; i < hobbits.length; i++) {
		const li = document.createElement('li')
		li.innerHTML = hobbits[i]
		li.setAttribute('class', 'hobbit')
		ulHob.appendChild(li)
	}
	theShire.appendChild(ulHob)
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
	var frodo = document.querySelector('ul').firstChild;
    var ring = document.createElement('div');
    ring.setAttribute('id','the-ring');
    frodo.appendChild(ring);

  },
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
	
	const ulBaddies = document.createElement('ul')
	const mordor = document.getElementById('Mordor')
	// display an unordered list of baddies in Mordor

	for (let i = 0; i < baddies.length; i++) {
		const li = document.createElement('li')
		li.innerHTML = baddies[i]
		li.setAttribute('class', 'baddy')
		ulBaddies.appendChild(li)
	}
	mordor.appendChild(ulBaddies)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
	var aside = document.createElement('aside');
    var ul = document.createElement('ul');
    var place = document.querySelector('#middle-earth');
    var rivendell = document.querySelector('#middle-earth').lastChild.previousSibling;
    aside.appendChild(list);
   	place.insertBefore(aside, rivendell);
    for(var i=0; i<fellowship.buddies.length; i++){
      var item = document.createElement('li');
      item.textContent = fellowship.buddies[i];
      ul.appendChild(item);
    }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"
const rivendell = document.getElementById('Rivendell')
const ulHobbits = document.querySelector('#The-Shire > ul')
rivendell.appendChild(ulHobbits)

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	const buddies = document.querySelectorAll('.buddy')
	buddies[3].innerHTML = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
console.log('8: forgeTheFellowShip')
	const div = document.createElement('div')
	div.setAttribute('id', 'the-fellowship')
	const rivendell = document.getElementById ('Rivendell')
	rivendell.appendChild(div)
	const hobbits = document.querySelectorAll('.hobbit')
	const buddies = document.querySelectorAll('.buddy')
	buddies.forEach(buddy => { 
		div.appendChild(buddy)
		console.log(`${buddy.innerText} has joined The Fellowship`)
	})
	hobbits.forEach(hobbit => { 
		div.appendChild(hobbit)
		console.log(`${hobbit.innerText} has joined The Fellowship`)
	})
// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	console.log('8: forgeTheFellowShip')
	const div = document.createElement('div')
	div.setAttribute('id', 'the-fellowship')
	const rivendell = document.getElementById ('Rivendell')
	rivendell.appendChild(div)
	const hobbits = document.querySelectorAll('.hobbit')
	const buddies = document.querySelectorAll('.buddy')
	buddies.forEach(buddy => { 
		div.appendChild(buddy)
		console.log(`${buddy} has joined The Fellowship`)
	})
	hobbits.forEach(hobbit => { 
		div.appendChild(hobbit)
		console.log(`${hobbit} has joined The Fellowship`)
	})

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
	// apply the following style to the element, make the // background 'white', add a grey border
	console.log('9: theBalrog')
	const gandalf = document.querySelector('.buddy')
	gandalf.innerHTML = 'Gandalf the White'
	gandalf.style.background = 'white'
	gandalf.style.border = '3px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	console.log('10: hornOfGondor')
	alert('The horn of gondor has been blown! Boromir has been killed by the Uruk-hai!')
	const boromir = document.querySelectorAll('.buddy')[4]
	const theFellowship = document.getElementById('the-fellowship')
	theFellowship.removeChild(boromir)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	console.log('11: itsDangerousToGoAlone')
	const frodo = document.querySelectorAll('.hobbit')[0]
	const sam = document.querySelectorAll('.hobbit')[1]
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(frodo)
	mordor.appendChild(sam)
	const div = document.createElement('div')
	div.setAttribute('id', 'mount-doom')
	mordor.appendChild(div)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	function weWantsIt() {
		console.log('12: weWantsIt')
		const div = document.createElement('div')
		div.setAttribute('id', 'gollum')
		const mordor = document.getElementById('Mordor')
		mordor.appendChild(div)
		const theRing = document.getElementById('the-ring')
		div.appendChild(theRing)
		const mountDoom = document.getElementById('mount-doom')
		mountDoom.appendChild(div)
		// Create a div with an id of `'gollum'` and add it to M
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
	const gollum = document.getElementById(`gollum`)
	const theRing = document.getElementById(`'the-ring'`)
	gollum.remove()
	theRing.remove()
	// Move all the `hobbits` back to `the shire`
	const hobbits = document.querySelectorAll('.hobbit')
	const shire = document.getElementById(`The-Shire`)
	for (value of hobbits) {
		shire.appendChild(value)
	}
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
