import React from 'react'
import {
  CBadge,
  CCard,
  CCardHeader,
  CCol,
  CContainer,
  CDropdownToggle,
  CImg,
  CListGroup,
  CListGroupItem,
  CRow
} from "@coreui/react";

const MonCompte = () => {

  const data = localStorage.getItem("loginData");
  const users = JSON.parse(data);
  console.log("users data : " + users.data.nomuser);
  const name = users.data.nomuser;
  const prenom = users.data.prenomuser;
  const adresse = users.data.adresseuser;
  const email = users.data.emailuser;
  const telephone = users.data.telephoneuser;
  const groupesanguin = users.data.groupesanguin;
  const personeacontacter = users.data.personeacontacter;
  const usertype = users.data.usertype;


  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          <label> Mon compte <sup className="badge-warning p-2 badge-pill"> {usertype === null ? 'Super Admin' : usertype}</sup></label>
        </CCardHeader>
      </CCard>
      <CRow>
        <CCol lg={8} md={8} xm={8} xs={12} >
          <CListGroup>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Prenom</label>
              <label className="font-weight-bold "> {prenom}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Nom</label>
              <label className="font-weight-bold "> {name}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Email</label>
              <label className="font-weight-bold " >{email}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Adresse</label>
              <label className="font-weight-bold " >{adresse}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Telephone</label>
              <label className="font-weight-bold " >{telephone}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Personne à contacter</label>
              <label className="font-weight-bold " >{personeacontacter}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Groupe sanguin</label>
              <label className="font-weight-bold " >{groupesanguin}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Status </label>
              <label className="font-weight-bold " >{(usertype === null) ? 'Super Admin' : usertype}</label>
            </CListGroupItem>
          </CListGroup>
          {" "}
        </CCol>

        <CCol lg={4} md={4} xm={4} xs={12}>
          <CListGroupItem className="d-flex justify-content-between align-items-center">
            <label className="h3 text-uppercase text-black-50 c-avatars-stack rounded-pill bg-light border-4 border-dark p-4 p-sm-4 ">
              {prenom[0]+''+name[0]}
            </label>
            <label className="font-weight-bold " >  @{prenom[0].toLowerCase()+'_'+name}</label>
          </CListGroupItem>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export  default MonCompte
