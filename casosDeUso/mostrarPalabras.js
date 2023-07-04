import { PalabrasRepository} from '../repository/palabrasRepository.js'

export class MostrarPalabras{
    constructor(){
        this.palabrasRepository = new PalabrasRepository()
    }

     run(){
        try{
         this.palabrasRepository.connect()
        const result = this.palabrasRepository.list()
        const todasPalabras = result.map(element =>  element.palabra );
        const frase = todasPalabras.join(' ');
     
        return frase
    } catch (error) {    
        console.error('Error al mostrar palabras:', error);
        return null;

    } finally{
        this.palabrasRepository.disconnect()
    }

}


}