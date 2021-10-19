console.log('Linked.');

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir'];

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs'];

const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log('1: makeMiddleEarth');

  // 1. create a section tag with an id of middle-earth
  const section = document.createElement('section');
  section.id = 'middle-earth';
  //This was just a log to see if our section was created propercly
  //console.log(section)
  // 2. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    const landArticle = document.createElement('article');
    //   2b. gives each land article an `id` tag of the corresponding land name
    landArticle.id = lands[i];
    //   2c. includes an h1 with the name of the land inside each land article
    const landName = document.createElement('h1');
    landName.textContent = lands[i];
    //we have an article and a name and we need to tell program to keep them together with appendChild
    //   2d. appends each land to the middle-earth section
    landArticle.appendChild(landName);
    // 3. append the section to the body of the DOM.
    section.appendChild(landArticle);
  }
  document.body.appendChild(section);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log('2: makeHobbits');
  // const theShire = document.getElementById('The-Shire')
  //We can also use querySelector
  const theShire = document.querySelector('#The-Shire');
  // console.log(theShire)
  // display an `unordered list` of hobbits in the shire
  const ulHobbits = document.createElement('ul');
  ulHobbits.id = 'hobbits';
  // console.log(ulHobbits)
  // give each hobbit a class of `hobbit`
  for (let i = 0; i < hobbits.length; i++) {
    //create an li for each Hobbit
    const liHobbit = document.createElement('li');
    //display each hobbits name
    liHobbit.textContent = hobbits[i];
    //give each hobbit a class of hobbit
    liHobbit.className = 'hobbit';
    //append each hobbit's li to the hobbits ul
    ulHobbits.appendChild(liHobbit);
  }
  theShire.appendChild(ulHobbits);
  // hint: create a 'ul' outside the loop into which to append the 'li's
  // hint: get 'The-Shire' by using its id
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log('3: keepItSecretKeepItSafe');
  // create a div with an id of `'the-ring'`
  const oneRingDiv = document.createElement('div');
  oneRingDiv.id = 'the-ring';
  // give the div a class of `'magic-imbued-jewelry'`
  oneRingDiv.className = 'magic-imbued-jewelry';
  // add the ring as a child of `Frodo`
  //find the ul where frodo lives
  const ulHobbits = document.querySelector('ul');
  //figure out which li frodo is
  const liFrodo = ulHobbits.children[0];
  //attach the ring
  liFrodo.appendChild(oneRingDiv);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log('4: makeBaddies');
  const mordor = document.getElementById('Mordor');
  const ulBaddies = document.createElement('ul');
  ulBaddies.id = 'baddies';
  for (let i = 0; i < baddies.length; i++) {
    const liBaddy = document.createElement('li');
    liBaddy.className = 'baddy';
    liBaddy.textContent = baddies[i];
    ulBaddies.appendChild(liBaddy);
  }
  mordor.appendChild(ulBaddies);
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  // remember to append them to Mordor
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log('5: makeBuddies');
  const rivendell = document.getElementById('Rivendell');
  // create an `aside` tag
  const aside = document.createElement('aside');
  // put an `unordered list` of the `'buddies'` in the aside
  const ulBuddies = document.createElement('ul');
  ulBuddies.id = 'buddies';
  buddies.forEach((buddy) => {
    const liBuddy = document.createElement('li');
    liBuddy.className = 'buddy';
    liBuddy.textContent = buddy;
    ulBuddies.appendChild(liBuddy);
    aside.appendChild(ulBuddies);
  });
  // insert your aside as a child element of `rivendell`
  rivendell.appendChild(aside);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log('6: leaveTheShire');
  // assemble the `hobbits` and move them to `rivendell`
  const hobbits = document.getElementById('hobbits');
  const rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(hobbits);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log('7: beautifulStranger');

  // change the `'Strider'` text to `'Aragorn'`
  const nameChange = document.querySelector('#buddies li:nth-child(4)');
  nameChange.textContent = 'Aragorn';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log('8: forgeTheFellowShip');
  const aside = document.querySelector('#Rivendell aside');
  const hobbit = document.querySelector('#Rivendell #hobbits');
  hobbit.remove();
  aside.remove();

  // create a new div called `'the-fellowship'` within `rivendell`
  const theFellowship = document.createElement('div');
  theFellowship.className = 'the-fellowship';
  const ulTheFellowship = document.createElement('ul');
  const rivendell = document.getElementById('Rivendell');
  let fellowships = [...hobbits, ...buddies];
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  fellowships.forEach((fellowship) => {
    const liTheFellowship = document.createElement('li');
    liTheFellowship.textContent = fellowship;
    ulTheFellowship.appendChild(liTheFellowship);
    alert(`${fellowship} have joined your party`);
  });
  theFellowship.appendChild(ulTheFellowship);
  rivendell.appendChild(theFellowship);

  // after each character is added make an alert that they // have joined your party
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log('9: theBalrog');
  // change the `'Gandalf'` text to `'Gandalf the White'`
  const gandalfWhite = document.querySelector('.the-fellowship li:nth-child(5)');
  gandalfWhite.textContent = 'Gandalf the White';

  // apply the following style to the element, make the // background 'white', add a grey border
  gandalfWhite.style.backgroundColor = 'white';
  gandalfWhite.style.border = '5px solid gray';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log('10: hornOfGondor');
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown. Boromir's been killed by the Uruk-hai!");
  //   alert("")
  // Remove `Boromir` from the Fellowship
  const removeBoromir = document.querySelector('.the-fellowship li:last-child');
  removeBoromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log('11: itsDangerousToGoAlone');
  const frodo = document.querySelector('.the-fellowship li:first-child');
  const ring = document.createElement('div');
  ring.className = 'magic-imbued-jewelry';
  frodo.appendChild(ring);
  const sam = document.querySelector('.the-fellowship li:nth-child(2)');
  const mordor = document.getElementById('Mordor');
  const mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  mountDoom.appendChild(frodo);
  mountDoom.appendChild(sam);
  // add a div with an id of `'mount-doom'` to `Mordor`

  mordor.appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log('12: weWantsIt');
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollum = document.createElement('div');
  gollum.id = 'gollum';
  const mordor = document.getElementById('Mordor');
  mordor.appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const frodo = document.querySelector('#Mordor .magic-imbued-jewelry');
  frodo.remove();
  // Move Gollum into Mount Doom
  const gollumRing = document.createElement('div');
  gollumRing.className = 'magic-imbued-jewelry';
  gollum.appendChild(gollumRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log('13: thereAndBackAgain');
  // remove `Gollum` and `the Ring` from the document
  const gollum = document.getElementById('gollum');
  const ring = document.querySelector('#Mordor .magic-imbued-jewelry');
  gollum.remove();
  ring.remove();
  // Move all the `hobbits` back to `the shire`
  const mountDoom = document.getElementById('mount-doom');
  const homeFrodo = document.querySelector('#mount-doom li:first-child');
  const homeSam = document.querySelector('#mount-doom li:last-child');
  const shire = document.querySelector('#The-Shire');
  shire.appendChild(homeFrodo);
  shire.appendChild(homeSam);
  mountDoom.remove();
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
