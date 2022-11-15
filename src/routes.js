import React from 'react';



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const AllAgents = React.lazy(() => import('./views/agents/AllAgents'))
const AddAgents = React.lazy(() => import('./views/agents/add-new-agents/AddAgents'))
const AllCentreSante = React.lazy(() => import('./views/centre-sante/all-centre-sante/AllCentreSante'))
const AddCentreSante = React.lazy(() => import('./views/centre-sante/add-centre-sante/index'))
const AlertReceipt = React.lazy(() => import('./views/alertes/alertes-receipt/alertes-receipt'))
const AlertSend = React.lazy(() => import('./views/alertes/alertes-send/index'))
const MonCompte = React.lazy(() => import('./views/mon-compte/MonCompte'))
const Statistiques = React.lazy(() => import('./views/statistiques/index'))
const MapsAccident = React.lazy(() => import('./views/maps-accidents/MapsAccident'))
const EditAgent = React.lazy(() => import('./views/agents/edit/EditAgent'))
const InfosAgent = React.lazy(() => import('./views/agents/InfosAgent'))
const MapsPlace = React.lazy(() => import('./views/maps-accidents/MapsAccident'))
const InfosAlertesUser = React.lazy(() => import('./views/alertes/infos/index'))


const routes = [
  { path: '/', exact: true, name: 'Accueil' },
  { path: '/dashboard', name: 'Tableau de bord', component: Dashboard },
  { path: '/agent/agents', name: 'Tous les agents', component: AllAgents, exact: true },
  { path: '/agent/add-agents', name: 'Ajouter un agent', component: AddAgents },
  { path: '/centre-sante/all-centre-sante', name: 'Tous les centres de santé', component: AllCentreSante, exact: true },
  { path: '/centre-sante/add-centre-sante', name: 'Ajouter un centre de santé', component: AddCentreSante, exact: true },
  { path: '/alertes/alertes-receipt', name: 'Utilisateures (Alertes emises)', component: AlertReceipt },
  { path: '/alertes/alertes-send', name: 'Centre de santé (Alertes emises)', component: AlertSend },
  { path: '/alertes/infos/:id', name: 'Informations sur l\'alerte de l\'utilisateur', component: InfosAlertesUser },
  { path: '/mon-compte', name: 'Mon compte', component: MonCompte, exact: true },
  { path: '/statistiques', name: 'Statistiques', component: Statistiques, exact: true },
  { path: '/maps-agents', name: 'Localisation ', component: MapsAccident, exact: true },
  { path: '/agent/edit/:id', name: 'Editer un agent ', component: EditAgent, exact: true },
  { path: '/agent/infos/:id', name: 'Infomrmations sur l\'agent ', component: InfosAgent, exact: true },
  { path: '/maps-agents/:id', name: 'Obtenir le lieu de l\'accident ', component: MapsPlace, exact: true },

];

export default routes;
