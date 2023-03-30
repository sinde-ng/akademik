const response = require('./../config/Responses')
const table_name = 'tb_mahasiswa'

const home = (res, port) => {
    res.send({
        main_endpoint: `http://localhost:${port}/mahasiswa`,
        message: `Masuk ke main_endpoint untuk melihat data mahasiswa`
    })
}

const getMhs = (db, res) => {
    db.query(`SELECT * FROM ${table_name}`, (error, result) => {
        if (error == null) {
            res.send(result)
        } else {
            res.send(response(error.code, error.sqlMessage))
        }
    })
}

const addMhs = (db, req, res) => {
    const { nim, nama, prodi } = req.body
    db.query(`INSERT INTO ${table_name} VALUES ('${nim}', '${nama}', '${prodi}')`, (error, result) => {
        if (error == null) {
            res.send({
                nim: nim,
                nama: nama,
                prodi: prodi
            })
        } else {
            res.send(response(error.code, error.sqlMessage))
        }
    })
}

module.exports = {home, getMhs, addMhs}