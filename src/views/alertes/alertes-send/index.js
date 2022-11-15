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

import {Link, useParams} from "react-router-dom";
import {API_BASE_URL} from "../../../models";



const AlertCentreDeSante = (props) => {

  const apiKey = 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA';

  const [loaad, setLoad] = useState(false);
  const [alertes, setAlertes] = useState([]);
  const [modal, setModal] = useState(false);

  const loadData = async () => {
    await API_BASE_URL.get("accidents/alertes/centresante").then( res => {
      let data = res.data.data;
      console.log("Accidents alertes", data);
      setAlertes(data.reverse());
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1500)
    loadData();
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
                              <span className="d-inline-block">
                                <label className="mr-3 text-uppercase text-black-50 c-avatar-rounded rounded-pill bg-light border-4 border-dark p-4 p-sm-4 ">
                                {alerte.nomuser.charAt(0)+''+alerte.prenomuser.charAt(0)}
                              </label>
                                {""}
                                <label className="mr-1 text-capitalize font-weight-bold"> {alerte.prenomuser} {""}  </label>
                                <label className="text-uppercase"> {alerte.nomuser} </label>
                              </span>
                            </td>
                            <td>{alerte.lataccident}</td>
                            <td>{alerte.longaccident}</td>
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
          (
            <CCol className="d-flex justify-content-center align-items-center text-center m-4">
              <h4 className="text-uppercase text-center">Chargement en cours .....</h4>
            </CCol>
          )

      }
    </>
  )
}


export default AlertCentreDeSante
