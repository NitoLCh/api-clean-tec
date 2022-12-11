import sql from 'mssql'

const dbSettings = {
    user: 'devteclag_SQLLogin_1',
    password: '7dlwfomccu',  
    server: 'CleanTec.mssql.somee.com',  
    database: 'CleanTec',  
    options: {
        trustServerCertificate: true,
        encrypt: true,
        }
    };  

//const dbSettings = "Data Source=CleanTec.mssql.somee.com;Initial Catalog=CleanTec;User ID=devteclag_SQLLogin_1;Password=7dlwfomccu"

/*export const getConnection = async () => {
    const connection = new Connection(dbSettings);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
    });
    try {
        const pool = await connection.connect();
        return pool;
    } catch (error) {
        console.log(error);
    }
}*/

export const getConnection = async() => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.log(error);
    }
}

export {sql};