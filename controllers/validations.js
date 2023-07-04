export function validationPalabras(palabra) {
    if (typeof palabra !== 'string') {
      throw new Error('La palabra debe ser una cadena de texto');
    }
  
    if (palabra.trim() === '') {
      throw new Error('La palabra no puede estar vacía');
    }
  
    if (/\s/.test(palabra)) {
      throw new Error('La palabra no puede contener espacios');
    }
  
    if (!/^[a-zA-Z]+$/.test(palabra)) {
      throw new Error('La palabra solo puede contener caracteres alfabéticos');
    }
  
    // Si pasa todas las validaciones, la palabra es válida
  }