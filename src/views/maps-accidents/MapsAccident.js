import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CContainer, CRow} from "@coreui/react";
import Mapquest from "./Mapquest";
import {API_BASE_URL} from "../../models";
import {Circle, MapContainer, Marker, Popup, TileLayer,} from "react-leaflet";
import moment from "moment";


const Maps = () => {

  const {id} = useParams();
 // alert(id);
  const[lat, setLat] = useState('6.158303') //6.1583036315448485, 1.2600531999999998
  const[lng, setLng] = useState('1.260053')
  const[position, setPosition] = useState([])

  const GET_LAT_LNG = async () => {
    try {
      await API_BASE_URL.get(`accidents/idaccident/${id}`).then( res => {
        let data = res.data.data;
        console.log("only accident", data)
        setLat(data.lataccident)
        setLng(data.longaccident)
        //alert(JSON.stringify(data))
        setPosition(data);
      })
    }catch (e) {
      console.log(e)
    }
  }

 /* const SET_CENTER = (lat, lng) => {
    setLat(lat)
    setLng(lng)
    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat,lng), 12);
  }
  let markers = [];
  const ADD_MARKER = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'top' || '',
        type: 'marker',
        icon: {
          primaryColor: '#a8190f',
          secondaryColor: '#db2c2c',
          size: 'md',
        }
      }
    )
      .addTo(window.L.mapquest.Map.getMap('map'));
    markers.push(marker);

  }
*/
  /*const LOAD_ASYNC = async () => {
    console.log("Position", position)
    const data = position
    const long = data.longaccident
    const name = data.name
    const region = data.region
    const rue = data.rue
    const ville = data.ville
    const latt = data.lataccident
    console.log("Long", long, latt)
    try {
      await GET_LAT_LNG();
      SET_CENTER(latt,long);
      {
        (latt && long) !== null && ADD_MARKER(latt, long, `${region}`, `Ville: ${ville}, Rue: ${rue}`);
      }
    }catch (e) {
      console.log(e)
    }
  }
*/
  console.log("Position", position)
  const datas = position
  const long = datas.longaccident
  const name = datas.name
  const region = datas.region
  const rue = datas.rue
  const ville = datas.ville
  const latt = datas.lataccident
  const dates = datas.dateaccident
  console.log("Dates", dates)
 // alert(lat)
  useEffect(() => {
    try {
      const unsubscribe = GET_LAT_LNG();
      return unsubscribe;
    }catch (e) {
      console.log(e)
    }
  }, [])


  return (
       /* <Mapquest
          height="61vh"
          width="100%"
          center={[lat, lng]}
          tileLyer={"dark"}
          zoom={12}
          apiKey="YncVxAJgAtsvImF2CUysPiM7pQ8SwYDp"
        />*/
       <CContainer>
         <CRow>
          <CCard>
            <CCardHeader className="text-uppercase text-black-50" >
              <CButton to="/alertes/alertes-receipt" className="fa fa-angle-double-left btn-outline-dark" > </CButton> {""}
              la zone de l'accident
            </CCardHeader>
            <CCardBody>
              <CCol>
                <MapContainer  center={[lat, lng]} zoom={13} scrollWheelZoom={false}
                               style={{ height: "60vh" }}
                               zoomControl={true}

                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[lat, lng]}>
                    <Popup>
                      latitude : {lat} <br /> longitude : {lng}.<br />
                      Region : {region} <br /> Ville : {ville}.<br />
                      Quartier : {name !== 'null' ? name : 'Inconnue'}.<br />
                      Rue : {rue !== 'null' ? rue : 'Inconnue'} .<br />
                    </Popup>
                  </Marker>
                  <Circle  center={[lat, lng]} radius={200} pathOptions={{ color: 'red' }} />
                </MapContainer>
              </CCol>
            </CCardBody>
            <CCardFooter className="align-items-center justify-content-between">
              <div className="text-muted text-truncate">
                L'accident a été signaler le <span className="text-dark font-weight-bolder"> { moment(`${dates}`).format('dddd')} {""}
                { moment(`${dates}`).format('Do MMMM YYYY')} {""} {" à "}
                { moment(`${dates}`).format('HH:mm:ss')} </span>,
               <span className="text-dark" > { ville !== null ? 'dans les environ de la ville de '+ ville   : 'Ville : Nom disponible' }
                 {""}  <span className="font-weight-bold" >{moment(`${dates}`).fromNow()}</span> </span>
                <span className="float-end ml-1" ><i className="fa fa-share-alt" ></i></span> {""}
                <span className="float-end" ><i className="fa fa-whatsapp " ></i></span>
              </div>
            </CCardFooter>
          </CCard>
         </CRow>
       </CContainer>
  );
}

export  default  Maps


