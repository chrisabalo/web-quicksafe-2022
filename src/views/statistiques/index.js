import React, {useEffect, useState} from 'react'
import {CCard, CBadge, CCardBody, CCardGroup, CCardHeader, CCol, CContainer, CRow, CImg} from "@coreui/react";
import {CChart, CChartRadar} from "@coreui/react-chartjs";
import {API_BASE_URL} from "../../models";


const Statistiques = () => {

  const [totalAccident, setTotalAccident] = useState(0);
  const [totalAgents, setTotalAgents] = useState(0);
  const [totalDeces, setTotalDeces] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  //fonction qui permet compter le nombre d'accident
  const GET_TOTAL_NUMBERS_ACCIDENT = async () => {
    try {
      await  API_BASE_URL.get("accidents/all-accidents").then( res => {
        let allNumbers = JSON.stringify(res.data.data[0].total_accident)
        console.log("dataaa : "+allNumbers)
        setTotalAccident(allNumbers)
      })
    }catch (e) {
      console.log(e)
    }
  }
  //fonction qui permet compter le nombre d'utilisateur inscrit
  const GET_TOTAL_NUMBERS_USERS = async () => {
    try {
      await  API_BASE_URL.get("users/total-user").then( res => {
        let allUsers = JSON.stringify(res.data.data[0].total_user)
        console.log("dataaa : "+allUsers)
        setTotalUsers(allUsers)
      })
    }catch (e) {
      console.log(e)
    }
  }
  //fonction to get count agent
  const getTotalAgent = async () => {
    try {
      await  API_BASE_URL.get("agents/all/all-agent").then( res => {
        const data = JSON.stringify(res.data.data[0].total)
        console.log("dataaa : "+data)
        setTotalAgents(data)
      })
    }catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    try {
      GET_TOTAL_NUMBERS_ACCIDENT();
      getTotalAgent();
      GET_TOTAL_NUMBERS_USERS();
    }catch (e) {
      console.log(e)
    }
  }, []);


  const radar = {
    labels: [
      'REGION',
      'QUARTIER',
      'VILLE',
    ],
    datasets: [
      {
        data: [`${totalAccident}`, `${totalUsers}`, `${totalAgents}`, `${totalDeces}`],
        backgroundColor: [
          '#ff8b0b',
          '#70b40e',
          '#36A2EB',
        ],
        hoverBackgroundColor: [
          '#ff8b0b',
          '#70b40e',
          '#36A2EB',
        ],
      }],
  };

  const pie = {
    labels: [
      'ACCDIENTS',
      'UTILISATEURS INSCRITS',
      'AGENTS INSCRITS',
      'DECES',
    ],
    datasets: [
      {
        data: [`${totalAccident}`, `${totalUsers}`, `${totalAgents}`, `${totalDeces}`],
        backgroundColor: [
          '#ff8b0b',
          '#70b40e',
          '#36A2EB',
          '#fa0404',
        ],
        hoverBackgroundColor: [
          '#ff8b0b',
          '#70b40e',
          '#36A2EB',
          '#fa0404',
        ],
      }],
  };
  return (
    <CContainer>
      {
        totalAccident === 0
          ?
          <CRow>
            <CCol className="text-center ">
              {/* <i style={{fontSize: 180, opacity: 0.5}} className="fa fa-bar-chart"></i>
              <h4 className=" text-uppercase text-center">
                Statistiques non disponible
              </h4>*/}
              <div>
                <CImg
                  src={'avatars/datta-1.png'}
                  className="img-fluid"
                />
                <h4 className="text-uppercase text-center">Données indisponibles  ...</h4>
              </div>
            </CCol>
          </CRow>
          :
          <CCard>
            <CCardHeader>
              STATISTIQUES
            </CCardHeader>
            <CCardBody>
              <CChart type="pie" datasets={pie.datasets} labels={pie.labels} />
            </CCardBody>
          </CCard>
      }
      {/* <CCard>
        <CCardHeader>
          Radar Stats
        </CCardHeader>
        <CCardBody>
          <CChartRadar
            datasets={[
              {
                label: 'ACCIDENTS',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                tooltipLabelColor: 'rgba(179,181,198,1)',
                data: [`${totalAccident}`, 59, 90]
              },
              {
                label: 'INTERVENTIONS',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                tooltipLabelColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Region', 'Ville', 'Quartien'
            ]}
          />

        </CCardBody>
      </CCard>*/}
    </CContainer>
  );
}
export default Statistiques

