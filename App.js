import React, { Component } from 'react';
import C9Modal from './c9Modal';
import './App.css';
import Page from './redirectedPage';
class App extends Component {

constructor(props){
  super(props);
  this.state={
      accntList:[
        {accountID:1224,
        add:false,
        hide:false
      },
    //   {accountID:45456,
    //       add:false,
    //       hide:false
    //  },
    //  {accountID:756,
    //         add:false,
    //         hide:false
    //  },
    //  {accountID:5678,
    //           add:false,
    //           hide:false
    //  },
    //  {accountID:9876,
    //             add:false,
    //             hide:false
    //  },
    //  {accountID:345,
    //               add:false,
    //               hide:false
    //  }

        ]
     
  
      }
  
}



  updateProfile=(accntList1,flag)=>{
    let addedAccounts=[...accntList1.addedAccounts];
    let done=false;
    //console.log('addedAccounts');
    //console.log(addedAccounts);
    let hiddenAccounts=[...accntList1.hiddenAccounts];
    let accntList=[...accntList1.accntList];
    console.log(accntList);
    for(let item of accntList){
        if(flag==='Update'){
          console.log(accntList);
        done=true;
        }else if(flag==='Add'){
          console.log(addedAccounts);
        }else if(flag==='Hide'){
       }   console.log(`accounts hidden ${hiddenAccounts}`);
      }
      if(done){
        console.log('a');
       // console.log(url);
        // a=<Page/>;
       // console.log(window.location);
        //';
      
        }
    }
  

  render() {


    return (
        <div>
          <C9Modal accounts={[...this.state.accntList]}
                    updateProfile={this.updateProfile}
          
          />
         
          
          </div>
    );
  }
}

export default App;
