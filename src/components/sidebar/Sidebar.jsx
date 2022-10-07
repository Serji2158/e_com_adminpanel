import "./sidebar.scss"
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// import {
//   InsertChartOutlinedOutlined,
//   ManageAccountsOutlinedIcon,
//   Inventory2OutlinedIcon,
//   CreditCardOutlinedIcon,
//   LocalShippingOutlinedIcon,
//   QueryStatsOutlinedIcon,
//   NotificationsActiveOutlinedIcon,
//   HealthAndSafetyOutlinedIcon,
//   SettingsInputAntennaOutlinedIcon,
//   SettingsOutlinedIcon,
//   ContactPageOutlinedIcon,
//   LogoutOutlinedIcon,
// } from "@mui/icons-material"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../contex/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">LadmyAdmin</span>
        </Link>        
      </div>
      <hr />    
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <InsertChartOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <ManageAccountsOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <Inventory2OutlinedIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          {/* <Link to="/orders" style={{textDecoration:"none"}}> */}
          <li>
            <CreditCardOutlinedIcon className="icon"/>
            <span>Orders</span>
          </li>
          {/* </Link> */}
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <SettingsInputAntennaOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ContactPageOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>  
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"}) }></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      
      </div>
    </div>
  )
}

export default Sidebar