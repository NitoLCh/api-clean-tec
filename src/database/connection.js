import sql from 'mssql';

const dbsettings = 'workstation id=CleanTec.mssql.somee.com;packet size=4096;user id=devteclag_SQLLogin_1;pwd=7dlwfomccu;data source=CleanTec.mssql.somee.com;persist security info=False;initial catalog=CleanTec';


async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(dbsettings)
    } catch (err) {
        // ... error checks
    }
}
