import React,{useEffect,useState} from "react"
import {Form,Button,Search,Grid,Header,Segment} from "semantic-ui-react"
import  PendingCard from "./PendingCard";
function Pending({instance,accounts,web3}){
  const [registrations,setRegistrations] = useState([]);
  const [index,setIndex] = useState();

 useEffect(()=>{
   const load = async ()=>{
     if(instance!==null){
       let proposals = []
     const ind = await instance.methods.index().call();
     setIndex(ind)
     for(let i = 1; i<=ind;i++){
       const reg = await instance.methods.registration(i).call();
       proposals.push(
         {
           owner : reg[0],
           hand : reg[1],
           vehicleno : reg[2],
           owner_name : reg[3],
           vehicle_type : reg[4],
           chassis : reg[5],
           pending : reg[6],
           Index : reg[7],
           amount : reg[8],
           reject :reg[9]
         });
     }
     setRegistrations(proposals);
     console.log("hi")
   }
   }
 load()
 },[])
  return(
    <div>

    <Grid>
    <Grid.Row columns = {4} divided >
      {
      registrations.map((reg)=>{
        if(reg.pending === true && reg.reject === false){
        return(
          <Grid.Column>
        <PendingCard
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
  );

}
export default Pending;
