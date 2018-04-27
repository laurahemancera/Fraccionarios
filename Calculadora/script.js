Window.onload= function()
{
const nomDiv= div=> document.getElementById(div);
const suma=() =>{
let primerNumerador=nomDiv("primerNumerador").value;
let primerDenominador=nomDiv("primerDenominador").value;
let segundoNumerador=nomDiv("segundoNumerador").value;
let segundoDenominador=nomDiv("segundoDenominador").value;
if (primerNumerador.length===0||primerDenominador.length===0)
{
    alert("porfavor completa los campos");
}
else
{
    const suma= ((primerNumerador*segundoDenominador)+(primerDenominador*segundoNumerador))/(primerDenominador*segundoDenominador)
nomDiv("respuesta").innerHTML=
"la suma de fraccionarios es:"+ respuesta.tofixed(2);
}
nomDiv("suma").addEventListener("click",event=>{suma()});
}
//
const nomDiv= div=> document.getElementById(div);
const resta=() =>{
let primerNumerador=nomDiv("primerNumerador").value;
let primerDenominador=nomDiv("primerDenominador").value;
let segundoNumerador=nomDiv("segundoNumerador").value;
let segundoDenominador=nomDiv("segundoDenominador").value;
if (primerNumerador.length===0||primerDenominador.length===0)
{
    alert("porfavor completa los campos");
}
else
{
    const resta= ((primerNumerador*segundoDenominador)+(primerDenominador*segundoNumerador))/(primerDenominador*segundoDenominador)
nomDiv("respuesta").innerHTML=
"la resta de fraccionarios es:"+ respuesta.tofixed(2);
}
nomDiv("resta").addEventListener("click",event=>{resta()});
}
//
const nomDiv= div=> document.getElementById(div);
const multiplicacion=() =>{
let primerNumerador=nomDiv("primerNumerador").value;
let primerDenominador=nomDiv("primerDenominador").value;
let segundoNumerador=nomDiv("segundoNumerador").value;
let segundoDenominador=nomDiv("segundoDenominador").value;
if (primerNumerador.length===0||primerDenominador.length===0)
{
    alert("porfavor completa los campos");
}
else
{
    const multiplicacion = ((primerNumerador*segundoNumerador)/(primerDenominador*segundoDenominador)
nomDiv("respuesta").innerHTML=
"la multiplicacion de fraccionarios es:"+ respuesta.tofixed(2);
}
nomDiv("multiplicacion").addEventListener("click",event=>{multiplicacion()});
}
//
const nomDiv= div=> document.getElementById(div);
const divicion=() =>{
let primerNumerador=nomDiv("primerNumerador").value;
let primerDenominador=nomDiv("primerDenominador").value;
let segundoNumerador=nomDiv("segundoNumerador").value;
let segundoDenominador=nomDiv("segundoDenominador").value;
if (primerNumerador.length===0||primerDenominador.length===0)
{
    alert("porfavor completa los campos");
}
else
{
    const divicion = ((primerNumerador*segundoNumerador)/(primerDenominador*segundoDenominador)
nomDiv("respuesta").innerHTML=
"la divicion de fraccionarios es:"+ respuesta.tofixed(2);
}
nomDiv("divicion").addEventListener("click",event=>{divicion()});
}

}