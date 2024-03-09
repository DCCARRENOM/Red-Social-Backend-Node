import store from "../../../store/dummy.js";
import controller from './controller.js'

export default controller(store); //de este modo tengo una funcion a la que le inyecto el store, por lo que ya no debe ir dentro del propio archivo
