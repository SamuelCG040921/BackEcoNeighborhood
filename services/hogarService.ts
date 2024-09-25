import HogarRepository from '../repositorys/hogarRepository';
import Hogar from '../Dto/hogarDto';

class HogarService {
    static async getAllHogares(){
        try {
            const hogares = await HogarRepository.getAllHogares();
            return hogares
        } catch (error) {
            console.error('Error en el HogarService al obtener los hogares');
            throw error;
        }
    }
}

export default HogarService