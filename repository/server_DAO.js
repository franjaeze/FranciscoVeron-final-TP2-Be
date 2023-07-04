import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./localStorage');

export class Server_DAO {
  constructor() {
    if (!Server_DAO.instance) {
      this.dbName = 'palabras';
      this.collection = null;
      this.loadFromLocalStorage(); // Cargar datos almacenados en el localStorage
      Server_DAO.instance = this;
    }

    return Server_DAO.instance;
  }
///// esta parte es solo para emular una conexion a Bd ////
  connect(collection) {
    try {
      console.log("Connecting to server database");
      this.collection = collection;
      if (collection) {
        console.log("Connection successful - Server_DAO");
      } else {
        throw new Error('Unsuccessful attempt to connect to Server DAO');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Could not connect to Database');
    }
  }

  disconnect() {
    try {
      console.log("Disconnected from BD!!!!");
    } catch (error) {
      console.log("Error disconnecting");
    }
  }


  getAll() {
    try {
        const document =  this.db
        return document;
    } catch (error) {
       
        throw new Error('Could not get the collections element');
    }
    }

  search(palabra = null) {
    if (!palabra) {
        return this.db;
    }
    try {
  
        const result =   this.db.filter(e => e.id == palabra)
        return result;
    } catch (error) {
         
        throw new Error('Could not search the item');
    }
}

  save(palabra) {
    try {
      this.db.push(palabra);
      console.log('Save correctly');
      this.saveToLocalStorage(); // Guardar datos en el localStorage después de guardar un elemento
      return true
    } catch (error) {
     
      throw new Error('Error saving the element');
    }
  }

  remove(palabra = null) {
    try {

      function eliminarRepetidos(array, palabra) {
        const palabrasSet = new Set(palabra);
        const resultado = array.filter(objeto => !palabrasSet.has(objeto.palabra));
        return resultado;
      }
      const tamanio = this.db.length;
      const palabrasEliminar = [palabra]; // Convertir la palabra en un array para utilizar la función eliminarRepetidos
      this.db = eliminarRepetidos(this.db, palabrasEliminar);
       this.saveToLocalStorage();
       if(tamanio== this.db.length){
        return false
       } else {
        return true
       }
      
    } catch (error) {
      console.log(error);
      throw new Error('Could not remove the element');
    }
  }


  

  saveToLocalStorage() {
    localStorage.setItem(this.dbName, JSON.stringify(this.db));
  }

  loadFromLocalStorage() {
    const storedData = localStorage.getItem(this.dbName);
    this.db = storedData ? JSON.parse(storedData) : [];
  }
}