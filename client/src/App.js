import React,{Component} from "react";
import getWeb3 from "./getWeb3";
import registration from "./contracts/Registration.json";
import MainNavigation from "./components/Navigation/MainNavigation";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewRegistration from "./components/New_Registration/NewRegistration";
import Pending from "./components/pendingRegistrations/Pending"
class App extends Component{
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    Instance: null,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      window.ethereum.on("accountsChanged", (accounts) => {
        this.setState({ accounts });
      });
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = registration.networks[networkId];
      const instance = new web3.eth.Contract(
        registration.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, Instance: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
render(){
  console.log(this.state.Instance)
  return(
    <div>

    <Router>
    <MainNavigation accounts={this.state.accounts} />
    <main>
    <Switch>
      <Route path="/newRegistration" exact>
      <NewRegistration
      instance = {this.state.Instance}
      accounts = {this.state.accounts}
      web3 = {this.state.web3}
        />
      </Route>
      <Route path= "/pending">
      <Pending
      instance = {this.state.Instance}
      accounts = {this.state.accounts}
      web3 = {this.state.web3}
      />
      </Route>
      </Switch>
    </main>
    </Router>



   </div>

 );
}

}

export default App;
