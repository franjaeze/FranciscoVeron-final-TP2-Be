import { PalabrasRepository} from '../repository/palabrasRepository.js'

export class DeletePalabras{
    constructor(palabra) {
        this.palabra = palabra;
        this.palabrasRepository = new PalabrasRepository()
    }

    run() {
      
            this.palabrasRepository.connect()
            
            const palabraBorrada =   this.palabrasRepository.delete(this.palabra)
            
            this.palabrasRepository.disconnect()
            if (palabraBorrada == false){
                throw new Error ( 'palabra no encontrada')
            }

            return palabraBorrada;

         
        
           
       
    }


}