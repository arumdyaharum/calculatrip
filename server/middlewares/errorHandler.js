const errorHandler = (err, req, res, next) => {
    let status = 500
    let message = 'Internal Server Error'

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = err.errors[0].message
    } else if (err.name === "Invalid Username/Password") {
        status = 401
        message = "Invalid email/username/password"
    } else if (err.name === "JsonWebTokenError") {
        status = 401
        message = "Invalid Token"
    } else if (err.name === "Email or Username is required") {
        status = 400
        message = "Email or Username is required"
    } else if (err.name === "Password is required") {
        status = 400
        message = "Password is required"
    } else if (err.name === "Forbiden to Access") {
        status = 401
        message = "Forbiden to Access"
    } else if (err.name === "User not found") {
        status = 404
        message = "User not found"
    } else if (err.name === "From currency is required") {
        status = 400
        message = "From currency is required"
    } else if (err.name === "To currency is required") {
        status = 400
        message = "To currency is required"
    } else if (err.name === "Amount currency is required") {
        status = 400
        message = "Amount currency is required"
    } else if (err.name === "TripNotFound") {
        status = 404
        message = "Trip not found"
    } else if (err.name === "SavingNotFound") {
        status = 404
        message = "Saving not found"
    } else if (err.name === "ExpenseNotFound") {
        status = 404
        message = "Expense not found"
    }

    res.status(status).json({
        message
    })
}

module.exports = errorHandler