import React, { Component } from "react";
import MultipleAccounts from "./multipleAccounts";
import "./App.css";

class C9Modal extends Component {
  
updateList=(accntList,flag)=>{
    //console.log('inside modal');
    //console.log(accntList);
    //console.log(flag);
    let check=0;
    let accntList1=[...accntList.accntList];
    for(let item of accntList1){
      let item1={...item}
     // console.log(item1);
      if(item1.add===false && item1.hide===false){
        check=-1;
        alert(`One of the options needs to be selected for every option shown`);
        return;
      }
    }
    
    //console.log('inside update of modal');
    this.props.updateProfile({...accntList},flag);
    //this.props.updateAll(accntList,flag);

}

  render() {
     // console.log(this.props.accounts);
    return (
      <div>
        <MultipleAccounts accnts={this.props.accounts}
        updateAll={this.updateList}
         
        />
      </div>
    );
  }
}

export default C9Modal;
