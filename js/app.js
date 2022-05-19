console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  let newSection = document.createElement("section");
  newSection.setAttribute("id", "middle-earth");
  // 2. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    let newArticles = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    newArticles.setAttribute("id", `${lands[i]}`);
    //   2c. includes an h1 with the name of the land inside each land article
    newH = document.createElement("h1");
    newH.innerText = `${lands[i]}`;
    newArticles.appendChild(newH);
    newSection.append(newArticles);
    document.body.append(newSection);
  }
  console.log(newSection);
  // console.log(newArticles);
  //   2d. appends each land to the middle-earth section
  // 3. append the section to the body of the DOM.
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  let hobbitList = document.createElement("ul");
  hobbitList.id = "hobbits";
  //   console.log(hobbitList);
  // give each hobbit a class of `hobbit`
  for (i = 0; i < hobbits.length; i++) {
    let items = document.createElement("li");
    items.setAttribute("class", "hobbit");
    items.innerText = `${hobbits[i]}`;
    hobbitList.appendChild(items);
  }
  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id
  let theShire = document.getElementById("The-Shire");
  theShire.appendChild(hobbitList);
  // document.getElementById("The-Shire").append(hobbitList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");
  // create a div with an id of `'the-ring'`
  let ringContainer = document.createElement("div");

  // give the div a class of `'magic-imbued-jewelry'`
  ringContainer.id = "the-ring";
  // add the ring as a child of `Frodo`
  ringContainer.className = "magic-imbued-jewelry";
  let hobbitList = document.querySelector("ul");
  let frodo = hobbitList.children[0];
  frodo.appendChild(ringContainer);
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".
}
// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");
  let mordorList = document.createElement("ul");
  mordorList.class = "baddies";
  //   console.log(hobbitList);
  // give each hobbit a class of `hobbit`
  for (i = 0; i < baddies.length; i++) {
    let items = document.createElement("li");
    items.setAttribute("class", "baddie");
    items.innerText = `${baddies[i]}`;
    mordorList.appendChild(items);
  }
  let theMordor = document.getElementById("Mordor");
  theMordor.appendChild(mordorList);
}

//   // remember to append them to Mordor

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");
   let asideTag = document.createElement('aside')
  let rivendellList = document.createElement("ul");
  rivendellList.class = "buddies";
  asideTag.appendChild(rivendellList);
  for (i = 0; i < buddies.length; i++) {
    let items = document.createElement("li");
    items.setAttribute("class", "buddie");
    items.innerText = `${buddies[i]}`;
    rivendellList.appendChild(items);
  }
  let theRivendell = document.getElementById("Rivendell");
  theRivendell.appendChild(asideTag);
}
// create an `aside` tag

// put an `unordered list` of the `'buddies'` in the aside

// insert your aside as a child element of `rivendell`

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
  let hobbitList = document.getElementById("hobbits");
  console.log(hobbitList);
  let Rivendell = document.getElementById("Rivendell");
  console.log(Rivendell);
  Rivendell.appendChild(hobbitList);
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`

  let buddieList = document.getElementById("buddies");
  console.log(buddieList);
  let strider = document.getElementsByClassName("buddie")[3];
  console.log(strider);
  strider.innerText = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
// baddies.forEach( baddie => {
//   const baddieLi = document.createElement('li')
//   baddieLi.classList.add('hobbit')
//   baddieLi.classList.add('baddies')
//   baddieLi.innerText = baddie
//   baddie.appendChild(baddieLi)
// })


function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  let rivendell = document.getElementById("Rivendell");
  rivendell.id = "rivendell";
  let fellowship = document.createElement("div");
  rivendell.appendChild(fellowship);
  fellowship.setAttribute('id', 'fellowship');
console.log(fellowship);
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let buddies = document.querySelectorAll('li.buddie');
  buddies.forEach( buddie => {
    fellowship.appendChild(buddie);
    alert(`${buddie.innerText} joined my party!`)
  })
  let hobbitList = document.querySelectorAll('li.hobbit');
  console.log(hobbitList, 'This is hobbit list');

  hobbitList.forEach( hobbit => {
    fellowship.appendChild(hobbit);
    alert(`${hobbit.innerText} joined my party!`)
  })
}
  // after each character is added make an alert that they // have joined your party

// // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.

// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 8 complete - The Fellowship is created"

// // ============
// // Chapter 9
// // ============

function theBalrog() {
  console.log("9: theBalrog");
  const fellowship = document.getElementById('fellowship');
  fellowshipBuddies = document.getElementsByClassName('buddie')
  fellowshipBuddies[0].innerText = 'Gandalf the White'
  // change the `'Gandalf'` text to `'Gandalf the White'`
  fellowshipBuddies[0].style.background = "white"
  fellowshipBuddies[0].style.border = '4px grey dashed'

  // apply the following style to the element, make the // background 'white', add a grey border
}

// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 9 complete - Updated Gandalf"

// // ============
// // Chapter 10
// // ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert((`THE HORN OF GONDOR HAS BEEN BLOWN!!!!`));
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  const fellowshipDeath = document.getElementById('fellowship')
  // console.log(fellowshipDeath);
  fellowshipDeath.children[4].remove();
  console.log(fellowshipDeath[4])
}

// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// // ============
// // Chapter 11
// // ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  theFellowship = document.getElementById('fellowship');
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let frodo = theFellowship.children[4];
  // console.log(frodo)
  let sam = theFellowship.children[5];
  // console.log(sam);
  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountD = document.createElement('div');
  mountD.id = 'mount-doom'

  document.getElementById('Mordor').appendChild(mountD);
  mountD.append(frodo, sam);
}

// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// // ============
// // Chapter 12
// // ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
   const gollum = document.createElement('div')
   gollum.id = 'gollum'
   document.getElementById('Mordor').appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  gollum.append(document.getElementById('the-ring'))
  // Move Gollum into Mount Doom
  document.getElementById('mount-doom').appendChild(gollum);
}

// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// // ============
// // Chapter 13
// // ============

function  thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  let gollum = document.getElementById('gollum')
  gollum.remove();
  // Move all the `hobbits` back to `the shire`
  everyHobbit = document.querySelectorAll('li.hobbit')
  console.log(everyHobbit);
  theShire = document.getElementById('The-Shire');
  let hobbitsUl = document.getElementById('hobbits')
    everyHobbit.forEach(hobbit => {
      hobbitsUl.appendChild(hobbit);
    })
    theShire.append(hobbitsUl);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
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
