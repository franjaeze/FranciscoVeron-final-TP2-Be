import { PalabrasRepository} from '../repository/palabrasRepository.js'

export class AnotarPalabras{
    constructor(palabra) {
        this.palabra = palabra;
        this.palabrasRepository = new PalabrasRepository()
    }
     run(){
        try{
         this.palabrasRepository.connect()
         let result =   this.palabrasRepository.save(this.palabra)

        return result
    } catch (error) {
        console.error('Error al anotar palabra:', error);
        return null;
      } finally {
        this.palabrasRepository.disconnect()
      }
}


}