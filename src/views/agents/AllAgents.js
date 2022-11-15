import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody, CCardFooter,
  CCardHeader,
  CCol, CCollapse,
  CDataTable, CForm, CFormGroup, CImg, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow, CSelect
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {API_BASE_URL} from "../../models";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const AllAgents = () => {

  const [loadAgent, setLoadAgent] = useState(false);
  const [agents, setAgents] = useState([]);


  const handleDeleteCliente = async (id) => {
     await Swal.fire({
      title: 'Etes vous sure?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, le retirer de la  liste!',
     cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        deleteAgent(id);
      }
    })
  }

  const deleteAgent = async (id) => {
    await API_BASE_URL.delete("agents/"+id).then( res => {
      if (res.data.code === 200) {
        Swal.fire(
          'SUPPRESSION AGENT!',
          'L\'agent a bien été supprimé.',
          'success'
        )
        loadAgents();
      } else {
        Swal.fire(
          'SUPPRESSION AGENT!',
          'Erreur lors de la suppression de l\'agent.',
          'error'
        )
      }
    }).catch(e => {
      console.log(e)
    })
  }

  const loadAgents = async () => {
    await API_BASE_URL.get("agents").then( res => {
      let data = res.data.data;
      console.log(data);
      setAgents(data.reverse());
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadAgent(true)
    }, 1500)
    loadAgents();
  }, []);

  return (
    <>
      {/*Zones de la liste des agents*/}

      {
        loadAgent
          ?
            <>
              {
                  agents.length > 0
                  ?
                  (
                    <CRow>
                      <CCol>
                        <table className="table border shadow py-4">
                          <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Matricule</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Email</th>
                            <th> <Link className="btn btn-info mr-1" aria-pressed="true" role="button" to="/agent/add-agents">Nouveau agent</Link></th>
                          </tr>
                          </thead>
                          <tbody>
                          {agents.map((agent, index) => (
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{agent.codeagent}</td>
                              <td>{agent.nomagent}</td>
                              <td>{agent.prenomagent}</td>
                              <td>{agent.emailagent}</td>
                              <td>
                                <Link class="btn btn-primary mr-2"
                                      to={`/agent/infos/${agent.idagent}`}>
                                  Voir details
                                </Link>
                                <Link
                                  class="btn btn-outline-primary mr-2"
                                  to={`/agent/edit/${agent.idagent}`}
                                >
                                  Editer
                                </Link>
                                <Link
                                  class="btn btn-danger"
                                  onClick={() => handleDeleteCliente(agent.idagent) }
                                >
                                  Retirer
                                </Link>
                              </td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </CCol>
                    </CRow>
                  )
                  :
                  (<CRow>
                    <CCol className="text-center d-flex justify-content-center align-items-center d-flex m-4">
                      <div>
                        <CImg
                          src={'avatars/datta-1.png'}
                          className="img-fluid"
                        />
                        <h4 className="text-uppercase text-center">Données indisponibles  ...</h4>
                      </div>
                    </CCol>
                  </CRow> )
              }
            </>
           :
            (<CCol className="d-flex justify-content-center align-items-center text-center m-4">
              <h4 className="text-uppercase text-center">Chargement en cours .....</h4>
            </CCol>)
      }
    </>
  )
}

export  default AllAgents
