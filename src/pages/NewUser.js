import { useState } from "react";

const NewUser = () => {
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
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(initObj)

  const handlSubmit =  async (e)=>{
    e.preventDefault();
    try{
     let res = await fetch("https://adell.pythonanywhere.com/pass", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (res.status === 200) {
        setFormData(initObj)
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }

    }catch(err) {
      console.log(err);
    }

  }



  return (
    <div  className="newUser">
    <h1 className="newUserTitle">New Patient</h1>  <div className="message">{message ? <p>{message}</p> : null}</div>
    <form onSubmit={handlSubmit}  className="newUserForm">
      <div className="newUserItem">
        <label>Nom</label>
        <input onChange={(e)=>setFormData({...formData, fname: e.target.value})} value={formData.fname}  name="fname" type="text" placeholder="Adel" />
      </div>
      <div className="newUserItem">
        <label>Prénom</label>
        <input onChange={(e)=>setFormData({...formData, lname: e.target.value})} value={formData.lname} name="lname" type="text" placeholder="Adel toumi" />
      </div>
      <div className="newUserItem">
        <label>date de naissance</label>
        <input onChange={(e)=>setFormData({...formData, Dbirthday: e.target.value})} value={formData.Dbirthday} name="Dbirthday" type="text" placeholder="XX/XX/XXX" />
      </div>
      <div className="newUserItem">
        <label>adresse</label>
        <input onChange={(e)=>setFormData({...formData, adresse: e.target.value})} value={formData.adresse} type="text" name="adresse"  placeholder="Annaba"  />
      </div>
      <div className="newUserItem">
        <label>numéro de téléphone</label>
        <input onChange={(e)=>setFormData({...formData, number: e.target.value})} value={formData.number}  name="number" type="text" placeholder="+1 123 456 78" />
      </div>
      <div className="newUserItem">
        <label>Le poids</label>
        <input onChange={(e)=>setFormData({...formData, poids: e.target.value})} value={formData.poids}  name="poids" type="text" placeholder="85kg" />
      </div>
      <div className="newUserItem">
        <label>situation de santé</label>
        <input onChange={(e)=>setFormData({...formData, Ssante: e.target.value})} value={formData.Ssante} name="Ssante" type="text" placeholder="Bonne" />
      </div>
      <div className="newUserItem">
        <label>Travail</label>
        <input onChange={(e)=>setFormData({...formData, job: e.target.value})} value={formData.job} name="job" type="text" placeholder="Etudiant" />
      </div>
      <div className="newUserItem">
        <label>type de cancer</label>
        <input onChange={(e)=>setFormData({...formData, cancerType: e.target.value})} value={formData.cancerType} name="cancerType" type="text" placeholder="sang" />
      </div>
      <div className="newUserItem">
        <label>Date de diagnostic </label>
        <input onChange={(e)=>setFormData({...formData, DateDiag: e.target.value})} value={formData.DateDiag} name="DateDiag"  type="text" placeholder="XX/XX/XXX" />
      </div>
      <div className="newUserItem">
        <label>medcin note</label>
        <input onChange={(e)=>setFormData({...formData, medcinNote: e.target.value})} value={formData.medcinNote} name="medcin note"  type="text" placeholder="Doctor Notes" />
      </div>
      <div className="newUserItem">
        <label>membre de la famille</label>
        <input onChange={(e)=>setFormData({...formData, MdeFam: e.target.value})} value={formData.MdeFam} name="MdeFam" type="text" placeholder="YYY membre" />
      </div>
      <div className="newUserItem">
        <label>numéro </label>
        <input onChange={(e)=>setFormData({...formData, NumMdeFam: e.target.value})} value={formData.NumMdeFam} name="NumMdeFam" type="text" placeholder="+1 123 456 78" />
      </div>
      <div className="newUserItem">
        <label>situation financière</label>
        <input onChange={(e)=>setFormData({...formData, Sfin: e.target.value})} value={formData.Sfin} name="Sfin" type="text" placeholder="Moyenne" />
      </div>
      <div className="newUserItem">
        <label>État civil</label>
        <input onChange={(e)=>setFormData({...formData, etatCivil: e.target.value})} value={formData.etatCivil} name="etatCivil" type="text" placeholder="Celibataire" />
      </div>
      <div className="newUserItem">
        <label>Lieu de naissance</label>
        <input onChange={(e)=>setFormData({...formData, Pbirthday : e.target.value})} value={formData.Pbirthday } name="Pbirthday " type="text" placeholder="Annaba" />
      </div>
      <button type="submit"  className="newUserButton">CREATE</button>
      <button type="reset"  className="newUserButton reset">RESET</button>
    </form>
  </div>
  )
}

export default NewUser