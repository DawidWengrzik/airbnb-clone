import './AdminPanelSites/index-admin.css'
import {Outlet} from 'react-router-dom';
import Header from '../Components/Header';


const AdminPanel = () => {
  return (
    <div className='container-admin'>
      <Header />
      <Outlet /> 
    </div>
  )
}

export default AdminPanel