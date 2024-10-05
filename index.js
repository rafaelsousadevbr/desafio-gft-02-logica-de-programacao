
// variável que armazena o número de vitórias
let heroWins = 120;

// variável que armazena o número de derrotas
let heroDefeats = 20;

//função que irá retornar o saldo final das vitórias do jogador
const balanceOfVictories = (victories,defeats) =>{
    return victories - defeats;
}

const printMessage = (totalOfVictories, level) => 
    `"O Herói tem de saldo de **${totalOfVictories}** está no nível de **${level}**"`;

const numberTotalOfWins = balanceOfVictories(heroWins,heroDefeats)

if (numberTotalOfWins <= 10) {
    // Se vitórias for menor do que 10 = Ferro
    console.log(printMessage(numberTotalOfWins, "Ferro"));
  
  } else if (numberTotalOfWins >= 11 && numberTotalOfWins <= 20) {
    // Se vitórias for entre 11 e 20 = Bronze
    console.log(printMessage(numberTotalOfWins, "Bronze"));
  
  } else if (numberTotalOfWins >= 21 && numberTotalOfWins <= 50) {
    // Se vitórias for entre 21 e 50 = Prata
    console.log(printMessage(numberTotalOfWins, "Prata"));
  
  } else if (numberTotalOfWins >= 51 && numberTotalOfWins <= 80) {
    // Se vitórias for entre 51 e 80 = Ouro
    console.log(printMessage(numberTotalOfWins, "Ouro"));
  
  } else if (numberTotalOfWins >= 81 && numberTotalOfWins <= 90) {
    // Se vitórias for entre 81 e 90 = Diamante
    console.log(printMessage(numberTotalOfWins, "Diamante"));
  
  } else if (numberTotalOfWins >= 91 && numberTotalOfWins <= 100) {
    // Se vitórias for entre 91 e 100= Lendário
    console.log(printMessage(numberTotalOfWins, "Lendário"));
  
  } else if (numberTotalOfWins >= 101) {
    // Se vitórias for maior ou igual a 101 = Imortal
    console.log(printMessage(numberTotalOfWins, "Imortal"));
  
  }