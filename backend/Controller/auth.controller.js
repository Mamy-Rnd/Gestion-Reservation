const authService = require("../Services/auth.service");

const Register = async (req, res, next) => {
    const { nom, email, telephone, password, role } = req.body;

    try {
        const resultat = await authService.Register(nom, email, telephone, password, role);

        return res.status(201).json({
            success: resultat.success,
            message: resultat.message
        })
    } catch (error) {
        next(error);
    }
}

const Login = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        const resultat = await authService.Login(email, password);

        return res.status(200).json({
            success: resultat.success,
            message: resultat.message,
            token: resultat.token
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { Register, Login };