class UserRegister {
    _id_hogar: number;
    _nombre: string;
    _email: string;
    _password: string;
    constructor(
        id_hogar:number, nombre: string, email:string, password:string
    ){
        this._id_hogar = id_hogar;
        this._nombre = nombre;
        this._email = email;
        this._password = password
    }

    //getters
    get nombre(): string {
        return this._nombre
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

export default UserRegister;