import React ,{useEffect,useState} from "react"
import {Form,Button,Grid} from "semantic-ui-react"
import {useParams,Link} from "react-router-dom";
import Submit from "./Button.css"
function ChangeRegistration({instance,accounts,web3}){
  const ind = useParams().Index;
  const[index,setIndex] = useState(ind);
  const[name,setName] = useState();
  const [address,setAddress] = useState();
  const onSubmit = async()=>{
    const temp = await instance.methods.change_registrationproposal(index,name,address).send(
      {
        from :accounts[0],value:web3.utils.toWei("1","ether")
      }
    )
  }
return(<div>
  <Link to={`/`}>
  <button class="ui labeled icon button inactive">
  <i class="left chevron icon"></i>
  Back
  </button>
  </Link>
  <Form onSubmit = {onSubmit}>
  <Form.Field>
    <label>First Name</label>
    <input placeholder='First Name'
    value = {name}
    onChange = {(event)=>{setName(event.target.value)}}
    />
  </Form.Field>
  <Form.Field>
    <label>Buyer Address</label>
    <input placeholder='Last Name'
    value = {address}
    onChange = {(event)=>{setAddress(event.target.value)}}
     />
  </Form.Field>
  <div class = "Submit">
  <Button type='submit' color = 'green'>Submit</Button>
  </div>
</Form>
  </div>
)
}

export default ChangeRegistration;
