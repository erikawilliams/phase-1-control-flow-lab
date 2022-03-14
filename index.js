function scuberGreetingForFeet(value){
  // Write your code here!
  if (value <= 400) {
    return 'This one is on me!';
  } else if (value > 2500) {
      return 'No can do.';
  } else if (value > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
  }
  
  /*
  switch (value) {
    case value <= 400:
      return 'This one is on me!';
      break;
    case value > 2500:
      return 'No can do.';
      break;
    case value > 2000:
      return 'I will gladly take your thirty bucks.';
  }*/


function ternaryCheckCity(value){
  // Write your code here!
  return value === 'NYC'?'Ok, sounds good.':'No go.'; 
} 

function switchOnCharmFromTip(value){
  // Write your code here!
  switch (value) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}