import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

function SideBar() {
  const active = (e)=>{
    const li = document.querySelectorAll(".sidebarListItem")
    li.forEach(x=>{
      x.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }





  return (
    <div className="sidebar">
    <div className="sidebarWrapper">

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>

        <ul className="sidebarList">
          <Link className='link' to="/">
          <li onClick={active} className="sidebarListItem active">
           <HomeIcon />
           <span>Home</span>
          </li>
          </Link>
          <Link className='link' to="/data">
          <li onClick={active} className="sidebarListItem">
          <DashboardIcon />
             <span>Data</span>
          </li>
          </Link>
          <Link className='link' to="/newuser">
          <li onClick={active}  className="sidebarListItem">
          <PersonAddAltIcon />
          <span>Add</span>
          </li>
          </Link>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
         
            <li onClick={active} className="sidebarListItem">
             
              Users
            </li>
       
          
            <li onClick={active} className="sidebarListItem">
              
              Products
            </li>
         
          <li onClick={active} className="sidebarListItem">
          
            Transactions
          </li>
          <li onClick={active} className="sidebarListItem">
          
            Reports
          </li>
        </ul>
      </div>

      </div>
      </div>

      
  )
}

export default SideBar