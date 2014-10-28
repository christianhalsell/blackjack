var GAMES = GAMES || {};
GAMES.Blackjack = (function() {
	"use strict";

	var deck = []; // the deck
	var playerBet = 0;
	var playerBalance = 500; // starting balance

	var Card = function(position, name, value) {
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

	deck = [card00, card01, card02, card03, card04, card05, card06, card07, card08, card09,
			card10, card11, card12, card13, card14, card15, card16, card17, card18, card19,
			card20, card21, card22, card23, card24, card25, card26, card27, card28, card29,
			card30, card31, card32, card33, card34, card35, card36, card37, card38, card39,
			card40, card41, card42, card43, card44, card45, card46, card47, card48, card49,
			card50, card51];

	// show dealer's hidden card
	var showCard = function() {
		$('#dealerCard1').toggleClass('overturn');

		if ($('#dealerCard1').hasClass('overturn')) {		
			$('#hide').html("Show Card");
		} else {
			$('#hide').html("Hide Card");
		}
	};

	// shuffle the deck
	var shuffle = function(array) {
		var counter = array.length,
				temp,
				index;

		// while there are elements in the array
		while (counter > 0) {
			// pick a random index
			index = Math.floor(Math.random() * counter);

			// decrease counter by 1
			counter --;

			// and swap the last element with it
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	};

	// show shuffled deck in console
	var showDeckInConsole = function() {
		for (var i in deck) {
			console.log(i + ") " + deck[i].name);
		}
	}

	var deckCounter = 4,
		playerCounter = 3,
		dealerCounter = 3;

	var playerCard = function() {
		return '<div id="playerCard' + playerCounter + '" class="card '+ deck[deckCounter].position + '"></div>';
	}

	var dealerCard = function() {
		return '<div id="dealerCard' + dealerCounter + '" class="card '+ deck[deckCounter].position + '"></div>'
	}


	var playerInitCards = '<div id="playerCard1" class="card"></div> <div id="playerCard2" class="card"></div>'
	var dealerInitCards = '<div id="dealerCard1" class="card overturn"></div>	<div id="dealerCard2" class="card"></div>'

	// deal the first four cards
	var deal = function() {
		var playerInitCards = '<div id="playerCard1" class="card"></div> <div id="playerCard2" class="card"></div>'
		var dealerInitCards = '<div id="dealerCard1" class="card overturn"></div>	<div id="dealerCard2" class="card"></div>'
		$('#playerCards').html(playerInitCards);
		$('#dealerCards').html(dealerInitCards);

		$('#playerCard1').addClass(deck[0].position);
		$('#dealerCard1').addClass(deck[1].position);
		$('#playerCard2').addClass(deck[2].position);
		$('#dealerCard2').addClass(deck[3].position);
	}

	// keep track of player's and dealer's hand
	var playerHand = [deck[0], deck[2]],
		  dealerHand = [deck[1], deck[3]];


	// ace counter
	var playerAceCount = 0,
			dealerAceCount = 0;


	// check to see how many aces were dealt
	var aceCheck = function() {
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

		console.log("Dealer has " + dealerAceCount + " aces.");
		console.log("Player has " + playerAceCount + " aces.");
	}


	// start the score at zero
	var playerScore,
		  dealerScore;

	var updateScore = function() {
		playerScore = (deck[0].value) + (deck[2].value);
		dealerScore = (deck[1].value) + (deck[3].value);

		if (dealerAceCount === 2) {
			dealerScore = 12;
			dealerAceCount = 1;
		}

		if (playerAceCount === 2) {
			playerScore = 12;
			playerAceCount = 1;
		}
	}


	// display Player score
	var displayPlayerScore = function() {
		$('#playerScore').html(playerScore);
	}


	// display Dealer score
	var displayDealerScore = function() {
		$('#dealerScore').html(dealerScore);
	}

	// display Player Bet amount
	var updatePlayerScoreboard = function() {
		$('#playerBet span').html(playerBet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		$('#playerBalance span').html(playerBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

		if (playerBalance < 0) {
			$('#playerBalance span').css('color','red');
		}
	}

	var hideHit = function() {
		$('#hit').addClass('invisible');
	}

	var hideHold = function() {
		$('#hold').addClass('invisible');
	}

	// LET'S PLAY!

	// player's turn
	var playerHit = function() {
		$('#playerCards').append(playerCard);

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


		// if player goes over 21, check for aces
		if (playerScore > 21) {		
			if (playerAceCount > 0) { // if player has at least one ace...
				playerScore -= 10;
				playerAceCount -= 1;
				displayPlayerScore();
			} else { // otherwise, the player loses
				hideHit();
				$('#status').html("You bust, sucka!");
				playerBet = 0;
				updatePlayerScoreboard();
				$('#btnBet').removeClass('hide');
			}
		}
	};

	var whoWins = function() {
		if (dealerScore > 21) {
			$('#hit').css('visibility','hidden');
			$('#status').html("You Win!");
			playerBalance = playerBalance + (playerBet * 2);
			playerBet = 0;
			updatePlayerScoreboard();		
			$('#btnBet').removeClass('hide');
		} else if (dealerScore <= 21) {
			 if (playerScore > dealerScore) {
				hideHit();
				$('#status').html("You Win!");
				playerBalance = playerBalance + (playerBet * 2);
				playerBet = 0;
				updatePlayerScoreboard();
				$('#btnBet').removeClass('hide');
			} else if (playerScore < dealerScore) {
				hideHit();
				$('#status').html("You lose! Good day, sir!");
				playerBet = 0;
				updatePlayerScoreboard();
				$('#btnBet').removeClass('hide');
			} else {
				hideHit();
				$('#status').html("Push");
				playerBalance = playerBalance + playerBet;
				playerBet = 0;
				updatePlayerScoreboard();
				$('#btnBet').removeClass('hide');
			}
		}
	}


	// dealer's turn
	var dealerTurn = function() {
		// dealer plays on anything below 17
		while (dealerScore < 17) {
			$('#dealerCards').append(dealerCard);

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

		whoWins();
	};


	var playerHold = function() {
		// deactivate hit and hold buttons
		hideHit();
		hideHold();
		$('#dealerScore').removeClass('hide');
		$('#dealerCard1').removeClass('overturn');
		dealerTurn();
	};

	var chipBet = function (chipValue) {
		if (chipValue <= playerBalance) {
			playerBet += chipValue;
			playerBalance -= chipValue;
			updatePlayerScoreboard();
		} else {
			alert("Can't bet any more");
		}
	};

	var events = function() {
		$('#hide').on('click', showCard);
		$('#btnHit').on('click', playerHit);
		$('#btnHold').on('click', playerHold);

		$('#chip500').on('click', function() { chipBet(500) });
		$('#chip100').on('click', function() { chipBet(100) });
		$('#chip25').on('click', function() { chipBet(25) });
		$('#chip5').on('click', function() { chipBet(5) });
	};

	return {
		init: function() {
			updatePlayerScoreboard();
			events();
		},
		bet: function() {
			$('.chip, #btnDeal').removeClass('hide');
			$('#dealerScore, #playerScore, #btnBet, #btnHit, #btnHold').addClass('hide');
			$('#status, #playerCards, #dealerCards').html('');
		},
		deal: function() {
			$('.chip, #btnDeal').addClass('hide');			
			$('#playerScore, #btnHit, #btnHold').removeClass('hide');
			shuffle(deck);
			showDeckInConsole();
			aceCheck();
			deal();
			updateScore();
			displayPlayerScore();
			displayDealerScore();
			updatePlayerScoreboard();
		}
	}
}());

GAMES.Blackjack.init();

$('#btnDeal').on('click', function() {
	GAMES.Blackjack.deal();
});

$('#btnBet').on('click', function() {
	GAMES.Blackjack.bet();
});
