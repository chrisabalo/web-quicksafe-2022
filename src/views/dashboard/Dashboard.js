import React, {useContext, useEffect, useState} from 'react'
import {
  CBadge, CButton, CCallout, CCard,
  CCardBody,
  CCardFooter, CCardGroup, CCardHeader,
  CCol, CCollapse, CDataTable, CImg,
  CLink, CModal, CModalBody, CModalFooter, CModalHeader,
  CProgress,
  CRow,
  CWidgetIcon,
  CWidgetProgress,
  CWidgetProgressIcon
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {CChart} from "@coreui/react-chartjs";
import {AuthContext} from "../../navigation/AuthProvider";
import {API_BASE_URL, SOCKET} from "../../models";
import Statistiques from "../statistiques";

//socket config


//obtentiton des donnes du socket
SOCKET.on('sendData', function (data) {
  console.log("data of socket ", data);
});

const Dashboard = () => {

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)
  const [totalAgents, setTotalAgents] = useState(0);
  const [totalAccident, setTotalAccident] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalDeces, setTotalDeces] = useState(0);
  const [totalGueris, setTotalGueris] = useState(0);


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
  //fonction qui permet compter le nombre d'accident
  const GET_ALL_NUMBERS_ACCIDENT = async () => {
    try {
      await  API_BASE_URL.get("accidents/all-accidents").then( res => {
        console.log(" data dashboard", res.data)
        const allNumbers = JSON.stringify(res.data.data[0].total_accident)
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
  useEffect(() => {
    getTotalAgent();
    GET_ALL_NUMBERS_ACCIDENT();
    GET_TOTAL_NUMBERS_USERS();
  }, [])
  console.log(" Total des agents :"+totalAgents)
  console.log(" Total des accidents :"+totalAccident)


  return (
    <>
      {/*Dashboard */}
      <CRow>
       <CCol>
         <CCardGroup className="mb-4">
           <CWidgetProgressIcon
             header={`${totalAgents}`}
             text="NOMBRES D'AGENTS"
             color="gradient-info"
             value={`${totalAgents}`}
             inverse
           >
             <CImg
               src={'avatars/users.png'}
               height={80}
               width={80}
               className="bg-gradient rounded-pill border-end p-2"
             />
           </CWidgetProgressIcon>
           <CWidgetProgressIcon
             header={`${totalAccident}`}
             text="NOMBRES D'ACCIDENTS"
             color="gradient-warning"
             value={`${totalAccident}`}
             inverse
           >
             <CImg
               src={'avatars/accident.png'}
               height={80}
               width={80}
               className="bg-gradient rounded-pill border-end p-2"
             />
           </CWidgetProgressIcon>
           <CWidgetProgressIcon
             header={`${totalUsers}`}
             text="UTILISATEURS INSCRITS"
             color="gradient-success"
             inverse
             value={`${totalUsers}`}
           >
             <CImg
               src={'avatars/users.png'}
               height={80}
               width={80}
               className="bg-gradient rounded-pill border-end p-2"
             />
           </CWidgetProgressIcon>

           <CWidgetProgressIcon
             header={`${totalDeces}`}
             text="NOMBRE DE DECES"
             color="gradient-danger"
             value={`${totalDeces}`}
             inverse
           >
             <CImg
               src={'avatars/deadly.png'}
               height={80}
               width={80}
               className="bg-gradient rounded-pill border-end p-2"
             />
           </CWidgetProgressIcon>
         </CCardGroup>
       </CCol>
      </CRow>
      <CRow>
        <CCol>
          <Statistiques />
        </CCol>
      </CRow>

      {/*Zones de la liste des agents*/}
      {/*<CRow>
        <CCol>
          <CCard>
            <CCardHeader >
             <h2> <i className=" fa fa-list-ul"></i> LISTES DES AGENTS</h2>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  'show_details':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={()=>{toggleDetails(index)}}
                          >
                            {details.includes(index)
                              ?
                              <div style={{ padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between'}}> <i className="fa fa-eye-slash" > </i> Cacher</div>
                              :
                              <div style={{ padding: 5, display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between'}}> <i className="fa fa-eye" > </i> Visualiser </div>
                            }
                          </CButton>
                        </td>
                      )
                    },
                  'details':
                    (item, index)=>{
                      return (
                        <CCollapse show={details.includes(index)}>
                          <CCardBody>
                            <h4>
                              {item.name}
                            </h4>
                            <p className="text-muted">User since: {item.registered}</p>
                            <CButton size="sm" color="info" >
                              Voir plus details sur l'agent
                            </CButton>

                            <CButton size="sm" color="danger" className="ml-1">
                              Retirer de l'agent de l'entreprise
                            </CButton>
                          </CCardBody>
                        </CCollapse>
                      )
                    }
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>*/}
      {/*<CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h2> <i className="fa fa-chart-line"></i> STATISTIQUES</h2>
            </CCardHeader>
            <CCardBody>
              <CChart type="radar" datasets={radar.datasets} labels={radar.labels}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>*/}
    </>
  )
}

export default Dashboard
