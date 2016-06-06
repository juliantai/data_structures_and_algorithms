function Deck() {

  this.cards = [];

  this.init();
}

Deck.prototype.init = function() {
  var nums = ["1","2","3","4","5","6","7","8","9","10","Q", "K", "A"];
  var qty = 4;
  for(var i = 0; i < 4;i ++) {
    Array.prototype.push.apply(this.cards, nums.slice())
  }

  return this.cards;
}
Deck.prototype.shuffle = function() {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }

  return this.cards;

}



// mediator
function Dealer() {
  var deck = null;
  var deckValues = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 11
  }
  var players = [];
  var playersCards = [];
  var playerIds = [0,1,2,3,4,5,6,7,8];
  var currentPlayerId = 0;


  this.newGame = function() {
    if(!players.length) return;

    currentPlayerId = 0;
    deck = new Deck();
    deck.init();
    deck.shuffle()
  }

  this.addPlayers = function(player) {
    if(playerIds.length > 0 )
      var playerId = playerIds.pop();
      players[playerId] = player;


  }

  this.removePlayers = function(player) {
    for(var i = 0; i < players.length; i++) {
      if(players[i] == player) {
        players[i] = null;
        playerIds.push(i);
        break;
      }
    }

  }

  this.dealPlayer = function(player) {

    for(var i = 0; i < players.length; i++) {
      if(players[i] == player) {
        this.deal(i);
        break;
      }
    }

  }
  this.deal = function(playerId) {

    if(!deck.cards.length)
      return;

    if(!playersCards[playerId])
      playersCards[playerId] = [];

    var card = deck.cards.pop();
    playersCards[playerId].push(card);

    var value = this.calculateHand(playersCards[playerId])
    if(value > 21) {
      playersCards[playerId] = null;
      console.log("You bust");
    } else {
      console.log("Have a " + card + " You are at " + value)
    }

  }

  this.calculateHand = function(playerHand) {
    var sum = 0;
    for(var i = 0; i < playerHand.length; i++) {
      sum += deckValues[playerHand[i]]
    }

    return sum

  }

  this.dealAll = function() {

    for(var playerId in players) {
      if(playerId) {
        this.deal(playerId)
        this.deal(playerId)
      }
    }
    console.log(playersCards)

  }

  this.viewCards = function(player) {
    for(var i = 0; i < players.length; i++) {
      if(players[i] == player) {
        console.log(playersCards[i])
        break;
      }
    }
  }

}

function Player(dealer) {
  this.dealer = dealer;

  this.deal = function() {
    dealer.dealPlayer(this);
  }

  this.stand = function() {

  }

  this.join = function() {
    dealer.addPlayers(this);
  }

  this.leave = function() {
    dealer.removePlayers(this);
  }

  this.look = function() {
    dealer.viewCards(this);
  }

}


var d = new Dealer();
var p1 = new Player(d);
p1.join();

var p2 = new Player(d);
p2.join();

d.newGame()
d.dealAll();

p1.look();
p1.deal();
p1.look();


