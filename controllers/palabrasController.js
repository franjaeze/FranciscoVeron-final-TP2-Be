import { AnotarPalabras } from "../casosDeUso/anotarPalabras.js";
import { DeletePalabras } from "../casosDeUso/deletePalabra.js";
import { EncontrarPalabra } from "../casosDeUso/encontrarPalabra.js";
import { MostrarPalabras } from "../casosDeUso/mostrarPalabras.js";
import { contabilizarPalabras } from "../casosDeUso/contabilizarPalabras.js";
import { validationPalabras } from "./validations.js";


export default class PalabrasController {
    constructor() {
        this.header = { 'content-type': 'application/json' }
        this.body = {}
    }


    contarPalabras = async (req, res) => {
        try {


            const palabrasContadas = new contabilizarPalabras()
            const resultado = palabrasContadas.run()
            res.status(200).json(resultado);
        } catch (error) {
            console.log(error);
            res.status(500).json({ mensaje: 'Error al obtener las palabras' });
        }
    };

    obtenerPalabras = async (req, res) => {
        try {


            const traerPalabras = new MostrarPalabras()
            const resultado = traerPalabras.run()
            res.status(200).json(resultado);
        } catch (error) {
            console.log(error);
            res.status(500).json({ mensaje: 'Error al obtener las palabras' });
        }
    };

    buscarPalabra = async (req, res) => {
        try {
            const buscar = new EncontrarPalabra(req.params.id)
            const result = buscar.run()
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ mensaje: 'Error al obtener las palabras' });
        }
    };

    crearPalabra = async (req, res) => {
        const body = req.body
        body.palabra = body.palabra.toLowerCase();
        try {
            validationPalabras(body.palabra)
            const crear = new AnotarPalabras(body)
            const result = crear.run()


            res.status(200).json(body.palabra);
        } catch (error) {

            res.status(422).json({ mensaje: 'Palabra ' + body.palabra + ' no valida, error : ' + error });
        }
    };

    borrarPalabra = async (req, res) => {
        let param = req.params.palabra
        console.log(param)
        param = param.toLowerCase();

        try {
            validationPalabras(param)

            try {

                const eliminarPalabra = new DeletePalabras(param)
                const result = eliminarPalabra.run()
                res.status(200).json(param);
            } catch (error) {
                
                res.status(404).json({ mensaje: 'Palabra no encontrada ' + param });
            }
        } catch (error) {
 
            res.status(422).json({ mensaje: 'Palabra ' + param + ' no valida, error : ' + error });
        }
    };

 


}