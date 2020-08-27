import React, {useEffect ,useState} from "react"
import {  Grid ,Segment,Card,Icon,Button, Search} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function RegisteredCard({instance,accounts,web3,registration}){

  const [reg,setReg] = useState({})
  useEffect(()=>{
    setReg(registration);
  },[])


  console.log(reg)
  if(!reg.Index){
    return(
    <h1>hello</h1>
  )
  }
  else{
  return(<div>
    <Card>
    <Card.Content>
      <Card.Header>{reg.owner_name}</Card.Header>
      <Card.Meta>
        <span className='date'>{}</span>
      </Card.Meta>
      <Card.Description>
        <h4>vehicle_no:</h4>{reg.vehicleno}
      </Card.Description>
      <Card.Description>
          <h4>chassis_no:</h4>{reg.chassis}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Card.Meta>
      <Link to={`/view/${reg.Index}`}>
        <Button secondary>
          view
        </Button>
      </Link>
      </Card.Meta>
    </Card.Content>
  </Card>
    </div>
)
}

}
