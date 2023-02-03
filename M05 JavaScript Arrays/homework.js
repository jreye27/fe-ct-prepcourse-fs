/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
   }
// ok
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}
//ok
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
//ok
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray  = [];
   for (var i = 0; i < array.length; i++){
      nuevoArray[i] = array[i] + 1;
   }
   return nuevoArray;
}
//ok
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
     array.push(elemento);
     return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' '); // muestra las palabras del array separados por un espacio
}
//ok
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   return array.includes(elemento);

}
//ok
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   for (var i=0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   };
   return suma;
}
//ok
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   for(var i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   };
   return suma / resultadosTest.length;
}
//ok
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMayor = 0;
   for (var i=0; i < arrayOfNums.length; i++){
      if(arrayOfNums[i] > numeroMayor ){
        numeroMayor = arrayOfNums[i]; 
      };
   };
   return numeroMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1) return 0;
   var total = 1;
   for(var i = 0; i < arguments.length; i++) {
     total = total * arguments[i];
   }
   return total;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var i = 0;
   array.forEach(element => {
      if(element > 18){
         i = i +1;
      };
   });
   return i; 
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var DiasLaborales = [2,3,4,5,6];
   var incluyedia = DiasLaborales.includes(numeroDeDia);
   if(incluyedia) return 'Es dia laboral';
   else return 'Es fin de semana';
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var str = num.toString();
   var numeroSeparado = str.split('');
   if(numeroSeparado[0] === '9') return true;
   else return false;
// tambien funciona con if(num.charAt(0) === "9")
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   if (array.length <= 1) return true;
   for (var i=0; i < array.length-1; i++){
      if(array[i] != array[i+1]) return false;
   }
   return true;
}
//ok
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesAno = [];
   for(var i= 0; i<array.length; i++) {
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        mesesAno.push(array[i]);
      }
    }
    if(mesesAno.length < 3) {
      return "No se encontraron los meses pedidos";
    }
    else return mesesAno;
 
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [];
   var numero = 1;
   for (var i = 0; i < 61; i++){
      numero = i * 6;
      array.push(numero);
   };
   return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArray = [];
   for (var i = 0; i <= 200; i++){
      if (array[i] > 100){
         nuevoArray.push(array[i]); 
      };
   };
   return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numeros = [];
   var suma = num;
   for(var i=0; i < 10; i++ ){
      suma = suma + 2;
      if (suma === i) break;
         else {numeros.push(suma);}
   }
   if ( i < 10) {return 'Se interrumpió la ejecución';}
   else {return numeros;}
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var numeros = [];
   var suma = num;
   for (var i = 0; i < 10; i++){
      if (i === 5) continue;
      else {
         suma = suma + 2;
         numeros.push(suma);
      }
   }
   return numeros;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
