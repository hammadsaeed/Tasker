import React,{Component} from 'react';
import './App.css';
import Table from "./Table"
import Navbar from "./Navbar"
import Newtask from "./Newtask.js"
import TextField from '@material-ui/core/TextField';

//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

//import MaterialTable from 'material-table';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { priResponse: [],
                   finalResponse: [],
                   Name:"",
                   ParentID:null,
                   Description:"",
                   collapsedRow: null,
                   query: "",
                   columnToQuery: "Status",
                 };
               }
checkDoneTask=async(fullTask,pID,pStatus)=>{
  if(typeof(fullTask[0]) == 'undefined'){
    console.log(pID)
    changeStatusPar(pID,"Completed")
  }else{
    changeStatusPar(pID,"Done")
}
}

checkTopTask=(fullTask,pID,pStatus)=>{
<<<<<<< HEAD
  fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/all/${fullTask.ParentID}`)
=======
  fetch(`http://localhost:3000/all/${fullTask.ParentID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
    .then(res1 => res1.json())
    .then(function(res1) {
      //1 for the changed task and 1 as there is primary task as well
      var counter = 2
      res1.forEach(function(item,index){
        console.log(item)
      if(item.ParentID === fullTask.ParentID){
        if(item.Status === "Completed"){
          counter+=1
          console.log(counter)
        }}})
  if(counter === res1.length){
  changeStatusPar(fullTask.ParentID,"Completed")
    }})
}

