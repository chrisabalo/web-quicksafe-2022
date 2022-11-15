import React, {createContext, useState} from 'react';
import {API_BASE_URL} from "../models";
import 'react-toastify/dist/ReactToastify.css'
import * as Swal from "sweetalert2";


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async(email, password) => {

                  try {
                    await  API_BASE_URL.post("users/login", {
                      email: email,
                      password: password
                    }).then(response => {
                      console.log(response.data)
                      if (response.data.code == 208 ) {

                        Swal.fire(
                          'Email/Mot de passe',
                          'Email et Mot de passe incorrectes...',
                          'warning'
                        )
                      } else  if (response.data.code == 210) {
                        Swal.fire(
                          'Email/Mot de passe',
                          'L\'utilisateur n\'existe pas ...',
                          'error'
                        )
                      }
                      else {
                        if (response.data.code == 200) {
                          Swal.fire(
                            'AUTENTIFICATION',
                            'Vous etes maintenant connecté ....',
                            'success'
                          )
                          localStorage.setItem("loginData", JSON.stringify(response.data))
                          let token = JSON.stringify(response.data.token)
                          setUser(token)
                        }
                      }

                    } ).catch(e => {
                      console.log(e)
                      Swal.fire(
                        'ERREUR DE CONNEXION',
                        'Tentative de connexion echoué ...',
                        'error'
                      )
                    })
                  }catch (e) {
                    console.log(e)
                  }

                },
              registerAgent: async (nom, prenom, email, code, status, telephone, quartier, ville) => {
                  const dataRegister = {
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    code: code,
                    status: status,
                    telephone: telephone,
                    quartier: quartier,
                    ville: ville
                  }
                  try {
                    await API_BASE_URL.post("agents", dataRegister).then( res => {
                      console.log(res.data)
                      if (res.data.code == 500) {
                        Swal.fire(
                          'Oups !!!',
                          'Une erreur s\'est produite lors de l\'insertion d\'un nouvelle agent !',
                          'error'
                        )
                      }else {
                        if (res.data.code == 200) {
                          Swal.fire({
                            title: 'Veuillez patientez svp !!',
                            showConfirmButton: false,
                            timer: 15000
                          })
                        }
                      }
                    })
                  }catch (e) {
                    console.log(e)
                    Swal.fire(
                      'Oups !!!',
                      'Une erreur s\'est produite lors de l\'insertion !!!',
                      'error'
                    )
                  }
              },
                logout: async () => {
                  try {
                    await localStorage.clear();
                    setUser('');
                  }catch (e) {
                    console.log(e)
                  }
                }
            }}>
            {children}
        </AuthContext.Provider>
    );
};
