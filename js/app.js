console.log('Linked.')
// DECLARING GLOBAL VARIABLES BECAUSE I DON'T WANT TO SELECT WITHIN EACH FUNCTION!!!





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
	section.id = "middle-earth"
	console.log(section)

	// 2. use a for loop to iterate over the lands array that does the following:
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	//   2b. gives each land article an `id` tag of the corresponding land name
	//   2c. includes an h1 with the name of the land inside each land article
	//	 2d. appends each land to the middle-earth section
	lands.forEach((land) => {
		const landArticle = document.createElement('article')
		landArticle.id = land
		const landName = document.createElement('h1')
		landName.textContent = land
		landArticle.appendChild(landName)
		section.appendChild(landArticle)
	})

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
	// NOTE: We can also use query Selector
	const theShire = document.getElementById('The-Shire')
	// console.log(theShire)
	// give each hobbit a class of `hobbit`
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbit'
	// console.log(ulHobbits)
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
	hobbits.forEach((hobbit) =>{
		const liHobbit = document.createElement('li')
		liHobbit.textContent = hobbit
		liHobbit.className = 'hobbits'
		ulHobbits.append(liHobbit)
	} )

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
		// find the ul where frodo lives
		//figure out which li frodo is
		// attach the ring
	const ulHobbits = document.querySelector('ul')
	const liFrodo = ulHobbits.children[0] // remember this method also remember includes, for in, and find()
	liFrodo.appendChild(oneRingDiv)
	}

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	// display an unordered list of baddies in Mordor
	// give each of the baddies a class of "baddy"
	const mordor = document.getElementById('Mordor')
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'baddies'

	baddies.forEach((baddy) => {
		const liBaddy = document.createElement('li')
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddy
		ulBaddies.appendChild(liBaddy)
	})

	mordor.appendChild(ulBaddies)
}

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	// create an `aside` tag
	const aside = document.createElement('aside')
	const ulBuddies = document.createElement('ul')
	// const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']
	ulBuddies.id = "rivendell-buddies"
	buddies.forEach((buddy) => {
		const liBuddy = document.createElement('li')
		liBuddy.className = 'buddy'
		liBuddy.textContent = buddy
		ulBuddies.appendChild(liBuddy)
	})

	// put an `unordered list` of the `'buddies'` in the aside
	aside.appendChild(ulBuddies)

	// insert your aside as a child element of `rivendell`
	const rivendell = document.querySelector('#Rivendell')
	rivendell.appendChild(aside)

}

// ============
// Chapter 6
// ============


function leaveTheShire() {
	console.log('6: leaveTheShire')
	// NOTES: I tried moving each hobbit individually but they stayed in the Shire
	// 1. Move the hobbit list  itself.
	hobbitsLeaving = document.getElementById('hobbit')
	const rivendell = document.getElementById('Rivendell')
	const aside = document.querySelector('aside')
	aside.appendChild(hobbitsLeaving)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	let changeName = document.querySelectorAll('.buddy')
	changeName.forEach((str) => {
		if (str.innerText == "strider") {
			str.innerText = "aragorn"
		}
		console.log(str)
	})
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const rivendell = document.querySelector("#Rivendell")
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowShip = document.createElement('div')
	theFellowShip.id = "the-fellowship"
	rivendell.appendChild(theFellowShip)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'` https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/
	liHobbit = document.querySelectorAll("#hobbit li")
	liBuddies = document.querySelectorAll("#rivendell-buddies .buddy")
	hobbitArray = Object.values(liHobbit)
	buddiesArray = Object.values(liBuddies)
	newFellowshipList = hobbitArray.concat(buddiesArray)

	newFellowshipList.forEach((fellow) => {
		theFellowShip.appendChild(fellow)
		alert(`${fellow.innerText} has joined your party!`)
	})
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	gandalfChange = document.querySelector("#the-fellowship li.buddy")
	gandalfChange.innerText = "Gandalf the White"
	gandalfChange.style.backgroundColor = "white"
	gandalfChange.style.border = "thick solid gray"
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	setTimeout(()=>{
		alert("The Horn of Gondor has been blown!")
		var hornOfGondor = new Audio('media/(horn-of-gondor-blows)-v3x.mp3');
		hornOfGondor.play();
	}, 300)
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	
	// Remove `Boromir` from the Fellowship
	removeBoromir = document.querySelectorAll("#the-fellowship li.buddy")[4]
	removeBoromir.style.color = "red"
	removeBoromir.style.backgroundColor = "#af111c"
	setTimeout(()=>{
		removeBoromir.style.color = "red"
		removeBoromir.style.backgroundColor = "#af111c"
	}, 3000)

	setTimeout(()=>{

		removeBoromir.remove()
	}, 4000)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	mordorLand = document.querySelector("#Mordor")
	frodoSelect = document.querySelectorAll("#the-fellowship li.hobbits")[0]
	samSelect = document.querySelectorAll("#the-fellowship li.hobbits")[1]
	mordorLand.appendChild(frodoSelect)
	mordorLand.appendChild(samSelect)
	mountDoom = document.createElement('div')
	mountDoom.id = "mount-doom"
	mordorLand.append(mountDoom)
	
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
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
	setTimeout(()=>{
		const gollumPlace = document.createElement('div')
		gollumPlace.id = "gollum"
		poorGollum = document.querySelector("#gollum")
		mordorLand.appendChild(gollumPlace)
		// Remove `the ring` from `Frodo` and give it to `Gollum`
		const theOneRing = document.querySelector('#the-ring')
		poorGollum.appendChild(theOneRing)
		// Move Gollum into Mount Doom
		mountDoom.appendChild(poorGollum)
	}, 3000)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	const gollumPlace = document.createElement('div')
	const theOneRing = document.querySelector('#the-ring')
	console.log('13: thereAndBackAgain')
	gollumPlace.remove()
	theOneRing.remove()
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
	const theShire = document.getElementById('The-Shire')
	const hobbitList = document.querySelector("ul#hobbit")

	theShire.appendChild(hobbitList)

	hobbitsReturn = document.querySelectorAll("li.hobbits")

	hobbitsReturn.forEach((hobbit) => {
		hobbitList.appendChild(hobbit)
	})


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
