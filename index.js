function scuberGreetingForFeet(x){
  if(x < 400){
    return "This one is on me!"

  }
  else if(x >2000&& x<=2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }
}

function ternaryCheckCity(x){
 const message =x==='NYC'?'Ok, sounds good.':'No go.';
 return message;
  
}

function switchOnCharmFromTip(x){
  switch (x) {
    case 'generous':
      x = 'Thank you so much.';
      break;
    case 'not as generous':
      x = 'Thank you.';
      break;
    default:
      x = 'Bye.';
  }
  return x;
  
}