function getComputerChoice(){
   const randomChoice = Math.floor(Math.random()* 4)
   switch(randomChoice){
     case 0:
         return 'Rock!';
         break;
    case 1:
        return 'Paper';
        break;
    case 2:
        return 'Scissors!';
        break;
    default:
        return 'TIE!';
    }
   getComputerChoice();
}