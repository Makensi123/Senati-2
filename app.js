const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    let opcion;

    function preguntar() {
        rl.question(
            "Menú:\n" +
            "1. Sumar arreglo\n" +
            "2. Ordenar números de menor a mayor\n" +
            "3. Contar números pares\n" +
            "4. Ordenar un array sin .sort()\n" +
            "5. Buscar un elemento\n" +
            "6. Revertir un array\n" +
            "7. Convertir nombres a mayúsculas\n" +
            "8. Sumar solo números positivos\n" +
            "9. Buscar primer múltiplo de 5\n" +
            "10. Tabla de multiplicar\n" +
            "11. Generar secuencia de Fibonacci\n" +
            "12. Adivinar un número\n" +
            "13. Contar regresivamente\n" +
            "14. Validar entrada de usuario\n" +
            "15. Mostrar menú\n" +
            "16. Sumar números impares entre 1 y 50\n" +
            "17. Contador de intentos de login\n" +
            "18. Sumar hasta que el usuario ingrese 0\n" +
            "19. Fibonacci hasta que un número supere 100\n" +
            "20. Imprimir múltiplos de 3 hasta 50\n" +
            "21. Salir\n" +
            "Selecciona una opción: ", (opcion) => {
                switch(opcion) {
                    case "1":
                        function sumarArreglo(arr) {
                            let suma = 0;
                            for (let i = 0; i < arr.length; i++) {
                                suma += arr[i];
                            }
                            console.log(`La suma de los elementos del arreglo es: ${suma}`);
                            preguntar();
                        }
                        const arreglo = [10, 2, 3, 4, 8, 9];
                        sumarArreglo(arreglo);
                        break;
                    case "2":
                        const numeros = [3, 5, 6, 9, 1];
                        console.log(`El arreglo ordenado es: ${numeros.sort((a, b) => a - b)}`);
                        preguntar();
                        break;
                    case "3":
                        function N_Pares(pares) {
                            let contar = 0;
                            for (let i = 0; i < pares.length; i++) {
                                if (pares[i] % 2 === 0) {
                                    contar++;
                                }
                            }
                            console.log(`Cantidad de números pares: ${contar}`);
                            preguntar();
                        }
                        const array = [2, 4, 5, 6];
                        N_Pares(array);
                        break;
                    case "4":
                        function ordenarArray(arr) {
                            for (let i = 0; i < arr.length; i++) {
                                for (let j = i + 1; j < arr.length; j++) {
                                    if (arr[i] > arr[j]) {
                                        let temp = arr[i];
                                        arr[i] = arr[j];
                                        arr[j] = temp;
                                    }
                                }
                            }
                            return arr;
                        }
                        const arreglo2 = [3, 5, 6, 9, 1];
                        console.log(`El arreglo ordenado sin usar .sort(): ${ordenarArray(arreglo2)}`);
                        preguntar();
                        break;
                    case "5":
                        function buscarElemento(arr, nombre) {
                            return arr.indexOf(nombre);
                        }
                        const arrBuscar = ["manzana", "banana", "cereza"];
                        console.log(`El índice del elemento es: ${buscarElemento(arrBuscar, "banana")}`);
                        preguntar();
                        break;
                    case "6":
                        function revertirArray(arr) {
                            let nuevoArray = [];
                            for (let i = arr.length - 1; i >= 0; i--) {
                                nuevoArray.push(arr[i]);
                            }
                            return nuevoArray;
                        }
                        const arrRevertir = [1, 2, 3, 4, 5];
                        console.log(`El arreglo revertido es: ${revertirArray(arrRevertir)}`);
                        preguntar();
                        break;
                    case "7":
                        function convertirAMayusculas(arr) {
                            return arr.map(nombre => nombre.toUpperCase());
                        }
                        const nombres = ["juan", "pedro", "maria"];
                        console.log(`Nombres en mayúsculas: ${convertirAMayusculas(nombres)}`);
                        preguntar();
                        break;
                    case "8":
                        function sumarPositivos(arr) {
                            return arr.filter(num => num > 0).reduce((acum, num) => acum + num, 0);
                        }
                        const arrPositivos = [-10, 2, 3, 5, -1];
                        console.log(`La suma de números positivos es: ${sumarPositivos(arrPositivos)}`);
                        preguntar();
                        break;
                    case "9":
                        function primerMultiploDe5(arr) {
                            return arr.find(num => num % 5 === 0);
                        }
                        const arrMultiplo5 = [3, 10, 7, 15];
                        console.log(`El primer múltiplo de 5 es: ${primerMultiploDe5(arrMultiplo5)}`);
                        preguntar();
                        break;
                    case "10":
                        function tablaDeMultiplicar() {
                            rl.question("Ingresa un número: ", (num) => {
                                for (let i = 1; i <= 10; i++) {
                                    console.log(num * i);
                                }
                                preguntar();
                            });
                        }
                        tablaDeMultiplicar();
                        break;
                    case "11":
                        function fibonacci() {
                            let fib = [0, 1];
                            for (let i = 2; i < 10; i++) {
                                fib.push(fib[i - 1] + fib[i - 2]);
                            }
                            console.log(fib);
                            preguntar();
                        }
                        fibonacci();
                        break;
                    case "12":
                        function adivinarNumero() {
                            let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
                            let intento;
                            function intentar() {
                                rl.question("Adivina un número entre 1 y 10: ", (input) => {
                                    intento = parseInt(input);
                                    if (intento !== numeroAleatorio) {
                                        console.log("Intenta de nuevo.");
                                        intentar();
                                    } else {
                                        console.log("¡Correcto! El número era " + numeroAleatorio);
                                        preguntar();
                                    }
                                });
                            }
                            intentar();
                        }
                        adivinarNumero();
                        break;
                    case "13":
                        function cuentaRegresiva() {
                            rl.question("Ingresa un número para la cuenta regresiva: ", (input) => {
                                let numero = parseInt(input);
                                while (numero >= 0) {
                                    console.log(numero);
                                    numero--;
                                }
                                preguntar();
                            });
                        }
                        cuentaRegresiva();
                        break;
                    case "14":
                        function validarEntrada() {
                            rl.question("Ingresa un número mayor que 0: ", (input) => {
                                let numero = parseInt(input);
                                while (numero <= 0 || isNaN(numero)) {
                                    rl.question("Por favor, ingresa un número válido: ", (input) => {
                                        numero = parseInt(input);
                                    });
                                }
                                console.log("Número válido: " + numero);
                                preguntar();
                            });
                        }
                        validarEntrada();
                        break;
                    case "15":
                        function mostrarMenu() {
                            rl.question("¿Quieres ver el menú otra vez? (sí/no): ", (respuesta) => {
                                if (respuesta.toLowerCase() === "sí") {
                                    preguntar();
                                } else {
                                    rl.close();
                                }
                            });
                        }
                        mostrarMenu();
                        break;
                    case "16":
                        function sumarImpares() {
                            let suma = 0;
                            let i = 1;
                            while (i <= 50) {
                                if (i % 2 !== 0) {
                                    suma += i;
                                }
                                if (suma > 500) {
                                    break;
                                }
                                i++;
                            }
                            console.log("Suma de los impares:", suma);
                            preguntar();
                        }
                        sumarImpares();
                        break;
                    case "17":
                        function contadorIntentos() {
                            let intentos = 0;
                            let usuario = "admin";
                            let contrasena = "1234";
                            rl.question("Ingresa el usuario: ", (userInput) => {
                                rl.question("Ingresa la contraseña: ", (passInput) => {
                                    while (intentos < 3) {
                                        if (userInput === usuario && passInput === contrasena) {
                                            console.log("Acceso concedido");
                                            preguntar();
                                            return;
                                        } else {
                                            console.log("Usuario o contraseña incorrectos.");
                                            intentos++;
                                            if (intentos < 3) {
                                                rl.question("Ingresa el usuario: ", (userInput) => {
                                                    rl.question("Ingresa la contraseña: ", (passInput) => {
                                                        // Redirigir el ciclo al siguiente intento
                                                    });
                                                });
                                            }
                                        }
                                    }
                                    if (intentos === 3) {
                                        console.log("Has superado el número máximo de intentos.");
                                        preguntar();
                                    }
                                });
                            });
                        }
                        contadorIntentos();
                        break;
                    case "18":
                        function sumarHastaCero() {
                            let suma = 0;
                            rl.question("Ingresa un número a sumar (0 para terminar): ", (input) => {
                                let num = parseInt(input);
                                while (num !== 0) {
                                    suma += num;
                                    rl.question("Ingresa un número a sumar (0 para terminar): ", (input) => {
                                        num = parseInt(input);
                                    });
                                }
                                console.log("La suma total es: " + suma);
                                preguntar();
                            });
                        }
                        sumarHastaCero();
                        break;
                    case "19":
                        function fibonacciHastaCien() {
                            let a = 0, b = 1;
                            while (b <= 100) {
                                console.log(b);
                                [a, b] = [b, a + b];
                            }
                            preguntar();
                        }
                        fibonacciHastaCien();
                        break;
                    case "20":
                        function multiplosDeTres() {
                            let i = 3;
                            while (i < 50) {
                                console.log(i);
                                i += 3;
                            }
                            preguntar();
                        }
                        multiplosDeTres();
                        break;
                    case "21":
                        console.log("¡Hasta luego!");
                        rl.close();
                        break;
                    default:
                        console.log("Opción no válida.");
                        preguntar();
                }
            });
    }

    preguntar();
}

menu();