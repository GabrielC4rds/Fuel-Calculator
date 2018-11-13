/** 
 * Calculadora FLEX
 * @author Gabriel Cards
 */

 var etanol,gasolina;

 function Calcular(){
     etanol=parseFloat(frmFlex.txtEtanol.value.replace(",","."));
     gasolina=parseFloat(frmFlex.txtGasolina.value.replace(",","."));
     if(etanol < 0.7 * gasolina){
        document.getElementById("status").src="etanol.png";
     }else{
        document.getElementById("status").src="gasolina.png"; 
    }
 }

 function Resetar(){
     document.getElementById("status").src="neutro.png";
 }