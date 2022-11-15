import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {CCol, CContainer, CListGroup, CListGroupItem, CRow} from "@coreui/react";
import {API_BASE_URL} from "../../../models";
import moment from "moment";

const InfosALertUser = () => {
  const {id} = useParams();
  //alert(id);

  const [infos, setInfos] = useState({
    dateaccident: "",
    graviteaccident: null,
    idaccident: null,
    lataccident: null,
    longaccident: null,
    name: "",
    nombredengins: null,
    nomuser: "",
    prenomuser: "",
    emailuser: "",
    region: "",
    rue: "",
    ville: "",
  })
  const loadData = async () => {
    await API_BASE_URL.get("accidents/alertes/idaccident/"+ id).then( res => {
      let data = res.data.data;
      console.log(data);
      setInfos(data)
    }).catch( e => {
      console.log(e)
    })
  };
  useEffect(() => {
    loadData();
  }, []);

  console.log("INfos data ", infos);

  return (
    <CContainer>
      <CRow>
        <CCol>
          <CListGroup>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Prenom</label>
              <label className="font-weight-bold "> {infos.prenomuser}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Nom</label>
              <label className="font-weight-bold "> {infos.nomuser}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Email</label>
              <label className="font-weight-bold " >{infos.emailuser}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Gravité de l'accident</label>
              <label className="font-weight-bold " >{infos.graviteaccident}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Nombre d'engins</label>
              <label className="font-weight-bold " >{infos.nombredengins}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Date de l'accident</label>
              <label className="font-weight-bold " > { moment(infos.dateaccident).format('YYYY/MM/DD') } à
                {''} { moment(infos.dateaccident).format('hh:mm:ss') }</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Region</label>
              <label className="font-weight-bold " >{infos.region}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Ville</label>
              <label className="font-weight-bold " >{infos.ville}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Quartier</label>
              <label className="font-weight-bold " >{infos.name}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>rue</label>
              <label className="font-weight-bold " >{infos.rue}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Latitude</label>
              <label className="font-weight-bold " >{infos.longaccident}</label>
            </CListGroupItem>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              <label>Longitude</label>
              <label className="font-weight-bold " >{infos.lataccident}</label>
            </CListGroupItem>
          </CListGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default InfosALertUser
