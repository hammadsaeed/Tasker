import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/EditSharp';


const INITIAL_STATE = {
  ParentID: null,
  Name: '',
  Description: '',
  error: null,
};


class Newtask extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE,
    allData: this.props,
    acceptableIds: [],
    };
  }
  getAcceptableIds=async()=> {
    var aID=[]
    fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/primain')
      .then((result)=> result.json())
      .then(result =>
        Promise.all(
          result.map(result1 =>
            fetch(`http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/second/${result1.PrimaryID}`)
              .then(res1 => res1.json())
              .then(res1 =>
                res1.forEach(function(item,index){
                  aID.push(item.PrimaryID)
                    })
                    )
                  )
                )
                )
      fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/primain')
        .then((result)=> result.json())
          .then(result =>
            result.forEach(function(item,index){
              aID.push(item.PrimaryID)
            }))
        aID.push(0)
        aID.sort()
        this.setState({acceptableIds :aID})
    //    console.log(aID)
    }

  onSubmit = (event) => {
   const {
     Name,
     Description,
   } = this.state;

   fetch('http://ec2-13-229-92-125.ap-southeast-1.compute.amazonaws.com:3000/create', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       ParentID: this.state.ParentID,
       Name: this.state.Name,
       Description: this.state.Description,
       Status: "In Progress"
     })
     })
     .then((result)=> result.json())
     .then((info) =>{console.log(info);})
     window.location.reload(true)
   event.preventDefault();
 }

 componentDidMount() {
     this.getAcceptableIds();
 }
  render() {
    const {
      Name,
      Description,
    } = this.state;
    const isInvalid =
      Name === '' ||
      Description === '' ;

      const updateByPropertyName = (propertyName, value) => () => ({
        [propertyName]: value,
      });


    return (
      <div align="center" style={{ padding:20}}>
        <form action="/"  method="POST" onSubmit={this.onSubmit}>
        <label style={{color: "#7a6e71",display: "inline",lineHeight:"4.6em",
        position: "relative",borderBlockEndColor: "inherit"}}> ParentID (Optional) </label>
        <select
        style={{height: "40px" , backgroundColor: "transparent",display: "inline-flex" ,paddingTop: "2px",
        position: "relative",borderBlockEndColor: "inherit"}}
        onChange={event => this.setState(updateByPropertyName("ParentID", event.target.value))}
        >
        {this.state.acceptableIds.map((name,index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
          </select>
          <TextField
          style={{margin: "0.5em"}}
            id="Name"
            label="Name"
            value={Name}
            onChange={event => this.setState(updateByPropertyName("Name", event.target.value))}
            type="text"
          />
          <TextField
            style={{margin: "0.5em"}}
            id="Description"
            label="Description"
            value={Description}
            onChange={event => this.setState(updateByPropertyName('Description', event.target.value))}
            type="text"
          />
          <Button style={{paddingTop:"1em"}} disabled={isInvalid} type="submit">
          <CreateIcon style={{padding:"2"}}/>
          Create a new task
          </Button>
        </form>

        </div>
    );
  }
}

export default Newtask;
//<form action="/"  method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.onSubmit(); } }>
/*
<TextField name="email" hintText="Email" />
<TextField name="pwd" type="password" hintText="Password" />
*/
/*
<TextField
  style={{margin: "0.5em"}}
  id="ParentID"
  label="ParentID (Optional)"
  selectBoxOptions={this.state.acceptableIds}
  type="number"
  onChange={event => this.setState(updateByPropertyName("ParentID", event.target.value))}
/>
*/
