function regcode(instance,accounts,web3){
  let proposals = []
  const load = async()=>{
    const ind = await instance.methods.index().call();
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

}
load();
return(proposals);
}
export default regcode;
