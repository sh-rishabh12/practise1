import React, { Component } from 'react';

class TableView extends React.Component{

render(){
    const list=[...this.props.list];
    //console.log(list);
    return(
        <table>
        <thead>
          <tr>
            <th>ACCOUNT NUMBER</th>
            <th>ADD ACCOUNTS</th>
            <th>HIDE ACCOUNTS</th>             
          </tr>
        </thead>
      <tbody>
        {list.map((accnt,index)=>{
            //console.log(accnt);
            let account={...accnt};
            //console.log(account.accountId);
            return <tr key={index}>
                <th>{account.accountID}</th>
                <th>
                    <input type='checkbox' name='addedAccount' value='add' checked={account.add}
                    onChange={(e)=>this.props.add(e,account)} />
                </th>
                 <th>
                <input type='checkbox' name='hiddenAccount' value='hide' checked={account.hide}
                onChange={(e)=>this.props.hide(e,accnt)} />
                </th> 

            </tr>
        }

        )}
      </tbody>
      </table>


    );
}
}

export default TableView;