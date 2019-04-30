import axios from './axios';
import {ZAPOSLENI_ENDPOINT} from './service_endpoint';
import Zaposlen from './zaposlen_interface';

export default class Zaposleni_service {
    static getZaposlen(id: string = ""):Promise<any> {
        return axios.get(ZAPOSLENI_ENDPOINT+id);
    }

    static deleteZaposlen(id: string):Promise<any> {
        return axios.delete(ZAPOSLENI_ENDPOINT+id);
    }

    static postZaposlen(zaposlen: Zaposlen):Promise<any> {
        return axios.post(ZAPOSLENI_ENDPOINT, zaposlen);
    }

    static getZaposleni():Promise<any> {
        return axios.get(ZAPOSLENI_ENDPOINT);
    }
}
