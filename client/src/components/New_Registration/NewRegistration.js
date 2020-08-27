import React,{useEffect,useState} from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
function NewRegistration({instance,accounts,web3}){
  const [ownername,setownername] = useState("");
  const [vehicletype,setvehicletype] = useState("");
  const [chassis,setchassis] = useState("");

  const onSubmit = async()=>{
    console.log(instance)
    await instance.methods
    .propose_newRegistration(ownername,vehicletype,chassis)
    .send({from:accounts[0],value:web3.utils.toWei("3","ether")});
}
  return(
    <div>
    <Link to={`/`}>
    <button class="ui labeled icon button inactive">
    <i class="left chevron icon"></i>
    Back
    </button>
    </Link>

    <Form onSubmit = {onSubmit}>
    <Form.Field>
    <Form.Input
    placeholder = "ownerName"
    value = {ownername}
    onChange = {(event)=>{setownername(event.target.value)}}
    />
    </Form.Field>
    <Form.Field>
    <Form.Input
    placeholder = "vehicletype"
    value = {vehicletype}
    onChange = {(event)=>{setvehicletype(event.target.value)}}
    />
    </Form.Field>
    <Form.Field>
    <Form.Input
    placeholder = "chassis_no"
    value ={chassis}
    onChange = {(event)=>{setchassis(event.target.value)}}
    />
    </Form.Field>

    <Button color="green" class="ui primary loading button">Register</Button>
    </Form>
    <h3>Note: "3" ether should be paid as registration fee</h3>
    </div>
  )
}

export default NewRegistration;
