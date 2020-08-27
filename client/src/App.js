import React,{Component} from "react";
import getWeb3 from "./getWeb3";
import registration from "./contracts/Registration.json";
import Registered from "./components/Registered_vehicles/Registered"
import View from "./components/Registered_vehicles/View"
import MainNavigation from "./components/Navigation/MainNavigation";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewRegistration from "./components/New_Registration/NewRegistration";
import Pending from "./components/pendingRegistrations/Pending";
import ChangeRegistration from "./components/change_Registration/ChangeRegistration";
class App extends Component{
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    Instance: null
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
  if (!this.state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return(
    <div>

    <Router>
    <MainNavigation accounts={this.state.accounts} />
    <main>
    <Switch>
      <Route path = "/" exact>
        <Registered
        instance = {this.state.Instance}
        accounts = {this.state.accounts}
        web3 = {this.state.web3}
        />
      </Route>
      <Route path="/changeRegistration/:Index" exact>
      <ChangeRegistration
      instance = {this.state.Instance}
      accounts = {this.state.accounts}
      web3 = {this.state.web3}
        />
      </Route>
      <Route path="/newRegistration" exact>
      <NewRegistration
      instance = {this.state.Instance}
      accounts = {this.state.accounts}
      web3 = {this.state.web3}
        />
      </Route>
      <Route path= "/pending" exact>
      <Pending
      instance = {this.state.Instance}
      accounts = {this.state.accounts}
      web3 = {this.state.web3}
      />
      </Route>
      <Route path= "/view/:Index" exact>
      <View
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
