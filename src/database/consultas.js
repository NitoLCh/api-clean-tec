export const consultas = {
    getPersonal: "SELECT * FROM Personal",
    setPersonal: "INSERT INTO Personal (NombreP, ApellidoP, NombreUsuario, Contraseña, Rol, Telefono) VALUES (@nombre, @apellido, @usuario, @rol, @contrseña, @telefono)",
    getArea: "SELECT Area.Nombre, Area.DS, Area.LV, Area.LM, Area.LG, Area.Revision, Area.Notas, Bitacora.Dia, Personal.NombreP FROM Area INNER JOIN dbo.Bitacora ON Area.Bitacora = Bitacora.Id_Bitacora INNER JOIN dbo.Infraestructura ON Bitacora.Edificio = Infraestructura.Id_Edificio INNER JOIN dbo.Personal ON Area.Verificador = Personal.Id_Personal;"
}