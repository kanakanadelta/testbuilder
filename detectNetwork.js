// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  var detectNetwork = function(cardNumber) {
    // Note: `cardNumber` will always be a string
    var cardLength = cardNumber.length;

    var prefix1 = parseInt(cardNumber.substring(0,1));
    var prefix2 = parseInt(cardNumber.substring(0,2));
    var prefix3 = parseInt(cardNumber.substring(0,3));
    var prefix4 = parseInt(cardNumber.substring(0,4));
    var prefix6 = parseInt(cardNumber.substring(0,6));

    // The Diner's Club network always starts with a 38 or 39
      //nd is 14 digits long
    // The American Express network always starts with a 34 or 37
      //and is 15 digits long
    // Visa always has a prefix of 4
      //and a length of 13, 16, or 19.
    // MasterCard always has a prefix of 51, 52, 53, 54, or 55
      //and a length of 16.
    // Discover always has a prefix of 6011, 644-649, or 65,
      //and a length of 16 or 19.
    // Maestro always has a prefix of 5018, 5020, 5038, or 6304,
      //and a length of 12-19.
    // China UnionPay always has a prefix of 622126-622925, 624-626, or
    // 6282-6288
    //   and a length of 16-19.
    // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
    //   and a length of 16, 18, or 19.

    if((prefix2===38||prefix2===39) && cardLength===14){
      return 'Diner\'s Club';
    } else if((prefix2===34||prefix2===37) && cardLength===15){
      return 'American Express';
    } else if ((prefix4===4903 || prefix4===4905 || prefix4===4911 || prefix4===4936 || prefix6===564182 || prefix6===633110 || prefix4===6333 || prefix4===6759) && (cardLength===16 || cardLength===18 || cardLength===19)) {
      return 'Switch';
    } else if (prefix1===4 && (cardLength===13 || cardLength===16 || cardLength===19)){
      return 'Visa';
    } else if((prefix2>=51 && prefix2<=55) && cardLength===16){
      return 'MasterCard';
    } else if((prefix4===6011 || (prefix3>=644 && prefix3<=649) || prefix2===65) && (cardLength===16 || cardLength===19)){
      return 'Discover';
    } else if ((prefix4===5018 || prefix4===5020 || prefix4===5038 || prefix4===6304) && (cardLength>=12 && cardLength<=19)){
      return 'Maestro';
    } else if(((prefix6>=622126 && prefix6<=622925) || (prefix4>=6282 && prefix4<=6288) || (prefix3>=624 && prefix3<=626)) && (cardLength>=16 && cardLength<=19)){
      return 'China UnionPay';
    }

    // Once you've read this, go ahead and try to implement this function, then return to the console.
  };
