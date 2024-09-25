class Hogar{
    _id_hogar: number;
    _nombre_hogar: string;
    _puntuacion_hogar: number;
    _cantidad_bolsas: number;
    constructor(
        id_hogar:number,
        nombre_hogar:string,
        puntuacion_hogar:number,
        cantidad_bolsas:number
    ){
        this._id_hogar = id_hogar;
        this._nombre_hogar = nombre_hogar;
        this._puntuacion_hogar = puntuacion_hogar;
        this._cantidad_bolsas = cantidad_bolsas;
    }

    //getters
    get id_hogar() : number{
        return this._id_hogar
    }

    get nombre_hogar(): string{
        return this._nombre_hogar
    }

    get puntuacion_hogar(): number{
        return this._puntuacion_hogar
    }
    get cantidad_bolsas(): number{
        return this._cantidad_bolsas
    }

    //setters

    set id_hogar(id_hogar: number){
        this._id_hogar = id_hogar
    }

    set nombre_hogar(nombre_hogar: string){
        this.nombre_hogar = nombre_hogar
    }

    set puntuacion_hogar(puntuacion_hogar:number){
        this._puntuacion_hogar = puntuacion_hogar
    }

    set cantidad_bolsas(cantidad_bolsas:number){
        this._cantidad_bolsas = cantidad_bolsas
    }
}

export default Hogar;