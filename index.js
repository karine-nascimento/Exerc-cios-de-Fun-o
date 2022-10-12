// Exercício 1 e 2

/*
pedirIdade(); 
gatoIdade();
hamsterIdade();

function pedirIdade(){
   let nome = (prompt(`Insira o nome do seu bichinho.`));
   var calculo = [];
   for(i = 0; i < 3; i++){
    var age = parseFloat(prompt('Qual é a idade do seu cachorro?'));
   calculo[i] = age * 7;
    alert(`${nome} tem ${calculo[i]} anos em anos humanos. Um cachorro tem 7 anos para cada ano humano!`);
   }
}

function gatoIdade(){
   let nome = (prompt(`Insira o nome do seu bichinho.`));
   for(i = 0; i < 3; i++){
    var age = parseFloat(prompt('Qual é a idade do seu gato?'));
    var ageconta = age - 2;
   if (age == 1) {
      alert(`O seu gato tem 15 anos em anos humanos!`); 
   } else if (age == 2){
      alert(`O seu gato tem 24 anos em anos humanos!`); 
   } else if(age > 2){
      var conta = 24 + (4 * ageconta);
      alert(`${nome} tem ${conta} anos em anos humanos. Gatos tem 15 anos para o primeiro ano humano, no segundo ano ele terá 24 e após o terceiro ele ganha mais 4 anos para cada ano humano!`); 
   }
}
} 

function hamsterIdade(){ 
   let nome = (prompt(`Insira o nome do seu bichinho.`));
   for(i = 0; i < 3; i++){
    var agehamster = parseFloat(prompt('Qual é a idade do seu hamster?'));
      if(agehamster == 1){
         alert(`O seu hamster tem 21 anos em anos humanos!`); 
      } else if (agehamster >= 2){
         var contaa = 21 + (agehamster - 1) * 6;
         alert(`${nome} tem ${contaa} anos em anos humanos. Hamsters tem 21 anos para primeiro ano humano, após o segundo ano ele ganha mais 6 anos para cada ano humano!`); 
      } 
   }
}

*/
// Exercício 3
/*
function calcularMeuLanche() {
   const maxAge = [];
   let conta = [];
  
   

  

   for(i = 0; i < 3; i++){
      let idade = (prompt(`Informe a idade máxima.`));
      let qtd_lanches = (prompt(`Informe a quantidade de lanches que você comerá por dia.`));

      maxAge[i] = idade; 
    conta[i] = qtd_lanches * (maxAge[i] * 365); 
      alert(`Você precisará de ${conta[i]} lanches para durar até ${maxAge[i]} anos de idade.`)
   }
}

calcularMeuLanche(); 
*/
// Exercício 4
/*
calcularCircunferencia();
calcularArea();

function calcularCircunferencia(){
   const raio = [27, 41 , 12]; 
   const circunferencia = [];

   for(i=0;i<3;i++){
      circunferencia[i] = 2 * 3.14 * raio[i]
      alert(`A circunferencia é de ${circunferencia[i]}cm.`);
   } 

}

function calcularArea(){
   const raio = [27, 41 , 12]; 
   const area = [];

   for(i=0;i<3;i++){
      area[i] = 3.14 * (raio[i] * 2);
      alert(`A área é de ${area[i]}cm².`);
   }
}
*/
// Exercício 5

/*
converterCelsiusFahrenheit()
converterFahrenheitCelsius()

function converterCelsiusFahrenheit () {
   var celsius = parseInt(prompt("Insira a temperatura em Celsius"));
   let conversao = (celsius * 1.8) + 32; 

   alert(`${celsius}°C é igual a ${conversao}°F`);
}

function converterFahrenheitCelsius() {
   var fahrenheit = parseInt(prompt("Insira a temperatura em Fahrenheit."));
   let conversao = (fahrenheit / 1.8) - 32; 

   alert(`${fahrenheit}°F é igual a ${conversao}°C`);
} */