const db = require("../Config/db");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const Register = async (nom, email, telephone, password, role) => {

    const [existEmail] = await db.query("SELECT*FROM users WHERE email=?", [email]);

    if (existEmail.length > 0) {
        return {
            success: false,
            message: "Email déjà utilisé"
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [users] = await db.query(
        "INSERT INTO users(nom,email,telephone,password,role) VALUES(?,?,?,?,?)",
        [nom, email, telephone, hashedPassword, role]
    );

    return {
        success: true,
        message: "Utilisateur crée avec succès",
    }
}

const Login = async (email, password) => {

    const [existEmail] = await db.query("SELECT*FROM users WHERE email=?", [email]);

    if (existEmail.length === 0) {
        return {
            success: false,
            message: "Email introuvable"
        }
    }

    const user = existEmail[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return {
            success: false,
            message: "Mot de passe incorrect"
        }
    }

    const token = jwt.sign({
        id: user.id,
        nom: user.nom,
        email: user.email,
        role: user.role
    }, "SECRET_KEY", { expiresIn: "1h" });

    return {
        success: true,
        message: "Connexion réussie",
        token: token
    }
}

module.exports = { Register, Login };