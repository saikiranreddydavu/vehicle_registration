import React, {useEffect ,useState} from "react"
import {  Grid ,Segment,Card,Icon,Button } from "semantic-ui-react";
import Pending from "./Pending";
import Number from "./code/Vehicleno";
function PendingCard({instance,accounts,web3,registration}){
  const [reg,setReg] = useState({})
  const [load,setload] = useState("")
  const [no ,setNo] = useState(0);
  const [word,setWord] = useState("A");
  useEffect(()=>{
    setReg(registration)
    setload(web3.utils.fromWei(registration.amount.toString(),"ether"))
  },[])
  const Reject = async()=>{

    console.log(reg.Index)
    await instance.methods.reject_Registration(reg.Index).send({from : accounts[0]});

}
  const confirm = async()=>{
    try{
      const K = Number(no,word);
      setNo(K[0])
      setWord(K[1])
      const vehicleno = "TS 02 "+K[1] +" "+K[0];
      alert("New vehicle no is:"+vehicleno)
      console.log(vehicleno)
    if(vehicleno!==""){
    await instance.methods.confirm_newRegistration(reg.Index,vehicleno).send({from : accounts[0]});
  }
  else {
    alert("Enter valid registration number")
  }
}
  catch(err){
    alert(err)
  }

  }
  return(<div>
    <Card>
    <Card.Content>
      <Card.Header>{reg.owner_name}</Card.Header>
      <Card.Meta>
        <span className='date'>Amnt paid :{load}Ether</span>
      </Card.Meta>
      <Card.Description>
        <h4>vehicle_type:</h4>{reg.vehicle_type}
      </Card.Description>
      <Card.Description>
          <h4>chassis_no:</h4>{reg.chassis}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {reg.owner}
      </a>
      <Card.Meta>
      <Button primary onClick = {confirm}>Confirm</Button>
      <Button secondary onClick = {Reject}>Reject</Button>
      </Card.Meta>
    </Card.Content>
  </Card>
    </div>
  )
}
export default PendingCard
