class usuario{
    constructor(Usuario, edad, direccion, fechaNacimiento, contra){
        this.Usuario = Usuario;
        this.edad = edad;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.contra = contra;
    }
}

const usuarioNuevo = new usuario("UnNuevoUsuario", 23, "calle de mentira", "14/03/1999", "unacontraseñamuysegura")
console.log(usuarioNuevo);