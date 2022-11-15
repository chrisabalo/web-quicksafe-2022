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
import {Link, useHistory, useParams} from "react-router-dom";
import {API_BASE_URL} from "../../../models";
import {AuthContext} from "../../../navigation/AuthProvider";
import Swal from "sweetalert2";

const EditAgent = () => {


  const {registerAgent} = useContext(AuthContext);
  const history = useHistory();
  const {id} = useParams();
  //alert(id);
  const [agents, setAgents] = useState({
    nomagent: '',
    prenomagent: '',
    emailagent: '',
    codeagent: '',
    statusagent: '',
    telephoneagent: '',
    quartieragent: '',
    villeagent: '',
  });

 const {nomagent, prenomagent, emailagent, codeagent, statusagent, telephoneagent, quartieragent, villeagent } = agents;
 const onInputChange = e => {
   setAgents({...agents, [e.target.name]: e.target.value});
 }

 const onSubmit = async e => {
   e.preventDefault();
   await API_BASE_URL.patch("agents/"+id, agents).then( res => {
     let data = res.data.data;
     console.log("Edit data : " + data)
     Swal.fire({
       title: 'Demande en cours de traitement ...',
       showConfirmButton: false,
       timer: 15000
     })
     setTimeout(() => {
       Swal.fire(
         'Edition Terminée !!!',
         'Modification terminée...',
         'success'
       )
       history.push("/agent/agents")
     },3500);

   })
 }

  const loadAgents = async () => {
    await API_BASE_URL.get("agents/idagent/"+ id).then( res => {
      let data = res.data.data;
      console.log(data);
      setAgents(data)
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    loadAgents();
  }, []);
  console.log("Update data : " + agents)

  let PASSWORD_REGEX_3=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  return (
    <>
      <CRow>
        <CCol>
          <CCol>
            <CCard>
              <CCardHeader>
                Editer les données de l'agent
              </CCardHeader>

              <CCardBody>
                <CFormGroup  row className="my-0">
                  <CCol >
                    <CFormGroup>
                      <CLabel htmlFor="fname">Nom</CLabel>
                      <CInput
                        id="nameagent"
                        placeholder="Entrer le nom"
                        name="nomagent"
                        value={nomagent}
                        onChange={e => onInputChange(e)} />
                    </CFormGroup>
                  </CCol>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="lname">Prenom</CLabel>
                      <CInput
                        id="prenomagent"
                        placeholder=" Tapez le nom de famille"
                        name="prenomagent"
                        value={prenomagent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="email">Email</CLabel>
                      <CInput
                        id="emailagent"
                        placeholder="Entrer l'email"
                        name="emailagent"
                        value={emailagent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol >
                    <CFormGroup>
                      <CLabel htmlFor="code">Code de l'agent</CLabel>
                      <CInput
                        id="codeagent"
                        placeholder="Entrer le code de l'agent"
                        name="codeagent"
                        value={codeagent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="telephone">Telephone</CLabel>
                      <CInput
                        id="telephoneagent"
                        placeholder=" Entrer le numero de telephone Ex: (00228)XXXXxxxx"
                        name="telephoneagent"
                        value={telephoneagent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="code">Status de l'agent</CLabel>
                      <CSelect
                        onChange={e => onInputChange(e)}
                        value={statusagent} custom name="statusagent" id="statusagent">
                        <option  value={""}>Choisir le status...</option>
                        <option  value="disponible"> Disponible</option>
                        <option  value="occupee"> Occupée</option>
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol >
                    <CFormGroup>
                      <CLabel htmlFor="quartier">Quartier</CLabel>
                      <CInput
                        id="quartieragent"
                        placeholder="Entrer le quartier"
                        name="quartieragent"
                        value={quartieragent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol >
                    <CFormGroup>
                      <CLabel htmlFor="ville">Ville</CLabel>
                      <CInput
                        id="villeagent"
                        placeholder="Entrer la ville"
                        name="villeagent"
                        value={villeagent}
                        onChange={e => onInputChange(e)}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CButton onClick={e => onSubmit(e)} size="md" color="warning" className="ml-1 float-left text-uppercase">
                  Valider la modification
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

export  default EditAgent

