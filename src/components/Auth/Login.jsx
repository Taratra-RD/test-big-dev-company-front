// Importation des modules nécessaires depuis React et d'autres fichiers
import React, { useState } from "react";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axiosAuth from "../../api/axiosAuth";
import { api } from "../../api/api";

// Définition de la composante fonctionnelle Login
export default function Login() {
  // Utilisation du hook useState pour suivre l'état de l'utilisateur et les erreurs
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fonction pour gérer la connexion de l'utilisateur
  const signinUser = (e) => {
    e.preventDefault();
    // Envoi d'une requête POST à l'API avec les informations d'identification
    axiosAuth
      .post(api + "/user/signin", user)
      .then((res) => {
        setError("");
        // Vérification de la réponse de l'API
        if (res.data.Login) {
          // Stockage des jetons d'accès dans la session et redirection vers la page d'accueil
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("access_token", res.data.accessToken);
          navigate("/");
        } else {
          // Redirection vers la page de connexion en cas d'échec
          navigate("/login");
        }
      })
      .catch((err) => {
        // Gestion des erreurs de requête
        setError(err.response.data.message);
      });
  };

  // Rendu de l'interface utilisateur avec un formulaire de connexion
  return (
    <div className="auth">
      <div className="auth--auth">
        <div className="auth--left"></div>
        <div className="auth--right">
          <h1 className="auth--title">Login</h1>
          <form onSubmit={signinUser}>
            {/* Champs de saisie pour le nom d'utilisateur */}
            <div className="username">
              <label className="username--label">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            {/* Champs de saisie pour le mot de passe */}
            <div className="password">
              <label className="password--label">Password</label>
              <input
                type="text"
                placeholder="Enter your password"
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            {/* Bouton de connexion */}
            <div className="button">
              <button>Sign In</button>
            </div>
            {/* Affichage des erreurs */}
            {error && <div style={{ color: "red" }}>{error}</div>}
          </form>
          {/* Lien vers la page d'inscription */}
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
