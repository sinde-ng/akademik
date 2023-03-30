const { response_error, response_success } = require('./../config/Responses')
const table_name = 'tb_mahasiswa'

const home = (res, port) => {
    res.send({
        main_endpoint: `http://localhost:${port}/mahasiswa`,
        message: `Masuk ke main_endpoint untuk melihat data mahasiswa`
    })
}

const getMhs = (db, res) => {
    db.query(`SELECT * FROM ${table_name}`, (error, result) => {
        if (!error) {
            res.send(result)
        } else {
            res.send(response_error(error.code, error.sqlMessage))
        }
    })
}

const addMhs = (db, req, res) => {
    const { nim, nama, prodi } = req.body
    db.query(`INSERT INTO ${table_name} VALUES ('${nim}', '${nama}', '${prodi}')`, (error, result) => {
        if (!error) {
            res.send(response_success("Data berhasil ditambahkan", nim, nama, prodi))
        } else {
            res.send(response_error(error.code, error.sqlMessage))
        }
    })
}

const editMhs = (db, req, res) => {
    const { nim, nama, prodi } = req.body
    db.query(`UPDATE ${table_name} SET nama='${nama}', prodi='${prodi}' WHERE nim='${nim}'`, (error, result) => {
        if (!error) {
            res.send(response_success("Data berhasil diubah", nim, nama, prodi))
        } else {
            res.send(response_error(error.code, error.sqlMessage))
        }
    })
}

const deleteMhs = (db, req, res) => {
    const { nim } = req.body
    db.query(`DELETE FROM ${table_name} WHERE nim='${nim}'`, (error, result) => {
        if (!error) {
            res.send(response_success("Data berhasil dihapus", nim))
        } else {
            res.send(response_error(error.code, error.sqlMessage))
        }
    })
}

module.exports = {home, getMhs, addMhs, editMhs, deleteMhs}