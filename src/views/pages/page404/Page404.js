import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Link} from "react-router-dom";

const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! Requete impossible.</h4>
              <p className="text-muted float-left">La page demandée est indisponible.</p>
            </div>
            <CInputGroup className="input-prepend">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CIcon name="cil-magnifying-glass" />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput size="16" type="text" placeholder="quelle recherche desirez vous ?" />
              <CInputGroupAppend>
                <CButton color="info">Rechercher</CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="d-flex justify-content-center align-items-center p-5">
            <CButton to="/dashboard"  className="btn-outline-dark" > Retour au tableau de bord</CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
