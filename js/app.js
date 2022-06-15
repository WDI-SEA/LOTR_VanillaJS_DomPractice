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
	let section = document.createElement("section")
	section.setAttribute("id", "middle-earth")

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//console.log(lands[i])

	//   2a. creates an article tag (there should be one for each land when the loop is done)
	let landTag = document.createElement("article")
	//   2b. gives each land article an `id` tag of the corresponding land name
	landTag.setAttribute("id", lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
	const landHeader = document.createElement("h1")
	landHeader.innerHTML = lands[i]
	//   2d. appends each land to the middle-earth section
	landTag.appendChild(landHeader)
	section.appendChild(landTag)
	}
	// 3. append the section to the body of the DOM.
		document.querySelector("body").appendChild(section)
}	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const ul = document.createElement("ul")
	//const shire = document.setAttribute("id", lands[0])
	
	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("id", hobbits[i])
		li.setAttribute("class", "hobbits")
		ul.appendChild(li)
		li.innerText = hobbits[i]
		console.log(li)
	}

	document.getElementById(lands[0]).appendChild(ul)
	// give each hobbit a class of `hobbit`

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
	const theRing = document.createElement("div")
	theRing.setAttribute("id", "the-ring")

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute("class", "magic-imbued-jewelry")

	// add the ring as a child of `Frodo`
	const frodo = document.getElementById("Frodo Baggins")
	frodo.appendChild(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const ul = document.createElement("ul")
	for (let i = 0; i < baddies.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("id", baddies[i])
		li.setAttribute("class", "baddy")
		ul.appendChild(li)
		li.innerText = baddies[i]
		console.log(li)
	}
	document.getElementById(lands[2]).appendChild(ul)
	// give each of the baddies a class of "baddy"


	// remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	let aside = document.createElement("aside")
	aside.setAttribute("class", "buddies")

	// put an `unordered list` of the `'buddies'` in the aside
	const ul = document.createElement("ul")
	for (let i = 0; i < buddies.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("id", buddies[i])
		li.setAttribute("class", "buddy")
		ul.appendChild(li)
		li.innerText = buddies[i]
		console.log(li)
	}
	document.getElementById(lands[1]).appendChild(ul)

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	for(let i = 0; i < hobbits.length; i++) {
		document.getElementById(hobbits[i]).remove()}
	// assemble the `hobbits` and move them to `rivendell`
	const ul = document.createElement("ul")
	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("id", hobbits[i])
		li.setAttribute("class", "hobbits")
		ul.appendChild(li)
		li.innerText = hobbits[i]
		console.log(li)
	}

	document.getElementById(lands[1]).appendChild(ul)
	const theRing = document.createElement("div")
	theRing.setAttribute("id", "the-ring")
	theRing.setAttribute("class", "magic-imbued-jewelry")
	const frodo = document.getElementById("Frodo Baggins")
	frodo.appendChild(theRing)

	}// function Shire
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`

document.getElementById(buddies[3]).innerHTML= 'Aragon'

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div')
    theFellowship.id = 'The Fellowship'
    document.querySelector('#Rivendell').appendChild(theFellowship)
    
	const friends = document.createElement('ul')
	const lisHobbits = document.querySelectorAll('.hobbit')
	const lisBuddies = document.querySelectorAll('.buddies')

	const theFellowshipOfTheRing = document.getElementById('The Fellowship')
	theFellowship.appendChild(friends)

    
	for(let i = 0; i < lisHobbits.length; i++) {
		theFellowshipOfTheRing.appendChild(lisHobbits[i])
		// document.getElementById(hobbits[i]).remove()
        // const friends = document.createElement('li')
        // friends.classList.add('squad')
        // friends.setAttribute('id', hobbits[i])
		// friends.appendChild(hobbits[i])
        alert (`${hobbits[i]} have joined your party`)
    }
    for(let i = 0; i < lisBuddies.length; i++) {
		// document.getElementById(buddies[i]).remove()
        // const friends = document.createElement('li')
        // friends.classList.add('squad')
        // friends.setAttribute('id', buddies[i])
        // // friends.appendChild(buddies[i])
		theFellowshipOfTheRing.appendChild(lisBuddies[i])
        alert (`${buddies[i]} have joined party party`)
    }
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

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
	// change the `'Gandalf'` text to `'Gandalf the White'`
	document.getElementById(buddies[0]).innerHTML= 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	document.getElementById("stylesheet").style.background = "white"
	document.getElementById("stylesheet").style.border = "grey"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	window.alert("The Horn of Gondor has been blown!")
	// Boromir's been killed by the Uruk-hai!
	window.alert("Boromir has been killed!")
	// Remove `Boromir` from the Fellowship
	document.getElementById(buddies[4]).remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
function itsDangerousToGoAlone() {
    console.log('11: itsDangerousToGoAlone')
    // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
    //lands[2].appendChild(hobbits[0 ,1])
    for(let i = 0; i < 2 ; i++) {
        document.getElementById(hobbits[i]).remove()
        const ul = document.createElement("ul")
        let li = document.createElement("li")
        li.setAttribute("id", hobbits[i])
        li.setAttribute("class", "hobbits")
        ul.appendChild(li)
        li.innerText = hobbits[i]
        document.getElementById(lands[2]).appendChild(ul)
        console.log(li)
    }
    const theRing = document.createElement('div')
        theRing.setAttribute('id', 'the-ring')
        theRing.setAttribute("class", 'magic-imbued-jewelry')
        const frodo = document.getElementById("Frodo Baggins")
        frodo.appendChild(theRing)
        const mountDoom = document.createElement('div')
    mountDoom.setAttribute('id', 'mount-doom')
    document.getElementById(lands[2]).appendChild(mountDoom)
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
    const MORDOR = document.getElementById("Mordor")
    const gollum = document.createElement('div')
    gollum.setAttribute('id', 'gollum')
    MORDOR.appendChild(gollum)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
// ============
// Chapter 13
// ============
function thereAndBackAgain() {
    console.log('13: thereAndBackAgain')
    // // remove `Gollum` and `the Ring` from the document
    for(let i = 0; i < 2 ; i++) {
        document.getElementById(hobbits[i]).remove()
        const ul = document.createElement("ul")
        let li = document.createElement("li")
        li.setAttribute("id", hobbits[i])
        li.setAttribute("class", "hobbits")
        ul.appendChild(li)
        li.innerText = hobbits[i]
        document.getElementById(lands[0]).appendChild(ul)
        console.log(li)
    }
    for(let i = 0; i <2 ; i++) {
        document.getElementById(hobbits[i]).remove()
        const ul = document.createElement("ul")
        document.getElementById(lands[1]).appendChild(ul)
        let li = document.createElement("li")
        li.setAttribute("id", hobbits[i])
        li.setAttribute("class", "hobbits")
        ul.appendChild(li)
        li.innerText = hobbits[i]
        console.log(li)
        document.getElementById(lands[1]).appendChild(ul)
    }
    for(let i = 0; i < hobbits.length ; i++) {
        document.getElementById(hobbits[i]).remove()
        const ul = document.createElement("ul")
        document.getElementById(lands[1]).appendChild(ul)
        let li = document.createElement("li")
        li.setAttribute("id", hobbits[i])
        li.setAttribute("class", "hobbits")
        ul.appendChild(li)
        li.innerText = hobbits[i]
        console.log(li)
        document.getElementById(lands[0]).appendChild(ul)
    }
    document.getElementById('gollum').remove()
    const hobbitList = document.getElementById(hobbits[i])
    document.getElementById(lands[0]).append(hobbitList)
}