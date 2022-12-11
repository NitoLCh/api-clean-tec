import {getConnection, sql, consultas} from '../database'
import {body, validationResult} from 'express-validator'

export const getPersonal = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(consultas.getPersonal);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewPersonal = async (req, res) => {
    body('NombreP'), body("ApellidoP").default(""), body("NombreUsuario").isLength({min:7}), body("Rol").isNumeric(),
    body("Contraseña").isLength({min:9}), body("Telefono").isNumeric()

    let {NombreP, AppellidoP, NombreUsuario, Rol, Contraseña ,Telefono} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('nombre', sql.VarChar, NombreP)
        .input('apellido', sql.VarChar, AppellidoP)
        .input('usuario', sql.VarChar, NombreUsuario)
        .input('rol', sql.Int , NombreUsuario)
        .input('contraseña', sql.VarChar , NombreUsuario)
        .input('telefono', sql.VarChar , NombreUsuario)
        .query(consultas.setPersonal);
    
        res.json({NombreP, AppellidoP, NombreUsuario, Rol, Contraseña, Telefono});
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }


};