checkCompleteTask=(fullTask,pID,pStatus)=>{
  if(typeof(fullTask[0]) === 'undefined'){
      this.checkTopTask(fullTask,pID,pStatus)
      changeStatusPar(pID,"Completed")
  }else{
    var counter = 1;
    var parentID = fullTask[0].ParentID;
    fullTask.forEach(function(item,index){
      if(item.Status === "Completed"){
        counter+=1
      }
    })
    if(counter === fullTask.length){
<<<<<<< HEAD
    fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/pri/${parentID}`)
      .then(res1=> res1.json())
      .then(function(res1){
        fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${res1[0].ParentID}`)
=======
    fetch(`http://localhost:3000/pri/${parentID}`)
      .then(res1=> res1.json())
      .then(function(res1){
        fetch(`http://localhost:3000/second/${res1[0].ParentID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
          .then(res2=> res2.json())
          .then(function(res2){
            var counter = 0
            console.log(res2)
            res2.forEach(function(item,index){
              if(item.Status === 'Completed'){
                counter+=1
              }
            })
            if(counter === res2.length){
              changeStatusPri(res1[0].ParentID,"Completed")
      }})
    })
      changeStatusPri(parentID,"Completed")
          this.checkTopTask(fullTask,pID,pStatus)
    }else{
      console.log(counter)
    }}
    }

handleCheckboxChange = async(fullTask,pID,pStatus)=>{
  console.log(fullTask)
  if(pStatus === "In Progress"){
<<<<<<< HEAD
    fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/all/${pID}`)
=======
    fetch(`http://localhost:3000/all/${pID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
      .then(res1 => res1.json())
      .then(function(res1) {
        console.log(res1)
// Checking the length if it returns 1 that means no sub tasks
    if(res1.length === 1){
      changeStatusPri(pID,"Completed")
    }else{
      // gets the parent ID of all the tasks under it
      res1.forEach(function(item,index){
        changeStatusPar(item.PrimaryID,"Completed")
      })
    }
  }).then(this.checkCompleteTask(fullTask,pID,pStatus));

}else if(pStatus === "Completed"){
<<<<<<< HEAD
    fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/all/${pID}`)
=======
    fetch(`http://localhost:3000/all/${pID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
      .then(res1 => res1.json())
      .then(function(res1) {

// Checking the length if it returns 1 that means no sub tasks
    if(res1.length === 1){
      changeStatusPri(pID,"In Progress")
      changeStatusPri(res1[0].ParentID,"Done")
<<<<<<< HEAD
    fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/pri/${res1[0].ParentID}`)
=======
    fetch(`http://localhost:3000/pri/${res1[0].ParentID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
      .then(res2 => res2.json())
      .then(function(res2) {
        changeStatusPri(res2[0].ParentID,"Done")
      })
    }else{
      changeStatusPri(fullTask.ParentID,"Done")
      changeStatusPri(pID,"Done")
<<<<<<< HEAD
      fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${pID}`)
=======
      fetch(`http://localhost:3000/second/${pID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
        .then(res2 => res2.json())
        .then(function(res2) {
      res2.forEach(function(item,index){
        changeStatusPri(item.PrimaryID,"In Progress")
<<<<<<< HEAD
      fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${item.PrimaryID}`)
=======
      fetch(`http://localhost:3000/second/${item.PrimaryID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
            .then(res3 => res3.json())
            .then(function(res3) {
              res3.forEach(function(item2,index2){
                changeStatusPri(item2.PrimaryID,"In Progress")
        })
      })
    })
  })
  }
})
  //.then(this.checkDoneTask(fullTask,pID,pStatus));
}else if(pStatus === "Done"){
<<<<<<< HEAD
  fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/all/${pID}`)
=======
  fetch(`http://localhost:3000/all/${pID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
    .then(res1 => res1.json())
    .then(function(res1) {
// Checking the length if it returns 1 that means no sub tasks
  if(res1.length === 1){
    changeStatusPri(pID,"In Progress")
    changeStatusPri(res1.ParentID,"Done")
}else{
  changeStatusPri(fullTask.ParentID,"Done")
<<<<<<< HEAD
fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${fullTask.PrimaryID}`)
=======
fetch(`http://localhost:3000/second/${fullTask.PrimaryID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
  .then(res2 => res2.json())
  .then(function(res2) {
    console.log(res2)
    res2.forEach(function(item,index){
      changeStatusPri(item.PrimaryID,"In Progress")
    })
  })
}
})
}
window.location.reload(true)
}

editTable = (label,data) => {
  if(label === "Name"){
    this.setState({Name: data});
    console.log(this.state.Name)
  }else if(label === "Description"){
    this.setState({Description: data});
  }else if(label === "ParentID")
     this.setState({ParentID: data});
 }


confirmEditvalues= (pId) => {
  console.log(this.state.Description)
  console.log(this.state.Name)
  console.log(this.state.ParentID)
  console.log(pId)
<<<<<<< HEAD
  fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/editTask', {
=======
  fetch('http://localhost:3000/editTask', {
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ParentID: this.state.ParentID,
      Name: this.state.Name,
      Description: this.state.Description,
      PrimaryID: pId
    })
    }).then((result)=> result.json())
    .then((info) =>{console.log(info);})
    window.location.reload(true)
}

  handleOpen= (e,collapsedRow) => {
      this.setState({collapsedRow: collapsedRow});
  };

statusCounter=async(finalData)=> {
  for(var i=0;i<finalData.length;i++){
     var doneCounter =0
     var totalCounter =1
     var completedCounter=0

    if(finalData[i].Pri.Status === "Done"){
      doneCounter += 1;
    } else if(finalData[i].Pri.Status === "Completed"){
      completedCounter +=1;
    }

    finalData[i].Sec.secTask.forEach(function(item,index){
     if(item.Status !== "undefined"){
        totalCounter +=1;
       if(item.Status=== "Done"){
         doneCounter += 1;
       }else if(item.Status=== "Completed"){
         completedCounter +=1;
       }
     }
   })

    for(var j=0;j<finalData[i].Sec.childTask.length;j++){
      finalData[i].Sec.childTask[j].forEach(function(item,index){
          if(item.Status !== "undefined"){
            totalCounter +=1;
            if(item.Status === "Done"){
              doneCounter += 1;
            }else if(item.Status === "Completed")
              completedCounter +=1;
          }
      });
  }
  finalData[i].TaskComp =completedCounter;
  finalData[i].TotalTasks =totalCounter;
  finalData[i].TotalDone =doneCounter;
  this.setState({ finalResponse: finalData});
}
}

callAPI=async()=> {
  var finalData= []
<<<<<<< HEAD
  fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/primain')
=======
  fetch('http://localhost:3000/primain')
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
  .then(result => result.json())
  .then(result =>
    Promise.all(
      result.map(result =>
<<<<<<< HEAD
        fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${result.PrimaryID}`)
=======
        fetch(`http://localhost:3000/second/${result.PrimaryID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
          .then(res1 => res1.json())
          .then(res1 =>
            Promise.all(
              res1.map(res1 =>
<<<<<<< HEAD
                fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${res1.PrimaryID}`)
=======
                fetch(`http://localhost:3000/second/${res1.PrimaryID}`)
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
                  .then(res2 => res2.json())
                )
              )
              .then(secdata=>
                finalData.push({
                "Pri":  result,
                "Sec":  {
                secTask: res1,
                childTask:secdata
              },
                "TasksComp": "",
                "TotalTasks": "",
                "TotalDone": ""
             })
           )
            )
          )
      )
    )
  .then(finalResult => {
    this.setState({ finalResponse: finalData});
    this.statusCounter(finalData);
  });

