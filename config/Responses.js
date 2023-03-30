const response_error = (err_code, err_msg) => {
    return {
        status: err_code,
        error_message: err_msg
    }
}

const response_success = (msg, nim, nama, prodi) => {
    return [
        {
            status: "OK",
            message: msg
        },
        {
            nim: nim,
            nama: nama,
            prodi: prodi
        }
    ]
}

module.exports = {response_error, response_success}