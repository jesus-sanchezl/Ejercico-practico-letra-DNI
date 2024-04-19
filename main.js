"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function validateDNI(dni) {
  try {
    if (typeof dni !== "string" || dni.length !== 10) {
      throw new Error("El DNI debe ser una string de 10 caracteres");
    }

    const [dniNumbers, dniLetter] = dni.split("-");

    if (dniNumbers.length !== 8 || isNaN(dniNumbers)) {
      throw new Error("Antes del guión debe haber ocho números y no letras");
    }

    if (!isNaN(dniLetter)) {
      throw new Error(
        "Después del guión debe haber una sola letra y no un número"
      );
    }

    const correctLetter = letras[dniNumbers % 23];

    if (dniLetter.toUpperCase() !== correctLetter) {
      throw new Error("La letra del DNI es incorrecta");
    }

    console.log("¡DNI válido! 😄");
  } catch (error) {
    console.error(`Se ha producido un error: ${error.message}`);
  }
}

validateDNI("77264734-Y");

