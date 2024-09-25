class WasteReport {
    _id_usuario: number;
    _tipo_residuo: string;
    _tipo_bolsa: string;
    _puntaje_reporte: number;
    constructor(
       id_usuario: number,
        tipo_residuo: string,
        tipo_bolsa: string,
        puntaje_reporte: number
    ){
        this._id_usuario = id_usuario;
        this._tipo_residuo = tipo_residuo;
        this._tipo_bolsa = tipo_bolsa;
        this._puntaje_reporte = puntaje_reporte
    }

    //Getters
    get id_usuario(): number{
        return this._id_usuario
    }

    get tipo_residuo(): string{
        return this._tipo_residuo
    }

    get tipo_bolsa(): string{
        return this._tipo_bolsa
    }

    get puntaje_reporte(): number{
        return this._puntaje_reporte
    }

    //setters
    set id_usuario(id_usuario:number){
        this._id_usuario = id_usuario
    }

    set tipo_residuo(tipo_residuo: string){
        this._tipo_residuo = tipo_residuo;
    }

    set tipo_bolsa(tipo_bolsa:string){
        this._tipo_bolsa = tipo_bolsa;
    }

    set puntaje_reporte(puntaje_reporte: number){
        this._puntaje_reporte = puntaje_reporte
    }
}

export default WasteReport;