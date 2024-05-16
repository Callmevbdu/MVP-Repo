# “Ronda”: A Moroccan cards game.

## Introduction:
“Ronda” is a Moroccan cards game which has Spanish-Italian origins. The deck of cards consists of 40 cards; four Latin suits (cups, swords, sticks, denarii). There are cards numbered 1 to 7, and three other cards: the Jack (10), the Knight (11) and the King (12)). Note that 8 and 9 are “missing”.

The game is played with two, three or four players sequentially, in the case of 4 players, the players seated in opposite play as a team.

[Deployed project page](https://callmevbdu.github.io/Ronda-moroccan_game/)

[LinkedIn project blog article](https://www.linkedin.com/posts/abdellatif-hmiche-3227291b7_introduction-my-project-called-ronda-activity-7196247424141524992-YJyW)

## Installation:
### Install:
- “Ronda” requires SDL, SDL_image and SDL_ttf. You can get them using these commands:
> $ sudo apt-get install libsdl2-dev

> $ sudo apt-get install libsdl2-ttf-dev

> $ sudo apt-get install libsdl2-image-2.0-0-dev

- Change directory into “Ronda”'s folder and run:
> $ make

> $ make install

### Uninstall:
- Run the command:
> $ make uninstall

## How to play:

### Objective:
The goal of “Ronda” is to collect as many cards as possible to score points. A round is won by the first player or team that reaches more than 20 cards. The overall game is won when a team accumulates a total of 41 points.

### Dealing:
The dealer is determined sequentially.
- In a two-player game:
	The dealer distributes three cards to each player in a clockwise direction.
	Additionally, the dealer places four face-up cards on the table. These four cards must be of different numbers and not form a pair. Otherwise the problematic card is replaced.
- In a four-player game, two players face each other forming a team, and each player receives four cards without placing any cards on the table.

### Gameplay:
- The first player to throw/play a card is the one sitting after the dealer.
- Players take turns playing one card face-up onto the table.
- Cards can be captured by forming pairs with cards already on the table or by creating ascending sequences.
	Example: we have 1, 2, 5 in hand and 5, 6, 7, 10, 12 on the table; we cover the 5 with its 5, and we win 5, 5, 6, 7, 10.
- If unable to form a pair, players must discard a card onto the table.
- The game continues until all cards are played.
- After each deal of cards, players can make announcements:
	* “Ronda”: Announce if you have a pair of a similar number cards. Worth 1 point.
	* “Tringa”: Announce if you have three cards of a similar number. Worth 5 points.
	* The cards' value within the announced pair or three of a kind is not revealed until the end of the round.
- Players can also earn points by making “Missa” which involves capturing all cards from the table.

### Additional Rules and Scoring:

#### - “Ronda” and “Tringa” announcements:
A player announces “Ronda” when they have a pair of similar number cards in hand after the deal of cards.
* If the player is the only one announcing “Ronda”, he immediately receive a token.
* If multiple players announce “Ronda”, tokens are reserved on the table—one for each announced “Ronda”.
* The player with the highest card number pair forming the largest “Ronda” receives all the tokens.
* In case of a tie, tokens are evenly distributed among tied players.
The player announcing “Tringa” automatically receives five tokens plus all announced “Rondas” tokens.
* If two opponents each have a “Tringa”, the player with the smaller “Tringa” receives points for the announced “Tringas”.
* If a player has a small “Ronda” and intentionally omits announcing it to avoid giving points to the opponent, and the “Ronda” is discovered later during the game, the hiding player is penalized by 1 point awarded to the opponent with the largest “Ronda” (or to the team if playing with four players).

#### - “Bount, Khamsa and Äachra” announcements:
When a player can form a pair with a card just discarded by the opponent to their left, they have the option to “tap” it.
The player covers the opponent’s card that forms the pair while shouting: “Bount!”.
If the player to the right of the “tapper” also has the same card, they can immediately discard it, forming a three-of-a-kind, and shout: “Khamsa!”.
If the fourth player has the remaining card to form a four-of-a-kind, they shout: “Äachra!” while discarding the card.

	* “Bount” (One): If the player to the right lacks the announced card and hasn’t said “Khamsa” the player shouting “Bount” receives one token.
	* “Khamsa” (Five): If the player to the right lacks the announced card and hasn’t said “Äachra” the player shouting “Khamsa” earns five tokens for their team, and the other team gains nothing.
	* “Äachra” (Ten): The player shouting “Äachra” receives ten tokens, and others earn nothing.

If the first player who “taps” also achieves “Missa” simultaneously, they must say “Bount & Missa” instead of “Bount”
Similarly, the player who would normally say “Khamsa” should shout “Khamsa & Missa,” and “Äachra & Missa” for the player achieving “Äachra”.

### Scoring Points:
* “Ronda”: 1 point (possibly 2, 3, or 4 if multiple players announce “Ronda”).
* “Tringa”: 5 points (possibly more if multiple players announce “Ronda”). 
* “Missa”: 1 point (Clearing the table).
* Tapping on the Opponent’s Pair: 1, 5, or 10 points (2, 6, or 11 points if simultaneous “Missa”).

### Last hand:
- In the last round, there may still be cards on the table. The player who collected the last pair collects all the remaining cards on the table.
-  The dealer must win the last pair. If they fail, the opposing player or team earns 5 points.
	* If the last card played to win the last pair is a 1, the opponent earns 5 points.
	* If the last card played to win the last pair is a 12, the player or team earns 5 points.
	* Making “Missa” in the final hand does not score any points.

### End-of-Game Points:
Players earn points after the game by counting their cards:
- Two-player game: Gain points for cards won beyond 20 (each card counts as one point from the 21st card onward).
- Team-based game: The team combines their cards won, and each card counts as one point from the 21st card onward.

## Contributing
We welcome contributions! Please contact me.

## Related Projects:
Comming soon.

## Licence:
- Supervised by: ALX Software engineering & Holberton School.
- Creator: Abdellatif Hmiche
