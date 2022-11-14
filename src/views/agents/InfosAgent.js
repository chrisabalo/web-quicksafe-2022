import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {API_BASE_URL} from "../../models";
import {CCol, CContainer, CListGroup, CListGroupItem, CRow} from "@coreui/react";


const InfosAgent = () => {
  const {id} = useParams();
  //alert(id);
  const [infos, setInfos] = useState({
    nomagent: '',
    prenomagent: '',
    emailagent: '',
    codeagent: '',
    statusagent: '',
    telephoneagent: '',
    quartieragent: '',
    villeagent: '',
  });
  const loadAgents = async () => {
    await API_BASE_URL.get("agents/idagent/"+ id).then( res => {
      let data = res.data.data;
      console.log(data);
      setInfos(data)
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    loadAgents();
  }, []);

  return (
      <CContainer>
        <CRow>
          <CCol lg={4} md={4} xm={4} xs={12}>
            <CListGroupItem className="d-flex justify-content-around align-items-center">
              <label className="h3 text-uppercase rounded c-avatar-rounded text-black-50 bg-light border-4 border-dark p-4 p-sm-4 ">
                {infos.prenomagent.charAt(0)+''+infos.nomagent.charAt(0)}
              </label>
              <label className="font-weight-bold " >  @{infos.prenomagent.charAt(0).toLowerCase()+'_'+infos.nomagent}</label>
            </CListGroupItem>
          </CCol>
          <CCol lg={8} md={8} xm={8} xs={12} >
            <CListGroup>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Prenom</label>
                <label className="font-weight-bold "> {infos.prenomagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Nom</label>
                <label className="font-weight-bold "> {infos.nomagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Email</label>
                <label className="font-weight-bold " >{infos.emailagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Telephone</label>
                <label className="font-weight-bold " >{infos.telephoneagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Code de l'agent</label>
                <label className="font-weight-bold " >{infos.codeagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Status de l'agent</label>
                <label className="font-weight-bold " >{infos.statusagent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Quartier de l'agent</label>
                <label className="font-weight-bold " >{infos.quartieragent}</label>
              </CListGroupItem>
              <CListGroupItem className="d-flex justify-content-between align-items-center">
                <label>Ville de l'agent</label>
                <label className="font-weight-bold " >{infos.villeagent}</label>
              </CListGroupItem>

            </CListGroup>
          </CCol>
        </CRow>
      </CContainer>
  )
}

export default InfosAgent

