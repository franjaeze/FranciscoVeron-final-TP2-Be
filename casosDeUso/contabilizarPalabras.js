import { PalabrasRepository} from '../repository/palabrasRepository.js'

export class contabilizarPalabras{
    constructor(){
        this.palabrasRepository = new PalabrasRepository()
    }

     run(){
        try{
         this.palabrasRepository.connect()
        const result = this.palabrasRepository.list()
       
        function contarPalabrasRepetidas(arr) {
            const contador = {};
            arr.forEach(objeto => {
              const palabra = objeto.palabra;
              if (contador.hasOwnProperty(palabra)) {
                contador[palabra]++;
              } else {
                contador[palabra] = 1;
              }
            });
            
            return contador;
          }
     
        return contarPalabrasRepetidas(result)
        
    } catch (error) {    
        console.error('Error al mostrar palabras:', error);
        return null;

    } finally{
        this.palabrasRepository.disconnect()
    }

}


}