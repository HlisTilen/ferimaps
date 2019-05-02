import axios from './axios';
import {PROSTORI_ENDPOINT} from './service_endpoint';
import Prostor from './prostor_interface';

export default class Prostori_service {
    static getProstor(id: string = ""):Promise<any> {
        return axios.get(PROSTORI_ENDPOINT+id);
    }

    static deleteProstor(id: string):Promise<any> {
        return axios.delete(PROSTORI_ENDPOINT+id);
    }

    static postProstor(prostor: Prostor):Promise<any> {
        return axios.post(PROSTORI_ENDPOINT, prostor);
    }

    static getProstori():Promise<any> {
        return axios.get(PROSTORI_ENDPOINT);
    }
}
