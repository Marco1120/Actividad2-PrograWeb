/**
 * LIBRERÍA DE VALIDACIONES — utileria.js
 * Funciones puras, sin frameworks ni componentes visuales.
 */

/**
 * 1. Valida el formato de un correo electrónico.
 * @param {string} correo - Correo a evaluar.
 * @returns {boolean} true si el formato es correcto, false si no lo es.
 */
const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
};

/**
 * 2. Valida que el texto contenga solo letras (incluye vocales acentuadas y ñ).
 * @param {string} texto - Cadena a evaluar.
 * @returns {boolean} true si solo contiene letras permitidas.
 */
const soloLetras = (texto) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
};

/**
 * 3. Valida que un número no tenga más dígitos que maxLongitud.
 * @param {string|number} numero - Valor numérico a evaluar.
 * @param {number} maxLongitud - Cantidad máxima de dígitos permitidos.
 * @returns {boolean} true si el valor son solo dígitos y no excede maxLongitud.
 */
const validarLongitud = (numero, maxLongitud) => {
    const valor = String(numero).trim();
    const regex = /^\d+$/;
    return regex.test(valor) && valor.length > 0 && valor.length <= maxLongitud;
};

/**
 * 4. Calcula la edad a partir de una fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {number} Edad en años (entero).
 */
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
};

/**
 * 5. Valida si una persona es mayor de edad (18 años o más).
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {boolean} true si es mayor o igual a 18 años, false si no.
 */
const esMayorDeEdad = (fechaNacimiento) => {
    return calcularEdad(fechaNacimiento) >= 18;
};

/**
 * 6. Valida la seguridad de una contraseña.
 * Requiere: mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} true si cumple con los requisitos de seguridad.
 */
const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;
    return regex.test(password);
};

/**
 * FUNCIÓN LIBRE 1: Calcula cuántos días faltan para el próximo cumpleaños.
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {number} Días restantes (0 si el cumpleaños es hoy).
 */
const diasParaCumpleanos = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    const cumpleAnio = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

    if (cumpleAnio < new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) {
        cumpleAnio.setFullYear(hoy.getFullYear() + 1);
    }
    const unDia = 1000 * 60 * 60 * 24;
    return Math.round((cumpleAnio - new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) / unDia);
};

/**
 * FUNCIÓN LIBRE 2: Valida el formato de una CURP mexicana (18 caracteres).
 * @param {string} curp - CURP a evaluar.
 * @returns {boolean} true si el formato es válido.
 */
const validarCURP = (curp) => {
    const regex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    return regex.test(String(curp).trim().toUpperCase());
};

// Exportación para Node (pruebas) y para el navegador (variables globales)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        validarCorreo,
        soloLetras,
        validarLongitud,
        calcularEdad,
        esMayorDeEdad,
        validarPassword,
        diasParaCumpleanos,
        validarCURP
    };
}