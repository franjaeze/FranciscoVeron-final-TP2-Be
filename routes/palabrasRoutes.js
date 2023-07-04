import express from 'express'
import PalabrasController from '../controllers/palabrasController.js';

const router = express.Router();
const palabrasController = new PalabrasController;


router.get('/contarpalabras', palabrasController.contarPalabras)

router.get('/', palabrasController.obtenerPalabras)
 
router.get('/:id', palabrasController.buscarPalabra)

router.post('/', palabrasController.crearPalabra)

/* router.put('/:id', palabrasController.updateReserva);  */

router.delete('/:palabra', palabrasController.borrarPalabra);

 
export default router;