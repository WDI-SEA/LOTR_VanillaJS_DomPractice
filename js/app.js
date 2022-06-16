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
         
		let section = document.createElement('section')
		 section.setAttribute('id', 'middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:
         	
			for (let i = 0; i < lands.length; i++) {
			 console.log(lands[i]);
	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
          	
			const articleTag = document.createElement('article')

	//   2b. gives each land article an `id` tag of the corresponding land name
          
			articleTag.setAttribute('id', lands[i])

	//   2c. includes an h1 with the name of the land inside each land article
				articleTag,innerHTML = '<h1>${lands[i]}</h1>'
			// const landHeader = document.createElement('h1')
			// landHeader.innerHTML = lands[i]
	
	//   2d. appends each land to the middle-earth section
			// articleTag.appendChild(landHeader)
			sectionTag.appendChild(articleTag)
			
	// 3. append the section to the body of the DOM.
}
		document.querySelector('body').appendChild(section)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let hobbitList = document.createElement('ul')
	hobbitList.setAttribute("class", "hobbitList")
	for (let i = 0; i < hobbits.length; i++) {
		//console.log(hobbits[i])
			const hobbitName = document.createElement('li')
			hobbitName.setAttribute('id',hobbits[i])
			//console.log(hobbitList[i])
	}
	document.getElementById(lands[0]).appendChild(ul)
		
	// give each hobbit a class of `hobbit`
	// hobbitName.setAttribute('class',hobbits[i])
	hobbitName.setAttribute('class',"hobbit")
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
	let theRing = document.createElement('div')	
	theRing.setAttribute('id','the-ring')
		
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class','magic-imbued-jewelry')
	
	// add the ring as a child of `Frodo`
	document.getElementById('Frodo Baggins').appendChild(theRing)

	
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor

	let baddiesList = document.createElement('ul')

	for (let i = 0; i < baddies.length; i++) {
			let baddyName = document.createElement('li');
			baddyName.setAttribute('class', 'baddy')
			baddyName.appendChild(baddyName)
			baddiesList.innerText = (baddies[i])
			//console.log(li)
	}
	document.getElementById("Mordor").appendChild(baddiesList)

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
		let theBuddies = document.createElement('aside')
		theBuddies.setAttribute('id','buddiesAside')
		let buddiesList = document.createElement('ul')
		for (i=0; i< buddies.length; i++) {
			console.log(buddies[i])
			let buddyName= document.createElement('li')
			buddyName.setAttribute('id', buddies[i])
			buddyList.setAttribute('class', "buddies")
			buddyName.innerText = (buddies[i])
			buddiesList.appendChild(buddyName)
			theBaddies.appendChild(buddiesList)
		}
	// put an `unordered list` of the `'buddies'` in the aside

	document.getElementById("Rivendell").appendChild(theBuddies)
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	document.querySelector("#Rivendell").appendChild(document.querySelector(".hobbitList"))
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.querySelector("#Strider").innerHTML ="Aragorn"
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
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	document.querySelector(".buddies").remove()
	document.querySelector(".hobbitList").remove()

	let the_fellowshipDiv = document.createElement('div')
	the_fellowshipDiv.setAttribute("id", "the-fellowship")
	let fellowship = document.createElement('ul')
	fellowship.setAttribute("id", "fellowship")
	the_fellowshipDiv.appendChild(fellowship)
	document.querySelector('#Rivendell').appendChild(the_fellowshipDiv)

	for(let i = 0; i < buddies.length; i++){

		const buddyName = document.createElement('li')
		buddyName.setAttribute('id', buddies[i])
		buddyName.setAttribute('class', "hobbit")
		buddyName.innerText = (buddies[i])

		fellowship.appendChild(buddyName)
	}
	document.querySelector("#Strider").innerHTML = "Aragorn"

	for(let i = 0; i < hobbits.length; i++){

		const hobbitName = document.createElement('li')
		hobbitName.setAttribute('id', hobbits[i])
		hobbitName.setAttribute('class', "hobbit")
		hobbitName.innerText = (hobbits[i])
		fellowship.appendChild(hobbitName)
	}
	let theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	document.getElementById('Frodo Baggins').appendChild(theRing)

	console.log("all fellows present")
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
	document.getElementById('Gandalf the Grey').innerText = "Gandalf the White"
	document.getElementById('Gandalf the Grey').style.cssText += 'background-color:white;border:2px solid grey;width:70px';
	// apply the following style to the element, make the // background 'white', add a grey border
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
	const hornAlert = window.alert("the horn of gondorn sounds") 
	document.getElementById("Boromir").remove()
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
	document.getElementById("Frodo Baggins").remove()
	document.getElementById('Samwise "Sam" Gamgee').remove()
	let threeIsCompany = document.createElement('ul')
	threeIsCompany.setAttribute("id", "threeIsCompany")
	document.querySelector("#Mordor").appendChild(threeIsCompany)

	let mount_doom = document.createElement('div')
	mount_doom.setAttribute("id", "mount-doom")
	document.querySelector("#Mordor").appendChild(mount_doom)

	const frodoB = document.createElement('li')
	frodoB.innerText = hobbits[0]
	frodoB.setAttribute("id", hobbits[0])
	let theRing = document.createElement('div')
	threeIsCompany.appendChild(frodoB)

	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	document.getElementById('Frodo Baggins').appendChild(theRing)

	const samG = document.createElement('li')
	samG.innerText = hobbits[1]
	samG.setAttribute("id", hobbits[1])
	threeIsCompany.appendChild(samG)

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

	let gollum = document.createElement('div')
	gollum.setAttribute("id", "gollum")
	document.querySelector("#Mordor").appendChild(gollum)

	document.getElementById("the-ring").remove()

	let theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	document.getElementById('gollum').appendChild(theRing)
	document.querySelector("#mount-doom").appendChild(gollum)

	// document.querySelector("#mount-doom").appendChild(gollum)
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
	document.getElementById('the-ring').remove()
	document.getElementById("gollum").remove()

	document.getElementById("Frodo Baggins").remove()
	document.getElementById('Samwise "Sam" Gamgee').remove()
	document.getElementById('Meriadoc "Merry" Brandybuck').remove()
	document.getElementById('Peregrin "Pippin" Took').remove()

	let hobbitList = document.createElement('ul')
	hobbitList.setAttribute("class", "hobbitList")
	for(let i = 0; i < hobbits.length; i++){
		const hobbitName = document.createElement('li')
		hobbitName.setAttribute('id', hobbits[i])
		hobbitName.setAttribute('class', "hobbit")
		hobbitName.innerText = (hobbits[i])
		hobbitList.appendChild(hobbitName)
}
	document.querySelector("#The-Shire").appendChild(hobbitList)


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
