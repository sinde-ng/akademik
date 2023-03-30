const Response = (err_code, err_msg) => {
    return {
        status: err_code,
        error_message: err_msg
    }
}

module.exports = Response