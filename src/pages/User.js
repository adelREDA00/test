import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import logo from '../images/user.svg';

const User = () => {
  const initObj = {
    fname: "",
    lname: "",
    Pbirthday : "",
    Dbirthday: "",
    adresse: "",
    etatCivil: "",
    number: "",
    poids: "",
    Ssante: "",
    cancerType: "",
    job: "",
    DateDiag: "",
    medcinNote: "",
    Sfin: "",
    MdeFam: "",
    NumMdeFam: "",
  }
  const user = useSelector((state) => state.user.value);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(initObj);

  useEffect(()=>{
    async function getData(){
      const res = await fetch(`http://adell.pythonanywhere.com/${user.id}`)
      const test  = await res.json()
      setData(test)
    }
    getData()
  },[user.id])

  const handlSubmit =  async (e)=>{
    e.preventDefault();
    try{

      let res = await fetch(`http://adell.pythonanywhere.com/${user.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (res.status === 200) {
        setData(data)
        setMessage("Updated successfully");
      } else {
        setMessage("Some error occured");
      }

    }catch(err) {
      console.log(err);
    }

  }

  return (
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit Patient</h1>
      <Link to="/newuser">
        <button className="userAddButton">Create</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
            src={logo}
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername"> {data.lname} {data.fname} </span>
            <span className="userShowUserTitle">ID : {data.id}</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Patient Details</span>
          <div className="userShowInfo">
            <PersonOutlineIcon className="userShowIcon" />
            <span className="userShowInfoTitle">{data.job }</span>
          </div>
          <div className="userShowInfo">
            <CalendarTodayIcon className="userShowIcon" />
            <span className="userShowInfoTitle">{data.Dbirthday }</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroidIcon className="userShowIcon" />
            <span className="userShowInfoTitle"> {data.number}</span>
          </div>
          <div className="userShowInfo">
            <LocationOnIcon className="userShowIcon" />
            <span className="userShowInfoTitle">{data.adresse }</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Details</span>

        <form onSubmit={handlSubmit} className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>nom</label>
              <input
                type="text"
                className="userUpdateInput"
                onChange={(e)=>setData({...data, fname: e.target.value})} 
                value={data.fname}
              />
            </div>
            <div className="userUpdateItem">
              <label>Prénom</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, lname: e.target.value})} value={data.lname}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>date de naissance</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, Dbirthday: e.target.value})} value={data.Dbirthday}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>adresse</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, adresse: e.target.value})} value={data.adresse}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>numéro de téléphone</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, number: e.target.value})} value={data.number}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Le poids</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, poids: e.target.value})} value={data.poids} 
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>situation de santé</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, Ssante: e.target.value})} value={data.Ssante}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Travail</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, job: e.target.value})} value={data.job}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>type de cancere</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, cancerType: e.target.value})} value={data.cancerType}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Date de diagnostic</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, DateDiag: e.target.value})} value={data.DateDiag}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>medcin note</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, medcinNote: e.target.value})} value={data.medcinNote}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>membre de la famille</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, MdeFam: e.target.value})} value={data.MdeFam}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>numéro de téléphone du member</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, NumMdeFam: e.target.value})} value={data.NumMdeFam}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>situation financière</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, Sfin: e.target.value})} value={data.Sfin}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>État civil</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, etatCivil: e.target.value})} value={data.etatCivil}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Lieu de naissance</label>
              <input
                type="text"
                onChange={(e)=>setData({...data, Pbirthday : e.target.value})} value={data.Pbirthday }
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <button className="userUpdateButton">Update</button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default User