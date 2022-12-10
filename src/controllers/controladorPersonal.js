import {getConnection} from '../database/connection'

export const getPersonal = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Personal");

    res.json(result.recordset);
};

export const createNewPersonal = async (req, res) => {
    const pool = await getConnection();
}