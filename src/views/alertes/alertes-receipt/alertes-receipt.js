import React, {useEffect, useState} from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody, CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable, CForm, CFormGroup, CImg, CInput, CLabel,
  CModal, CModalBody, CModalFooter,
  CModalHeader, CModalTitle, CNavLink,
  CRow, CSelect
} from "@coreui/react";


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, InfoWindow,
} from "react-google-maps";
import {Link, useParams} from "react-router-dom";
import {API_BASE_URL} from "../../../models";
import moment from "moment";



const AlertesReceipt = (props) => {


  const [loaad, setLoad] = useState(false);
  const [alertes, setAlertes] = useState([]);
  const [modal, setModal] = useState(false);

  const loadAlerte = async () => {
    await API_BASE_URL.get("accidents/alertes").then( res => {
      let data = res.data.data;
      console.log("Accidents alertes", data);
      setAlertes(data);
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1500)
    loadAlerte();
  }, []);

  return (

    <>
      {/*Zones de la liste des agents*/}

      {
        loaad
          ?
          <>
            {
              alertes.length > 0
                ?
                (
                  <CCard>
                    <CRow>
                      <CCol>
                        <table className="table border shadow py-4">
                          <thead >
                          <tr>

                            <th scope="col" style={{ width: '60%' }}></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                          </tr>
                          </thead>
                          <tbody>
                          {alertes.map((alerte, index) => (
                            <tr key={index+1}>
                              <td>
                                <div className="message">
                                  <div className="pt-3 mr-3 float-left">
                                    <div className="c-avatar border-dark">
                                      {/*<CImg
                                      src={'avatars/7.jpg'}
                                      className="c-avatar-img"
                                      alt="admin@bootstrapmaster.com"
                                    />*/}
                                      {alerte.nomuser.charAt(0)+''+alerte.prenomuser.charAt(0)}
                                      <span className="c-avatar-status bg-success"></span>
                                    </div>
                                  </div>
                                  <div>
                                    <small className="text-muted">{alerte.prenomuser} {alerte.nomuser}</small>
                                    <small className="text-muted float-right mt-1">{moment(`${alerte.dateaccident}`).fromNow()}</small>
                                  </div>
                                  <div className="text-truncate font-weight-bold">
                                    <span className="fa fa-exclamation text-danger"></span>
                                    {""} Gravité : {alerte.graviteaccident}, Nombre d'egnins : {alerte.nombredengins}
                                  </div>
                                  <div className="small text-muted text-truncate">
                                    Latidude : {alerte.lataccident}, Longitude : {alerte.longaccident} < br/>
                                    a été envoyé le <span className="text-black-50 "> { moment(`${alerte.dateaccident}`).format('dddd')} {""}
                                    { moment(`${alerte.dateaccident}`).format('Do MMMM YYYY')} {""} {" à "}
                                    { moment(`${alerte.dateaccident}`).format('HH:mm:ss')} </span>

                                  </div>
                                </div>
                              </td>
                              <td></td>
                              <td></td>
                              <td>
                                <Link class="btn btn-primary mr-2"
                                      to={`/alertes/infos/${alerte.idaccident}`}
                                >
                                  Voir details
                                </Link>

                                <Link
                                  class="btn btn-outline-warning mr-2"
                                  to={`/maps-agents/${alerte.idaccident}`}
                                >
                                  Trouver la position
                                </Link>
                              </td>
                            </tr>

                          ))}
                          </tbody>
                        </table>
                      </CCol>
                    </CRow>
                  </CCard>
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
          </CCol>
           )
      }
    </>
  )
}


export default AlertesReceipt
