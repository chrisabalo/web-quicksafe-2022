import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {CCard, CCardBody, CCol, CContainer, CRow} from "@coreui/react";


const Mapquest = ({ height, width, center, tileLyer, zoom, apiKey }) => {

  useEffect(() => {
    // get api key
    window.L.mapquest.key = apiKey;
    //initialiser la carte
    const map = window.L.mapquest.map('map', {
      center,
      layers: window.L.mapquest.tileLayer(tileLyer),
      zoom
    })
    map.addControl(window.L.mapquest.control());

  },[])
 

  return (
       <CContainer>
         <CRow>
           <CCol>
             <CCard>
               <CCardBody>
                 <div id="map" style={{ height, width }}>
                 </div>
               </CCardBody>
             </CCard>
           </CCol>
         </CRow>
       </CContainer>
  )

}


export default Mapquest
