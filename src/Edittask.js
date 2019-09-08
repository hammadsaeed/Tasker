import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
//icons
import EditIcon from '@material-ui/icons/EditSharp';

export default function Edittask({editvalues,editTable,confirmEditvalues}) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function checkParentID(){
    if(editvalues.ParentID === null){
      return true;
    }else {
      return false;
    }
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <EditIcon variant="outlined" color="primary" onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change the bottom fields to the desired values, in order to confirm the changes press Confirm button at the bottom.
          </DialogContentText>
          <TextField
            id="ParentID-editTask-input"
            label= {editvalues.ParentID}
            values = {editvalues.ParentID}
            type="number"
            disabled = {checkParentID()}
            onChange={event => editTable("ParentID",event.target.value)}
            fullWidth
          />
          <TextField
            id="Name"
            label= {editvalues.Name}
            values={editvalues.Name}
            onChange={event => editTable("Name",event.target.value)}
            type="text"
            fullWidth
          />
          <TextField
            style={{padding:"0.5em"}}
            id="Description"
            label={editvalues.Description}
            values={editvalues.Description}
            onChange={event => editTable("Description",event.target.value)}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
          onClick={event => confirmEditvalues(editvalues.PrimaryID)}
          color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//<form action="/"  method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.onSubmit(); } }>
/*
<TextField name="email" hintText="Email" />
<TextField name="pwd" type="password" hintText="Password" />
*/
