console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  
  const section = document.createElement("section") 
    section.id = "middle-earth";
    // console.log('the first section', section);

  // 2. use a for loop to iterate over the lands array that does the following:
  for(let i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    const landArticle = document.createElement("article")
    //   2b. gives each land article an `id` tag of the corresponding land name
    landArticle.id = lands[i]
    // console.log(landArticle);
    //   2c. includes an h1 with the name of the land inside each land article
    const h1 = document.createElement("h1")
    h1.textContent = lands[i]

    landArticle.appendChild(h1)
    //   2d. appends each land to the middle-earth section
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
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire

  const theShire = document.getElementById("The-Shire");
  const ulHobbit = document.createElement("ul");
  ulHobbit.className = "hobbits";
  
  for(let i = 0; i < hobbits.length; i++) {
    const liHobbits = document.createElement("li");
    liHobbits.textContent = hobbits[i];
  // give each hobbit a class of `hobbit`
    liHobbits.className = "hobbit";
    ulHobbit.appendChild(liHobbits);
  }
  // hint: create a 'ul' outside the loop into which to append the 'li's
  // hint: get 'The-Shire' by using its id
  theShire.appendChild(ulHobbit);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const oneRingDiv = document.createElement("div");
  // give the div a class of `'magic-imbued-jewelry'`
  oneRingDiv.className = "magic-imbued-jewelry";
  // add the ring as a child of `Frodo`
  const ulHobbit = document.querySelector('ul')
  const liFrodo = ulHobbit.children[0]
  liFrodo.appendChild(oneRingDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const mordor = document.getElementById("Mordor");
  const ulBaddiesList = document.createElement("ul");
  ulBaddiesList.className = "baddies";
  
  for(let i = 0; i < baddies.length; i++) {
    const liBaddies = document.createElement("li");
    liBaddies.textContent = baddies[i];
  // give each hobbit a class of `hobbit`
    liBaddies.className = "baddy";
    ulBaddiesList.appendChild(liBaddies);
  // give each of the baddies a class of "baddy"
  }

  mordor.appendChild(ulBaddiesList);
  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  const rivendell = document.getElementById("Rivendell");
  console.log('this should be rivendell', rivendell)
  // create an `aside` tag
  const asideBuddies = document.createElement("aside");
  asideBuddies.id = "buddies";
  // put an `unordered list` of the `'buddies'` in the aside
  const ulBuddiesList = document.createElement("ul");
  ulBuddiesList.className = "buddies";
  
  for(let i = 0; i < buddies.length; i++) {
    const liBuddies = document.createElement("li");
    liBuddies.textContent = buddies[i];
    liBuddies.className = "buddy";
    ulBuddiesList.appendChild(liBuddies);
  }
  // insert your aside as a child element of `rivendell`

  rivendell.appendChild(ulBuddiesList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  const ulHobbit = document.getElementsByClassName("hobbits");
  const rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(ulHobbit[0]);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  const aragornReveal = document.getElementsByTagName("li")[3].textContent = "Aragorn";
  
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const rivendell = document.getElementById("Rivendell");
  const andMyAxeDiv = document.createElement("div");
  andMyAxeDiv.id = "the-fellowship";
  rivendell.appendChild(andMyAxeDiv);
  
  const lisHobbits = document.querySelectorAll("li.hobbit");
  const lisBuddies = document.querySelectorAll("li.buddy");
  const ulFellowship = document.createElement("ul");
  ulFellowship.id = "fellowshipList";
  andMyAxeDiv.appendChild(ulFellowship);
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  const fellowshipOfTheRings = document.getElementById("fellowshipList");

  for(let i = 0; i < lisHobbits.length; i++) {
  // // after each character is added make an alert that they // have joined your party
    fellowshipOfTheRings.appendChild(lisHobbits[i]);
    alert((lisHobbits[i].textContent) + " has joined your party");
  };
  for(let i = 0; i < lisBuddies.length; i++) {
    fellowshipOfTheRings.appendChild(lisBuddies[i]);
    alert((lisBuddies[i].textContent) + " has joined your party");
  };
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const gandalfTheGrey = document.querySelectorAll("li.buddy")[0];
   
   gandalfTheGrey.textContent = "Gandalf the White";
   gandalfTheGrey.setAttribute("style", "background-color: white; border: 1px solid grey");
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown.");
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  const boromirDed = document.querySelectorAll("li.buddy")[4];
  
  boromirDed.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const frodo = document.querySelectorAll("li.hobbit")[0];
  
  const samwise = document.querySelectorAll("li.hobbit")[1];
  
  const mordor = document.getElementById("Mordor");
  
  mordor.appendChild(frodo);
  mordor.appendChild(samwise);
  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom"
  mordor.appendChild(mountDoom);

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollumDiv = document.createElement("div");
  gollumDiv.id = "gollum";
  const mordor = document.getElementById("Mordor");
  mordor.appendChild(gollumDiv);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const oneRing = document.querySelector("div.magic-imbued-jewelry");
  gollumDiv.appendChild(oneRing);
  // Move Gollum into Mount Doom
  const mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollumDiv);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  const gollum = document.getElementById("gollum");
  gollum.remove();
  // Move all the `hobbits` back to `the shire`
  
  const theShire = document.getElementById("The-Shire");
  const ulHobbitsReturn = document.querySelector("ul.hobbits");
  const lisHobbits = document.querySelectorAll("li.hobbit");
  
  for(let i = 0; i < lisHobbits.length; i++) {
    ulHobbitsReturn.appendChild(lisHobbits[i]);
  };

  theShire.appendChild(ulHobbitsReturn);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
