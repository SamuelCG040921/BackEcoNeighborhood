class Complaint{
    _id_usuario: number;
    _comentario: string;
    constructor(
        id_usuario:number,
        comentario:string
    ){
        this._id_usuario = id_usuario;
        this._comentario = comentario;
    }

    //getters
    get id_usuario(): number{
        return this._id_usuario
    }

    get comentario(): string{
        return this._comentario
    }

    //SETTERS
    set id_usuario(id_usuario: number){
        this._id_usuario = id_usuario;
    }

    set comentario(comentario:string){
        this._comentario = comentario
    }
}

export default Complaint;