this.setState({ finalResponse: finalData});
}



componentDidMount() {
    this.callAPI();
}
render(){
  const lowerCaseQuery = this.state.query.toLowerCase();
  return (
  <div style={{width: "100%",margin: "auto"}} className="header-bg-color">

    <Navbar
    searchSubmit={this.searchSubmit}/>

    <Newtask
    />

    <div align="center" >
      <TextField
        style={{verticalAlign: "unset"}}
        value={this.state.query}
        label= "Search"
        type="text"
        onChange={e => this.setState({ query: e.target.value })}
      />
      <select
        style={{color: "#7a6e71",backgroundColor: "transparent",height: "1.8em",borderBlockEndColor:"black" }}
        value={this.state.columnToQuery}
        onChange={(event,value) =>this.setState({ columnToQuery: event.target.value })}
        >

        <option value="Name" >Name</option>
        <option value="Description">Description</option>
        <option value="Status">Status</option>
                  </select>
                </div>
<div style={{margin:"10px"}}>
      <Table
         align="center"
         handleOpen={this.handleOpen}
         collapsedRow={this.state.collapsedRow}
         handleCheckboxChange={this.handleCheckboxChange}
         editTable={this.editTable}
         confirmEditvalues={this.confirmEditvalues}
         handleChangePage={this.handleChangePage}
         handleChangeRowsPerPage={this.handleChangeRowsPerPage}
         header={[
              {
                name: "PrimaryID",
                prop: "PrimaryID"
              },
              {
                name: "Name",
                prop: "Name"
              },
              {
                name: "Description",
                prop: "Description"
              },
              {
                name: "Status",
                prop: "Status"
              }
            ]}
          data={ this.state.query
                ? this.state.finalResponse.filter(x =>
                    x.Pri[this.state.columnToQuery]
                    .toLowerCase()
                      .includes(lowerCaseQuery)
                  )
                :this.state.finalResponse}
         />

         </div>
         <footer style={{padding: "2.8em",height: "100%"}}/>
    </div>


  );
}
}
const changeStatusPar = ({idget,status})=> {
<<<<<<< HEAD
  fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/changeStatus-Par', {
=======
  fetch('http://localhost:3000/changeStatus-Par', {
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    PrimaryID: idget,
    Status: status
  })
})
}

const changeStatusPri = (idget,status)=>{
<<<<<<< HEAD
  fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/changeStatus-Pri', {
=======
  fetch('http://localhost:3000/changeStatus-Pri', {
>>>>>>> b928289afe858df9a1eff5c5d0b61dfa33d2d9b2
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    PrimaryID: idget,
    Status: status
  })
})
}

export default App;
