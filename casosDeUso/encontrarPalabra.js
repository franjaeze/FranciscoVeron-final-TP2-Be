import { PalabrasRepository } from '../repository/palabrasRepository.js'

export class EncontrarPalabra {
    constructor(palabra) {
        this.palabra = palabra;
        this.palabrasRepository = new PalabrasRepository()
    }

    run() {
        try {
            this.palabrasRepository.connect()
            const result = this.palabrasRepository.list()
            const palabraEncontrada =   this.palabrasRepository.find(this.palabra)
            return palabraEncontrada;

            return result
        } catch (error) {
            console.error('Error al buscar el encontrar palabra', error);
            return null;
        } finally {
            this.palabrasRepository.disconnect()
        }
    }


}