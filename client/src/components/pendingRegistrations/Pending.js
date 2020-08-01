import React,{useEffect,useState} from "react"
import {Form,Button} from "semantic-ui-react"
function Pending({instance,accounts,web3}){
  const [owner,setOwner] = useState();


  useEffect(()=>{
    async function load1(){
      const k = await instance.methods.owner().call();
      setOwner(k);

    };
    load1();
  },[])

  console.log(instance)
  console.log(owner)


  return(
    <h1>hii</h1>
  );
}
export default Pending;
