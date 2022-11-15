import React, {useContext, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {AuthContext} from "../../../navigation/AuthProvider";
import {toast} from "react-toastify";


const Login = () => {

  const {login} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 // fonction de soumission de formulaire
  const handleLogin = ( email, password) => {
    if( !email && !password) {
      toast.warn(" Champs de saisie vide !!!")
    } else {
      login(email, password)
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8" xs="12" sm="12" >
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm to="users/login">
                    <h1 style={{ textTransform: 'uppercase'}}>Authentification</h1>
                    <p className="text-muted">Connectez vous à votre compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                              value={email}
                              type="text"
                              placeholder="email"
                              autoComplete="email"
                              onChange={(event) => setEmail(event.target.value.toLowerCase()) }
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        value={password}
                        type="password"
                        placeholder="Mot de passe"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={() => handleLogin(email, password)}
                        >
                          Se connecter
                        </CButton>
                      </CCol>
                    {/*  <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Resté connecter</CButton>
                      </CCol>*/}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
