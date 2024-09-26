class BadReport{
    _id_hogar: number;
    _comentario_reporte: string;
    constructor(id_hogar:number, comentario_reporte: string){
        this._id_hogar = id_hogar;
        this._comentario_reporte = comentario_reporte
    }

    //getters 
    get id_hogar(): number{
        return this._id_hogar
    }

    get comentario_reporte(): string{
        return this.comentario_reporte
    }

    //setters
    set id_hogar(id_hogar:number){
        this._id_hogar = id_hogar
    }

    set comentario_reporte(comentario_reporte: string){
        this._comentario_reporte = comentario_reporte
    }
}

export default BadReport;