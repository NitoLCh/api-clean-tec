import {getConnection, sql, consultas} from '../database';

export const getArea = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(consultas.getArea);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};