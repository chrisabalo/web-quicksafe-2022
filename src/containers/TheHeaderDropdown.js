import React, {useContext, useEffect, useState} from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {AuthContext} from "../navigation/AuthProvider";
import {toast} from "react-toastify";
import {API_BASE_URL} from "../models";

const TheHeaderDropdown = () => {

  const { user, setUser, logout} = useContext(AuthContext);
  const [totalAccident, setTotalAccident] = useState(0);
  const logoutHandle = async () => {

    setTimeout(() => {
      toast.info(" Vous vous etes deconnecté ....")
      logout()
    }, 2000)

  }
  const data = localStorage.getItem("loginData");
  const users = JSON.parse(data);
  console.log("users data : " + users.data.nomuser);
  const name = users.data.nomuser;
  const prenom = users.data.prenomuser;
  const adresse = users.data.adresseuser;
  const email = users.data.emailuser;
  const telephone = users.data.telephoneuser;
  const groupesanguin = users.data.groupesanguin;
  const personeacontacter = users.data.personeacontacter;
  const usertype = users.data.usertype;


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
  useEffect(() => {
    try {
      GET_TOTAL_NUMBERS_ACCIDENT();
    }catch (e) {
      console.log(e)
    }
  }, []);


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar border-dark text-uppercase text-center ">
          {prenom[0]+''+name[0]}
        </div>
      </CDropdownToggle>
      <CDropdownMenu to="/dashboard" className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center pb-0 justify-content-center align-items-center"
        >
          <strong>Mon compte</strong>
        </CDropdownItem>
       {/* <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>*/}
       {/* <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>*/}
      {/*  <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>*/}
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
         {/* <strong>Settings</strong>*/}
        </CDropdownItem>
        <CDropdownItem to="/mon-compte">
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem to="/alertes/alertes-receipt">
          <CIcon name="cil-bell" className="mfe-2" />
            Alertes
          <CBadge color="danger" className="mfs-auto">{totalAccident}</CBadge>
        </CDropdownItem>
       {/* <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>*/}
        {/*<CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>*/}
        <CDropdownItem divider />
        <CDropdownItem onClick={() => logoutHandle()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Fermer le compte
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
