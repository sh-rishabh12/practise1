import React from 'react';
import TableView from './tableview';
class MultipleAccounts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          accntList: [],
          addedAccounts: [],
          hiddenAccounts: []
        };
      }
    
      componentDidMount() {
        let accounts = this.props.accnts;
        this.setState({ accntList: accounts });
      }
    
    
    
      addAccountHandler = (event, accnt) => {
        let accntList = this.state.accntList;
        let accnt1 = { ...accnt };
        //console.log(accnt1);
        const value = event.target.checked;
        const addedAccountsCopy = this.state.addedAccounts;
        //console.log(value);
        //console.log(addedAccountsCopy);
    
        let index = 0;
        for (let item of accntList) {
          if (item.accountID === accnt.accountID) {
            index = accntList.indexOf(item);
          }
        }
    
        if (value === true) {
          //console.log('inside if');
          let hiddenAccounts = [...this.state.hiddenAccounts];
          var found = hiddenAccounts.findIndex(
            account1 => account1.accountID === accnt.accountID
          );
          if (found !== -1) {
            accntList[index].hide = false;
            hiddenAccounts.splice(found, 1);
          }
    
          accnt1.add = true;
          accntList[index].add = true;
    
          addedAccountsCopy.push(accnt1);
          //console.log('addedAccountsCopy');
          //console.log(addedAccountsCopy);
          this.setState(
            {
              addedAccounts: addedAccountsCopy,
              accntList: accntList,
              hiddenAccounts: hiddenAccounts
            },
            () => console.log(this.state)
          );
    
          //console.log(accntList);
        } else if (value === false) {
          //console.log('inside if of false');
          const index1 = addedAccountsCopy.indexOf(accnt1);
          console.log(index1);
          accnt1.add = false;
          accntList[index].add = false;
          addedAccountsCopy.splice(index1, 1);
          this.setState(
            { addedAccounts: addedAccountsCopy, accntList: accntList },
            () => console.log(this.state)
          );
        }
        console.log("inside add");
        console.log(addedAccountsCopy);
      };
    
      hideAccountHandler = (event, accnt) => {
        let accntList = [...this.state.accntList];
        let accnt1 = { ...accnt };
        //console.log(accnt1);
        const value = event.target.checked;
        const hiddenAccountsCopy = [...this.state.hiddenAccounts];
        //console.log(value);
        //console.log(addedAccountsCopy);
    
        let index = 0;
        for (let item of accntList) {
          if (item.accountID === accnt.accountID) {
            index = accntList.indexOf(item);
          }
        }
    
        if (value === true) {
          let addedAccounts = [...this.state.addedAccounts];
          console.log("addedaccounts");
          console.log(addedAccounts);
    
          var found = addedAccounts.findIndex(
            account1 => account1.accountID === accnt.accountID
          );
          if (found !== -1) {
            accntList[index].add = false;
            addedAccounts.splice(found, 1);
          }
          //console.log('inside if');
          accnt1.hide = true;
          accntList[index].hide = true;
          hiddenAccountsCopy.push(accnt1);
          //console.log('addedAccountsCopy');
          //console.log(addedAccountsCopy);
          this.setState(
            {
              hiddenAccounts: hiddenAccountsCopy,
              accntList: accntList,
              addedAccounts: addedAccounts
            },
            () => console.log(this.state)
          );
          //console.log(accntList);
        } else if (value === false) {
          console.log("inside if of false");
          const index1 = hiddenAccountsCopy.indexOf(accnt1);
          console.log(index1);
          accnt1.hide = false;
          accntList[index].hide = false;
          hiddenAccountsCopy.splice(index1, 1);
          this.setState(
            { hiddenAccounts: hiddenAccountsCopy, accntList: accntList },
            () => console.log(this.state)
          );
        }
    
        console.log(hiddenAccountsCopy);
      };


render(){
    return(
<div>

        <TableView 
         list={this.state.accntList}
         add={this.addAccountHandler}
         hide={this.hideAccountHandler}/>

<button onClick={()=>{this.props.updateAll({...this.state},'Update')}}>Update Accounts List</button>
       <button onClick={()=>{this.props.updateAll({...this.state},'Add')}}>Add all Accounts</button>
       <button onClick={()=>{this.props.updateAll({...this.state},'Hide')}}>Hide all Accounts</button>
</div>

    );
}



}

export default MultipleAccounts;