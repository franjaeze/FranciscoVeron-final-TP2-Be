
import { Server_DAO } from './server_DAO.js';

export class PalabrasRepository {


    constructor() {
        this.palabras = new Server_DAO();
    }


    ///// esta parte es solo para emular una conexion a Bd ////                             

    //////////////////////////////////////////////
    connect() {
        this.palabras.connect('palabras')
    }


    disconnect() {
        this.palabras.disconnect('palabras')
    }
    ////////////////////////////////////////////////


    list() {
        return this.palabras.getAll();
    }

    find(palabra = null) {
        return this.palabras.search(palabra)
    }




    save(palabra) {
        return this.palabras.save(palabra)
    }


    delete(palabra) {
        return this.palabras.remove(palabra)
    }

 


}