// Activate "Show Card" functionality
$('#hide').on('click', function() {
	$('#dealerCard1').toggleClass('overturn');

	if ($('#dealerCard1').hasClass('overturn')) {		
		$('#hide').html("Show Card");
	} else {
		$('#hide').html("Hide Card");
	}
});

function Card(position, name, value) {
	this.position = position;
	this.name = name;
	this.value = value;
}

var card00 = new Card('card-2h', '2 of Hearts', 2);
var card01 = new Card('card-2d', '2 of Diamonds', 2);
var card02 = new Card('card-2c', '2 of Clubs', 2);
var card03 = new Card('card-2s', '2 of Spades', 2);
var card04 = new Card('card-3h', '3 of Hearts', 3);
var card05 = new Card('card-3d', '3 of Diamonds', 3);
var card06 = new Card('card-3c', '3 of Clubs', 3);
var card07 = new Card('card-3s', '3 of Spades', 3);
var card08 = new Card('card-4h', '4 of Hearts', 4);
var card09 = new Card('card-4d', '4 of Diamonds', 4);
var card10 = new Card('card-4c', '4 of Clubs', 4);
var card11 = new Card('card-4s', '4 of Spades', 4);
var card12 = new Card('card-5h', '5 of Hearts', 5);
var card13 = new Card('card-5d', '5 of Diamonds', 5);
var card14 = new Card('card-5c', '5 of Clubs', 5);
var card15 = new Card('card-5s', '5 of Spades', 5);
var card16 = new Card('card-6h', '6 of Hearts', 6);
var card17 = new Card('card-6d', '6 of Diamonds', 6);
var card18 = new Card('card-6c', '6 of Clubs', 6);
var card19 = new Card('card-6s', '6 of Spades', 6);
var card20 = new Card('card-7h', '7 of Hearts', 7);
var card21 = new Card('card-7d', '7 of Diamonds', 7);
var card22 = new Card('card-7c', '7 of Clubs', 7);
var card23 = new Card('card-7s', '7 of Spades', 7);
var card24 = new Card('card-8h', '8 of Hearts', 8);
var card25 = new Card('card-8d', '8 of Diamonds', 8);
var card26 = new Card('card-8c', '8 of Clubs', 8);
var card27 = new Card('card-8s', '8 of Spades', 8);
var card28 = new Card('card-9h', '9 of Hearts', 9);
var card29 = new Card('card-9d', '9 of Diamonds', 9);
var card30 = new Card('card-9c', '9 of Clubs', 9);
var card31 = new Card('card-9s', '9 of Spades', 9);
var card32 = new Card('card-10h', '10 of Hearts', 10);
var card33 = new Card('card-10d', '10 of Diamonds', 10);
var card34 = new Card('card-10c', '10 of Clubs', 10);
var card35 = new Card('card-10s', '10 of Spades', 10);
var card36 = new Card('card-jh', 'Jack of Hearts', 10);
var card37 = new Card('card-jd', 'Jack of Diamonds', 10);
var card38 = new Card('card-jc', 'Jack of Clubs', 10);
var card39 = new Card('card-js', 'Jack of Spades', 10);
var card40 = new Card('card-qh', 'Queen of Hearts', 10);
var card41 = new Card('card-qd', 'Queen of Diamonds', 10);
var card42 = new Card('card-qc', 'Queen of Clubs', 10);
var card43 = new Card('card-qs', 'Queen of Spades', 10);
var card44 = new Card('card-kh', 'King of Hearts', 10);
var card45 = new Card('card-kd', 'King of Diamonds', 10);
var card46 = new Card('card-kc', 'King of Clubs', 10);
var card47 = new Card('card-ks', 'King of Spades', 10);
var card48 = new Card('card-ah', 'Ace of Hearts', 11);
var card49 = new Card('card-ad', 'Ace of Diamonds', 11);
var card50 = new Card('card-ac', 'Ace of Clubs', 11);
var card51 = new Card('card-as', 'Ace of Spades', 11);

// The deck
var deck = [card00, card01, card02, card03, card04, card05, card06, card07, card08, card09,	card10, card11, card12, card13, card14, card15, card16, card17, card18, card19,	card20, card21, card22, card23, card24, card25, card26, card27, card28, card29,	card30, card31, card32, card33, card34, card35, card36, card37, card38, card39,	card40, card41, card42, card43, card44, card45, card46, card47, card48, card49,	card50, card51];

// Shuffle the deck
function shuffle(array) {
	var counter = array.length, temp, index;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

shuffle(deck);

// Show shuffled deck in console
// for (var i in deck) {
for (var i = 0; i < 10; i++) {
	console.log(i + ") " + deck[i].name);
}

// Deal the first four cards
$('#playerCard1').addClass(deck[0].position);
$('#dealerCard1').addClass(deck[1].position);
$('#playerCard2').addClass(deck[2].position);
$('#dealerCard2').addClass(deck[3].position);

// Show card name on card
/*$('#playerCard1').append(deck[0].name);
$('#dealerCard1').append(deck[1].name);
$('#playerCard2').append(deck[2].name);
$('#dealerCard2').append(deck[3].name);*/

// Start the score at zero
var playerScore = (deck[0].value) + (deck[2].value);
var dealerScore = (deck[1].value) + (deck[3].value);

console.log("Player score: " + ((deck[0].value) + (deck[2].value)));
console.log("Dealer score: " + ((deck[1].value) + (deck[3].value)));

var deckCounter = 4;
var playerCounter = 3;
var playerTurn = true;

$('#hit').on('click', function() {
	var playerCard = '<div id="playerCard' + playerCounter + '" class="card '+ deck[deckCounter].position + '"></div>';
	$('.container').append(playerCard);

	playerScore += deck[deckCounter].value;
	deckCounter += 1;
	playerCounter += 1;
});