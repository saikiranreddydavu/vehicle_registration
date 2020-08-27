// import React,{ useEffect,useState,Component } from "react";
// import {Form,Button,Search,Grid,Header,Segment} from "semantic-ui-react";
// import search from "./Searchbar.css";
// import regcode from "./code/Registrationscode"
// import RegisteredCard from "./RegisteredCard"
// function Searchdata({instance,accounts,web3}){
//   const[result,setResult] = useState();
//   const[reg,setreg] = useState({});
//   const[registrations,setRegistrations] = useState([]);
//   const [filteredRegistrations,setFilteredRegistrations] = useState([])
//   useEffect(()=>{
//       const k = regcode(instance,accounts,web3)
//       setRegistrations(k);
//       console.log(k)
//
//   },[])
//   useEffect(() => {
//     setFilteredRegistrations(
//       registrations.filter((registration) =>
//         registration.vehicleno.toLowerCase().includes(result.toLowerCase())
//       )
//
//     );
//   }, [result, registrations]);
//   return (
//     <div class = "search">
//     <Search
//     value = {result}
//     onSearchChange = {(event)=>{setResult(event.target.value)}}
//     results = {filteredRegistrations}
//     />
//     <h1>Search result:</h1>
//     {filteredRegistrations.map((reg)=>{
//       return(
//       <RegisteredCard
//       instance = {instance}
//       accounts = {accounts}
//       web3 = {web3}
//       registration = {reg}
//       />
//     )
//     })
//   }
//   </div>
//
//   )
//
// }
//
// export default Searchdata;
// class Searchdata extends Component{
//   state = {
//     result : "",
//     reg : {},
//     registrations : []
//   }
//   componentDidMount(){
//     const registrations = regcode(this.props.instance,this.props.accounts,this.props.web3);
//     this.setState(registrations)
//   };
//   async function submit1(){
//       this.state.registrations.map((re)=>{
//         if(result === re.vehicleno){
//             this.setState(reg:re)
//             console.log(re)
//         }
//       })
//
//     }
//
//     render(){
//
//       return(
//         <div class = "search">
//             <Search
//             value = {result}
//             onClick = {this.submit1}
//             onSearchChange = {(event)=>{this.setState(event.target.value)}}
//             />
//             <RegisteredCard
//             instance = {instance}
//             accounts = {accounts}
//             web3 = {web3}
//             registration = {reg}
//             />
//           </div>
//       )
//     }
// }
