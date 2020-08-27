import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import {Button} from "semantic-ui-react"
import changereg from "./Searchbar.css"
export default function View({instance,accounts,web3}){
  const ind = useParams().Index
  const [index ,setIndex] = useState();
  const [userdata,setData] = useState({});
  useEffect(()=>{
    setIndex(ind)
    console.log(ind)
    const load = async()=>{
      const temp = await instance.methods.registration(ind).call();
      setData(temp);
    }
    load()
  },[])

  return(
    <div>
    <div>
    <Link to={`/`}>
    <button class="ui labeled icon button inactive">
    <i class="left chevron icon"></i>
    Back
    </button>
    </Link>
    </div>
    <div style={{clear: "both"}}>
    <h1> vehicle_owner : <span style = {{color:"red",float:"center"}}>{userdata.owner_name}</span> </h1>
    <h1> vehicle_no : <span style = {{color:"red",float:"center"}}>{userdata.vehicleno}</span> </h1>
    <h1> vehicle_type : <span style = {{color:"red",float:"center"}}>{userdata.vehicle_type}</span> </h1>
    <h1> vehicle_hand_no : <span style = {{color:"red",float:"center"}}>{userdata.hand}</span> </h1>
    <h1> chassis_no : <span style = {{color:"red",float:"center"}}>{userdata.chassis}</span> </h1>
    <h1> owner_address : <span style = {{color:"red",float:"center"}}>{userdata.owner}</span> </h1>
    </div>

    <Link to={`/ChangeRegistration/${index}`}>
    <div class = "changereg">
    <Button primary>
      ChangeRegistration
    </Button>
    </div>
    </Link>
    </div>
  )
}
