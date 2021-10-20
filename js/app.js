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
	// This was just a log to see if our section was made properly
	// console.log(section)

	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++){
		
			//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article')
			//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
			//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.textContent = lands[i]
			//   2d. appends each land to the middle-earth section
		landArticle.appendChild(landName)
		section.appendChild(landArticle)
		
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
	const theShire = document.getElementById('The-Shire')
	
	// we can also use querySelector
	// const theShire = document.querySelector('#The-Shire')
	
	// give each hobbit a class of `hobbit`
	
	// hint: create a 'ul' outside the loop into which to append the 'li's
	const ulHobbits = document.createElement('ul')

	// hint: get 'The-Shire' by using its id
	for (let i = 0; i < hobbits.length; i++){
		//create an li for each hobbit
		const liHobbit = document.createElement('li')
		//display each hobbits name
		liHobbit.textContent = hobbits[i]
		//give each hobbit a class of hobbit
		liHobbit.className = 'hobbit'
		//append each hobbit li to the end of the child element
		ulHobbits.appendChild(liHobbit)
	}
	theShire.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div')
	oneRingDiv.id = 'the-ring'

	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'

	// add the ring as a child of `Frodo`
	//find the ul where frodo lives
	const ulHobbits = document.querySelector('ul')
	// figure out which li frodo is
	const liFrodo = ulHobbits.children[0]
	// attach ring
	liFrodo.appendChild(oneRingDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById('Mordor')
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'baddies'
	for (let i = 0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li')
		// give each of the baddies a class of "baddy"
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddies.appendChild(liBaddy)		
	}
	// remember to append them to Mordor
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
	const rivendell = document.getElementById('Rivendell')
	const asideTag = document.createElement('aside')
		// put an `unordered list` of the `'buddies'` in the aside
		const ulBuddies = document.createElement('ul')
		ulBuddies.id = 'buddies'
		for (let i = 0; i < buddies.length; i++) {
			const liBuddy = document.createElement('li')
			liBuddy.className = 'buddy'
			liBuddy.textContent = buddies[i]
			ulBuddies.appendChild(liBuddy)	
			liBuddy.id = buddies[i]	
		}
		asideTag.appendChild(ulBuddies)
		rivendell.appendChild(asideTag)
	}

	// insert your aside as a child element of `rivendell`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	let hobSquad = document.querySelectorAll('.hobbit')
	let rivendell = document.getElementById('Rivendell')
	for(hobbit of hobSquad){
		rivendell.appendChild(hobbit)
	}
	// assemble the `hobbits` and move them to `rivendell`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	let theBoys = document.querySelectorAll('.buddy')
	for (buddy of theBoys){
	  if (buddy.innerHTML === "Strider"){
		buddy.innerHTML = "Aragorn"
	  }
	}
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	let fellowship = document.createElement('div')
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	fellowship.id = 'the-fellowship'
	let rivendell = document.querySelector('#Rivendell')
	let hobSquad = document.querySelectorAll('.hobbit')
	let theBoys = document.querySelectorAll('.buddy')
	for (hobbit of hobSquad){
	  let name = hobbit.textContent
	  fellowship.appendChild(hobbit)
	  console.log(`${name} has joined the party.`)
	}
	for (boy of theBoys){
	  let name = buddy.textContent
	  fellowship.appendChild(buddy)
	  console.log(`${name} has joined the party.`)
	}
	rivendell.appendChild(fellowship)
  }
	// after each character is added make an alert that they // have joined your party


	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	let theBoys = document.querySelectorAll('.buddy')
	for (boys of theBoys){
	  if (boys.textContent == "Gandalf the Grey"){
		boys.innerHTML = "Gandalf the White"
		boys.style.backgroundColor = 'white'
		boys.style.border = 'solid grey'
	  }
	// apply the following style to the element, make the // background 'white', add a grey border
}
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown.')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	let boromir = document.querySelector('#Boromir')
	boromir.remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	let frodo = document.querySelector('#Fr')
	let sam = document.querySelector('#Sa')
	mountDoom.appendChild(frodo)
	mountDoom.appendChild(sam)
	let mordor = document.querySelector('#Mordor')
	mordor.appendChild(mountDoom)
	console.log(mordor)
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	let gollum = document.createElement('div')
	gollum.id = 'gollum'
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	let ring = document.querySelector('#the-ring')

	// Move Gollum into Mount Doom
	gollum.appendChild(ring)
	let mountDoom = document.querySelector('#mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	let gollum = document.querySelector('#gollum')
  	gollum.remove()
	// Move all the `hobbits` back to `the shire`
	let hobSquad = document.querySelectorAll('.hobbit')
	let shire = document.querySelector('#The-Shire')
	for (hobbit of hobbits){
	  shire.appendChild(hobbit)
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
