class UserData {
    _id_hogar: number;
    _nombre: string;
    _puntuacion_hogar: number;
    _email: string;
    _password: string;
    constructor(
        id_hogar:number, nombre: string, puntuacion_hogar: number, email:string, password:string
    ){
        this._id_hogar = id_hogar;
        this._nombre = nombre;
        this._puntuacion_hogar = puntuacion_hogar;
        this._email = email;
        this._password = password
    }

    //getters
    get nombre(): string {
        return this._nombre
    }

    get puntuacion_hogar(): number{
        return this._puntuacion_hogar
    }

    get id_hogar(): number{
        return this._id_hogar
    }

    get email(): string {
        return this._email
    }

    get password(): string {
        return this._password
    }

    //setters
    set nombre(nombre:string){
        this._nombre = nombre
    }

    set puntuacion_hogar(puntuacion_hogar:number){
        this._puntuacion_hogar = puntuacion_hogar
    }

    set id_hogar(id_hogar: number){
        this._id_hogar = id_hogar
    }
    
    set email(email:string){
        this._email = email
    }

    set password(password: string){
        this._password = password
    }
}

export default UserData;