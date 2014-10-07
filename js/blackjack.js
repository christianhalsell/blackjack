// Activate "Show Card" function
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

var card00 = new Card('card-2h', '2 of Hearts', 2),
	card01 = new Card('card-2d', '2 of Diamonds', 2),
	card02 = new Card('card-2c', '2 of Clubs', 2),
	card03 = new Card('card-2s', '2 of Spades', 2),
	card04 = new Card('card-3h', '3 of Hearts', 3),
	card05 = new Card('card-3d', '3 of Diamonds', 3),
	card06 = new Card('card-3c', '3 of Clubs', 3),
	card07 = new Card('card-3s', '3 of Spades', 3),
	card08 = new Card('card-4h', '4 of Hearts', 4),
	card09 = new Card('card-4d', '4 of Diamonds', 4),
	card10 = new Card('card-4c', '4 of Clubs', 4),
	card11 = new Card('card-4s', '4 of Spades', 4),
	card12 = new Card('card-5h', '5 of Hearts', 5),
	card13 = new Card('card-5d', '5 of Diamonds', 5),
	card14 = new Card('card-5c', '5 of Clubs', 5),
	card15 = new Card('card-5s', '5 of Spades', 5),
	card16 = new Card('card-6h', '6 of Hearts', 6),
	card17 = new Card('card-6d', '6 of Diamonds', 6),
	card18 = new Card('card-6c', '6 of Clubs', 6),
	card19 = new Card('card-6s', '6 of Spades', 6),
	card20 = new Card('card-7h', '7 of Hearts', 7),
	card21 = new Card('card-7d', '7 of Diamonds', 7),
	card22 = new Card('card-7c', '7 of Clubs', 7),
	card23 = new Card('card-7s', '7 of Spades', 7),
	card24 = new Card('card-8h', '8 of Hearts', 8),
	card25 = new Card('card-8d', '8 of Diamonds', 8),
	card26 = new Card('card-8c', '8 of Clubs', 8),
	card27 = new Card('card-8s', '8 of Spades', 8),
	card28 = new Card('card-9h', '9 of Hearts', 9),
	card29 = new Card('card-9d', '9 of Diamonds', 9),
	card30 = new Card('card-9c', '9 of Clubs', 9),
	card31 = new Card('card-9s', '9 of Spades', 9),
	card32 = new Card('card-10h', '10 of Hearts', 10),
	card33 = new Card('card-10d', '10 of Diamonds', 10),
	card34 = new Card('card-10c', '10 of Clubs', 10),
	card35 = new Card('card-10s', '10 of Spades', 10),
	card36 = new Card('card-jh', 'Jack of Hearts', 10),
	card37 = new Card('card-jd', 'Jack of Diamonds', 10),
	card38 = new Card('card-jc', 'Jack of Clubs', 10),
	card39 = new Card('card-js', 'Jack of Spades', 10),
	card40 = new Card('card-qh', 'Queen of Hearts', 10),
	card41 = new Card('card-qd', 'Queen of Diamonds', 10),
	card42 = new Card('card-qc', 'Queen of Clubs', 10),
	card43 = new Card('card-qs', 'Queen of Spades', 10),
	card44 = new Card('card-kh', 'King of Hearts', 10),
	card45 = new Card('card-kd', 'King of Diamonds', 10),
	card46 = new Card('card-kc', 'King of Clubs', 10),
	card47 = new Card('card-ks', 'King of Spades', 10),
	card48 = new Card('card-ah', 'Ace of Hearts', 11),
	card49 = new Card('card-ad', 'Ace of Diamonds', 11),
	card50 = new Card('card-ac', 'Ace of Clubs', 11),
	card51 = new Card('card-as', 'Ace of Spades', 11);


// the deck
var deck = [];

// put the cards into the deck
for (i = 0; i < 52; i++) {
	var num,
		tempCard;

	if (i < 10) { // if the number is less than 10, put a zero in front of the number
		num = "0" + i;
	} else {
		num = i;
	}

	tempCard = "card" + num;

	deck.push(window[tempCard]); // convert string into variable name
}

// shuffle the deck
function shuffle(array) {
	var counter = array.length, temp, index;

	// while there are elements in the array
	while (counter > 0) {
		// pick a random index
		index = Math.floor(Math.random() * counter);

		// decrease counter by 1
		counter--;

		// and swap the last element with it
		temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

shuffle(deck);


// show shuffled deck in console
/* for (var i in deck) {
	console.log(i + ") " + deck[i].name);
} */


// deal the first four cards
$('#playerCard1').addClass(deck[0].position);
$('#dealerCard1').addClass(deck[1].position);
$('#playerCard2').addClass(deck[2].position);
$('#dealerCard2').addClass(deck[3].position);


// keep track of player's and dealer's hand
var playerHand = [deck[0], deck[2]],
	dealerHand = [deck[1], deck[3]];


// ace counter
var playerAceCount = 0,
	dealerAceCount = 0;


// check to see how many aces were dealt
for (var i = 0; i < dealerHand.length; i++) {
	if (dealerHand[i].value === 11) {
		dealerAceCount += 1;
	}	
}

for (var i = 0; i < playerHand.length; i++) {
	if (playerHand[i].value === 11) {
		playerAceCount += 1;
	}	
}


// start the score at zero
var playerScore = (deck[0].value) + (deck[2].value),
	dealerScore = (deck[1].value) + (deck[3].value);


// display Player score
var displayPlayerScore = function() {
	$('#playerScore span').html(playerScore);
}

displayPlayerScore();


// display Dealer score
var displayDealerScore = function() {
	$('#dealerScore span').html(dealerScore);
}

displayDealerScore();


// let's play!
var deckCounter = 4,
	playerCounter = 3,
	dealerCounter = 3,
	playerCard,
	dealerCard;

// player's turn
$('#hit').on('click', function() {
	// where do the cards go?
	playerCard = '<div id="playerCard' + playerCounter + '" class="card '+ deck[deckCounter].position + '"></div>';
	$('.container').append(playerCard);

	// check to see if player's new card is an ace
	if (deck[deckCounter].value === 11) {
		playerAceCount += 1;
	}

	// update the information
	playerScore += deck[deckCounter].value;
	playerHand.push(deck[deckCounter]);
	deckCounter += 1;
	playerCounter += 1;
	displayPlayerScore();


	// if player goes over 21
	if (playerScore > 21) {		
		if (playerAceCount > 0) { // check to see if the player has at least one ace
			playerScore -= 10;
			playerAceCount -= 1;
			displayPlayerScore();
		} else { // otherwise, the player loses
			$('#hit').css('visibility','hidden');
			$('#playerScore').html("You bust, sucka!");
		}
	}
});

// dealer's turn
var dealerTurn = function() {
	// dealer plays on anything below 17
	while (dealerScore < 17) {
		dealerCard = '<div id="dealerCard' + dealerCounter + '" class="card '+ deck[deckCounter].position + '"></div>';
		$('.container').append(dealerCard);

		// check to see if dealer's new card is an ace
		if (deck[deckCounter].value === 11) {
			dealerAceCount += 1;
		}

		// update the information
		dealerScore += deck[deckCounter].value;
		dealerHand.push(deck[deckCounter]);
		deckCounter += 1;
		dealerCounter += 1;
		displayDealerScore();
	};
};


// what happens when the player holds
$('#hold').on('click', function() {
	// deactivate hit and hold buttons
	$('#hit').css('visibility','hidden');
	$('#hold').css('visibility','hidden');

	// show the overturned card
	$('#dealerCard1').removeClass('overturn');
	dealerTurn();
});