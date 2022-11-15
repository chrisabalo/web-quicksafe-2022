import React, {useEffect, useRef, useState} from 'react'
import {
  CAlert,
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from "moment";
import {API_BASE_URL, SOCKET} from "../models";
import * as Swal from "sweetalert2";


const TheHeaderDropdownMssg = () => {
  const [itemCount, setItemCount] = useState(0);
  const [alert, setAlert] = useState([]);
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [read, setRead] = useState(false);
  const [alertData, setAlertData] = useState([]);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  SOCKET.on('sendData', data => {
    console.log(' data accident received to phone ', data)
    let newAlert = data;
    setAlert(newAlert)
    setItemCount(  itemCount + 1)
    const Toast = Swal.mixin({
      toast: true,
      loaderHtml: ' Patientez svp ...',
      position: 'bottom-end',
      showConfirmButton: false,
      showCloseButton: true,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Nouvelle alerte',
      text: `Gravité de l'accident: ${data.gravity}, Nombre d'engins: ${data.engin}, ${moment(`${data.created_at}`).fromNow()} `
    })
  })
  const get_alert_limit_5 = async () => {
    await API_BASE_URL.get('accidents/alertes/limit').then( res => {
      let data = res.data.data;
      console.log("limit alertes", data);
      setAlertData(data);
    }).catch( e => {
      console.log(e)
    })
  }
  const readOnlyMessage = () => {
    return (
       setItemCount( itemCount - 1)
    );
  }
  const readAllMessage = () => {
    return (
      setRead(true),
        setItemCount(0)
    );
  }
  useEffect(() => {
    get_alert_limit_5()
  }, [])
  console.log('data alerte', alertData)
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >

      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-envelope-open"/><CBadge shape="pill" color="info">{itemCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
        >

          <strong>
            {
              itemCount === 0 ? ` Aucun message reçu` : itemCount === 1 ? ` Vous avez reçu ${itemCount} nouveau message` : ` Vous avez reçu ${itemCount} nouveaux messages`
            }
          </strong>
        </CDropdownItem>
        {
          alertData.length > 0
            &&
            <CDropdownItem onClick={() => readOnlyMessage()} to="/alertes/alertes-receipt">
              {
                itemCount === 0
                  ?
                  (
                    <div className="small text-muted text-truncate">
                      Aucun message reçu pour le moment
                    </div>
                  ) :

                  (

                    <div className="message">
                      <div className="pt-3 mr-3 float-left">
                        <div className="c-avatar border-dark">
                          {/* <CImg
                                      src={'avatars/7.jpg'}
                                      className="c-avatar-img"
                                      alt="admin@bootstrapmaster.com"
                                    />
                      {alerte.nomuser.charAt(0)+''+alerte.prenomuser.charAt(0)}*/}
                          <i className="fa fa-bell-o"></i>
                          <span className="c-avatar-status bg-success"></span>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted p-3 ">  </small>
                        <small className="text-muted float-right mt-1">{moment(`${alert.created_at}`).fromNow()}</small>
                      </div>
                      <div className="text-truncate font-weight-bold">
                        <span className="fa fa-exclamation text-danger"> </span>
                        Gravité : {alert.gravity}, Nombre d'egnins : {alert.engin}
                      </div>
                      <div className="small text-muted text-truncate">
                        Un accident vient d'etre signaler à la latitude : {alert.lat}
                      </div>
                    </div>
                  )
              }
            </CDropdownItem>
        }
        { alertData.map((alertes, index) =>
          (
            <CDropdownItem onClick={() => readOnlyMessage()} to={`/maps-agents/${alertes.idaccident}`} >
              <div className="message">
                <div className="pt-3 mr-3 float-left">
                  <div className="c-avatar border-danger">
                    <i className="fa fa-bell-o "></i>
                    <span className="c-avatar-status bg-danger"></span>
                  </div>
                </div>
                <div>
                  <small className="text-muted">{alertes.nomuser}</small>
                  <small className="text-muted float-right mt-1">{moment(`${alertes.dateaccident}`).format('HH:mm')}</small>
                </div>
                <div className="text-truncate font-weight-bold">
                  Gravité : {alertes.graviteaccident}, Nombre d'egnins : {alertes.nombredengins}
                </div>
                <div className="small text-muted text-truncate">
                  Un accident a été signaler à la latitude : {alertes.lataccident}, longitude : {alertes.longaccident}
                </div>
              </div>
            </CDropdownItem>
          )
        )}

        <CDropdownItem onClick={() => readAllMessage()} to="/alertes/alertes-receipt" className="text-center border-top"><strong>Voir tous les
          messages</strong></CDropdownItem>
      </CDropdownMenu>
    </CDropdown>

  )
}

export default TheHeaderDropdownMssg
