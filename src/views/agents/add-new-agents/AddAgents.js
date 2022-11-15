import React, {useContext, useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody, CCardFooter,
  CCardGroup, CCardHeader,
  CCol, CContainer,
  CForm, CFormGroup, CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText, CLabel,
  CRow, CSelect
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {Link, useHistory} from "react-router-dom";
import {API_BASE_URL} from "../../../models";
import {AuthContext} from "../../../navigation/AuthProvider";
import Swal from "sweetalert2";

const AddAgents = () => {

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [status, setStatus] = useState('')
  const [telephone, setTelephone] = useState('')
  const [quartier, setQuartier] = useState('')
  const [ville, setVille] = useState('')

  const {registerAgent} = useContext(AuthContext);
  const history = useHistory();
  let PASSWORD_REGEX_3=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleRegisterAgent = (nom, prenom, email, code, status, telephone, quartier, ville) => {
    if ((!nom || !prenom || !email || !code || !status || !telephone || !quartier || !ville)) {
      Swal.fire(
        'CHAMPS VIDES',
        `Tous les champs doivent etre renseigner s'il vous plait!`,
        'warning'
      )
    } else if (!(email.match(re))) {

      Swal.fire(
        'ERREUR',
        `L'email : <b>${email}</b> renseigné est invalide ...`,
        'warning'
      )
    } else if ( status === null) {

      Swal.fire(
        'STATUS NON RENSEIGNER',
        `Renseigner le status de l'agent s'il vous plait...`,
        'warning'
      )
    } else if (11 > (telephone.length)) {
      Swal.fire(
        'NUMERO TROP COURT !!!',
        `Votre numéro de telephone doit contenir au moins 8 chiffres sans compter le code indicatif, Le code inicatif du pays doit" +
        " etre rentré comme l'exemple ci-après  Ex: (00228) !`,
        'warning'
      )
    } else if ( registerAgent(nom, prenom, email, code, status, telephone, quartier, ville)) {
      setTimeout(() => {
        Swal.fire(
          'NOUVEL AGENT',
          `L'enregistrement du nouvel agent   "<b>${email}</b>" a été effectué...`,
          'success'
        )
        setNom("");
        setPrenom("");
        setEmail("");
        setCode("");
        setStatus("");
        setTelephone("");
        setQuartier("");
        setVille("");
      }, 3000)

    }
  }


  return (
    <>
    <CRow>
     <CCol>
       <CCol>
         <CCard>
           <CCardHeader>
             Ajouter un nouvel agent
           </CCardHeader>

           <CCardBody>
               <CFormGroup  row className="my-0">
                 <CCol >
                   <CFormGroup>
                     <CLabel htmlFor="fname">Nom</CLabel>
                     <CInput
                       id="name"
                       placeholder="Entrer le nom"
                       name="nom"
                       value={nom}
                       onChange={e => setNom(e.target.value.toUpperCase())} />
                   </CFormGroup>
                 </CCol>
                 <CCol>
                   <CFormGroup>
                     <CLabel htmlFor="lname">Prenom</CLabel>
                     <CInput
                       id="firstname"
                       placeholder=" Tapez le nom de famille"
                       name="prenom"
                       value={prenom}
                       onChange={e => setPrenom(e.target.value.toLowerCase())}
                     />
                   </CFormGroup>
                 </CCol>
                 <CCol>
                   <CFormGroup>
                     <CLabel htmlFor="email">Email</CLabel>
                     <CInput
                       id="email"
                       placeholder="Entrer l'email"
                       name="email"
                       value={email}
                       onChange={e => setEmail(e.target.value.toLowerCase())}
                     />
                   </CFormGroup>
                 </CCol>
               </CFormGroup>
               <CFormGroup row className="my-0">
                 <CCol >
                   <CFormGroup>
                     <CLabel htmlFor="code">Code de l'agent</CLabel>
                     <CInput
                       id="code"
                       placeholder="Entrer le code de l'agent"
                       name="code"
                       value={code}
                       onChange={e => setCode(e.target.value.toUpperCase())}
                     />
                   </CFormGroup>
                 </CCol>
                 <CCol>
                   <CFormGroup>
                     <CLabel htmlFor="telephone">Telephone</CLabel>
                     <CInput
                       id="telephone"
                       placeholder=" Entrer le numero de telephone Ex: (00228)XXXXxxxx"
                       name="telephone"
                       value={telephone}
                       onChange={e => setTelephone(e.target.value)}
                     />
                   </CFormGroup>
                 </CCol>
                 <CCol>
                   <CFormGroup>
                     <CLabel htmlFor="code">Status de l'agent</CLabel>
                     <CSelect
                       onChange={e => setStatus(e.target.value)}
                       value={status} custom name="status" id="status">
                       <option value={''}>Choisir le status...</option>
                       <option value="disponible"> Disponible</option>
                       <option value="occupee"> Occupée</option>
                     </CSelect>
                   </CFormGroup>
                 </CCol>
               </CFormGroup>
               <CFormGroup row className="my-0">
                 <CCol >
                   <CFormGroup>
                     <CLabel htmlFor="quartier">Quartier</CLabel>
                     <CInput
                       id="quartier"
                       placeholder="Entrer le quartier"
                       name="quartier"
                       value={quartier}
                       onChange={e => setQuartier(e.target.value.toUpperCase())}
                     />
                   </CFormGroup>
                 </CCol>
                 <CCol >
                   <CFormGroup>
                     <CLabel htmlFor="ville">Ville</CLabel>
                     <CInput
                       id="ville"
                       placeholder="Entrer la ville"
                       name="ville"
                       value={ville}
                       onChange={e => setVille(e.target.value.toUpperCase())}
                     />
                   </CFormGroup>
                 </CCol>
               </CFormGroup>
               <CButton onClick={() => handleRegisterAgent(nom, prenom, email, code, status, telephone, quartier, ville)} size="md" color="info" className="ml-1 float-left text-uppercase">
                 Ajouter
               </CButton>
           </CCardBody>
         </CCard>
       </CCol>
     </CCol>
     </CRow>
    </>
  )
}

export  default AddAgents
