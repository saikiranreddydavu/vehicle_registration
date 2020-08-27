import React,{ useEffect,useState } from "react";
import {Form,Button,Search,Grid,Header,Segment} from "semantic-ui-react"
import RegisteredCard from "./RegisteredCard"
import {Link} from "react-router-dom";
import search from "./Searchbar.css";
import Searchdata from "./Search.js";
import regcode from "./code/Registrationscode"
function Registered({instance,accounts,web3}){
  const[result,setResult] = useState();
  const[reg,setreg] = useState({});
  const[registrations,setRegistrations] = useState([]);
  const [filteredRegistrations,setFilteredRegistrations] = useState([])

  useEffect(()=>{
      const k = regcode(instance,accounts,web3)
      setRegistrations(k);
      setFilteredRegistrations(k)
      console.log(k)

  },[])
  useEffect(() => {
    setFilteredRegistrations(
      registrations.filter((registration) =>
        registration.owner_name.toLowerCase().includes(result.toLowerCase())

      )
    );
    console.log(filteredRegistrations)
  }, [result, registrations]);

  return (
    <div>
    <Link to={`/newRegistration`}>
        <div class="ui teal labeled icon button">
        New Registration
        <i class="add icon"></i>
        </div>
    </Link>
    <Search
    value = {result}
    onSearchChange = {(event)=>{setResult(event.target.value)}}
    results = {filteredRegistrations}
    />
      <h1>Registered vehicles:</h1>
    <Grid>
    <Grid.Row columns = {4} divided >
      {
      filteredRegistrations.map((reg)=>{
        if(reg.pending === false){
        return(
          <Grid.Column>
        <RegisteredCard
        instance = {instance}
        accounts = {accounts}
        web3 = {web3}
        registration = {reg}
        />
        </Grid.Column>
      )}
    })
  }
    </Grid.Row>

</Grid>
    </div>
  )
}

export default Registered;
