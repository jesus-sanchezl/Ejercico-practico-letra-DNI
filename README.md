# Ejercicio práctico de JavaScript: "Letra DNI"

Este es un simple validador de números de identificación (DNI) españoles. Verifica si un número de DNI es válido utilizando la letra correspondiente.


## Algoritmo de validación

El DNI utiliza la congruencia módulo 23, es decir, se obtiene el dígito de control, la letra, a través del resto de dividir el número completo del DNI entre 23. En función de cual sea ese resto, se le asigna una letra específica de acuerdo a la siguiente tabla de equivalencias:

| Resto | Letra |
|-------|-------|
|   0   |   T   |
|   1   |   R   |
|   2   |   W   |
|   3   |   A   |
|   4   |   G   |
|   5   |   M   |
|   6   |   Y   |
|   7   |   F   |
|   8   |   P   |
|   9   |   D   |
|   10  |   X   |
|   11  |   B   |
|   12  |   N   |
|   13  |   J   |
|   14  |   Z   |
|   15  |   S   |
|   16  |   Q   |
|   17  |   V   |
|   18  |   H   |
|   19  |   L   |
|   20  |   C   |
|   21  |   K   |
|   22  |   E   |

Por ejemplo, si el número del DNI es 12345678, al dividirlo entre 23, obtenemos un resto de 14. Entonces, la letra correspondiente en el array sería la letra "Z". Por lo tanto, la letra de validación del DNI completo sería "12345678-Z".


## Descripción del Ejercicio

El código utiliza un array predefinido con la tabla de equivalencia de letras que corresponden a los números de DNI. Luego, verifica si la letra del DNI proporcionada coincide con la letra esperada según el algoritmo de validación. Si hay algún error en el formato del DNI o si la letra es incorrecta, se lanzará un error.

## Uso

1. Desarga o clona el repositorio.
2. Abre  el archivo en tu editor de código.
3. Ejecuta el archivo en un navegador web que permita la ejecuión de JavaScript
4. Observa la salida en la consola.
