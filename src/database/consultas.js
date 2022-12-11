export const consultas = {
    getPersonal : "SELECT * FROM Personal",
    setPersonal : "INSERT INTO Personal (NombreP, ApellidoP, NombreUsuario, Contraseña, Rol, Telefono) VALUES (@nombre, @apellido, @usuario, @rol, @contrseña, @telefono)", 
}