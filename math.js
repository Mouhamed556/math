// fibonaci
function fibonaci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
//console.log(fibonaci(6));
// power
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
//console.log(power(2, 4));

function power2(m, n) {
  if (n === 0) {
    return 1;
  }
  return m * power2(m, n - 1);
}
function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("hello"));
function Pallindrome(mot) {
  return mot === reverse(mot);
}
function Leap(reel) {
  if ((reel % 4 === 0 && reel % 100 !== 0) || reel % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
function TicketPricing(age) {
  if (age <= 12) {
    return "$10";
  } else if (13 <= age && age < 18) {
    return "$15";
  } else {
    return "$20";
  }
}
