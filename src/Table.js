import React from "react";
import {  lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import {Table,TableBody} from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemText from '@material-ui/core/ListItemText';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import Edittask from "./Edittask"
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//icons
import EditIcon from '@material-ui/icons/EditSharp';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten('#d1dff4', .3),
  },
  bar: {
    borderRadius: 1,
    backgroundColor: '#d1dff4',
  },
})(LinearProgress);



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));
const stringConverter=(data1)=>{
  return Number(data1)
}

const stringConverterAdder=(data1,data2,data3)=>{
  var data= Number(data1)+ Number(data2)+Number(data3);
  return data
}


export default function MainTable({editTable,confirmEditvalues,collapsedRow,data,header,handleOpen,handleCheckboxChange}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const normalise = (value,min,max) => (value - min) * 100 / (max - min);

  function handleClick() {
  setOpen(!open);
}
function handleChangePage(event, newPage) {
   setPage(newPage);
 }
 function handleChangeRowsPerPage(event) {
   setRowsPerPage(+event.target.value);
   setPage(0);
 }

  return (
<div className={classes.root}>
  <Paper className={classes.paper}>
  <Table >
  <TableHead>
      <TableRow style={{ cursor: "pointer" }}>
      <TableCell>
      <Checkbox
       defaultChecked
       color="default"
       value="checked"
       inputProps={{
         'aria-label': 'checkbox with default color',
       }}
     />
      </TableCell>
        {header.map((x, i) =>
          <TableCell key={`thc-${i}`} style={{fontWeight: "bold", fontSize: "13px"}}>
            {x.name}
          </TableCell>
        )}
        <TableCell ><EditIcon/></TableCell>
      </TableRow>
</TableHead>

      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((y, k) =>

      <TableBody key={`trc-${k}`}>
      <TableRow  style={{ cursor: "pointer" }}>
      <TableCell><Checkbox
        color="default"
        defaultChecked={(y.Pri.Status !== "In Progress" )}
        onChange={e => handleCheckboxChange(y,y.Pri.PrimaryID,y.Pri.Status)}
      /></TableCell>
      <TableCell style={{fontSize:"1.25rem"}} >{y.Pri.PrimaryID}</TableCell>
      <TableCell >
      {y.Pri.Name}
      </TableCell>
      <TableCell>
      {y.Pri.Description}
       </TableCell>
      <TableCell >{y.Pri.Status}</TableCell>
      <TableCell>
      <Edittask
      editvalues={y.Pri}
      editTable={editTable}
      confirmEditvalues={confirmEditvalues}/>
      </TableCell>
      </TableRow>
      <TableRow style={{cursor: "pointer",border:".1px",paddingBottom: 0, paddingTop: 0,height: ".6px" }}>
      <TableCell onClick={e => handleOpen(e,y.Pri.PrimaryID)} colSpan={9}>

      <BorderLinearProgress
        className={classes.margin}
        variant='determinate'
        color="secondary"
        value={normalise(y.TaskComp+ y.TotalDone,0,y.TotalTasks)}
      />
      <h6 style={{marginTop:".5em"}}>Show ChildTasks</h6>
      <Collapse
      style={{padding: "0em"}}
      in={collapsedRow === y.Pri.PrimaryID}
      timeout="auto"
      unmountOnExit>

      {y.Sec.secTask.map((secT, i) =>
      <List
      key={`thc-${i}`}
      style={{flexdirection: "column",width:"60%",float: "left",padding: "0em"}}
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItem alignItems="flex-start"
      button onClick={handleClick}>
      <ListItemAvatar>
      <Avatar style={{backgroundColor: "transparent",color:"#000000",fontSize: "1rem"}}>
      {secT.PrimaryID}
      </Avatar>
      </ListItemAvatar>
        <ListItemIcon>
        <Checkbox
          color="default"
          defaultChecked={(secT.Status !== "In Progress" )}
          onChange={e => handleCheckboxChange(secT,secT.PrimaryID,secT.Status)}
        />
        </ListItemIcon>
      <ListItemText primary={` ${secT.Name}  ${secT.Status}`}
        secondary={<React.Fragment>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {secT.Status}
          </Typography>
          {" — "}
          {secT.Description}
        </React.Fragment>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemSecondaryAction edge="end"  style={{position:"absolute"}}>
          <Edittask
          editvalues={secT}
          editTable={editTable}
          confirmEditvalues={confirmEditvalues}/>
          </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit
      className={classes.root}
      style={{padding: "0em"}}>
      {y.Sec.childTask.map((childTest, ii) =>
        <List key={`thc-${ii}`}
          style={{padding: "0em"}}
        component="div" disablePadding>
        {y.Sec.childTask[ii].map((childT, iii) =>
        <ListItem key={`thc-${iii}`} style={{padding: "2px"}}>
          {childT.ParentID ===  secT.PrimaryID &&
              <div>
                    <ListItemAvatar style={{flexdirection: "column",float:"left"}}>
                    <Avatar style={{backgroundColor: "transparent",color:"#000000",fontSize: ".75rem"}}>
                    {childT.PrimaryID}
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemIcon style={{flexdirection: "column",float:"left"}}>
                    <Checkbox
                      color="default"
                      defaultChecked={(childT.Status !== "In Progress" )}
                      onChange={e => handleCheckboxChange(childTest,childT.PrimaryID,childT.Status)}
                    />
                    </ListItemIcon>
            <ListItemText style={{flexdirection: "column",float:"left"}}
            primary={` ${childT.Name}`}
            secondary={<React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {childT.Status}
              </Typography>
              {" — "}
              {childT.Description}
            </React.Fragment>}
            />
            <ListItemSecondaryAction>
            <Edittask
            editvalues={childT}
            editTable={editTable}
            confirmEditvalues={confirmEditvalues}/>
            </ListItemSecondaryAction>
          </div>
          }
        </ListItem>

    )}
        </List>
      )}
</Collapse>
    </List>
)}
<div tyle={{justifyContent:"center",alignItem:"center"}}>
<ReactMinimalPieChart
style={{display: "flex",width: "25%",paddingLeft:"9%"}}
data={[
   {
     title: 'Completed',
     value: stringConverter(y.TaskComp),
     color: '#8fd0a8'
   },
   {
     title: 'Done',
     value: stringConverter(y.TotalDone),
     color: '#f4bd87'
   },
   {
     title: 'Total Tasks',
     value: stringConverter(y.TotalTasks),
     color: '#ea6c62'
   }
 ]}
 lineWidth={20}
 paddingAngle={5}
 lengthAngle={-360}
 label
 animate
 totalValue ={stringConverterAdder(y.TotalTasks , y.TotalDone ,y.TaskComp)}
 labelPosition={55}
/>
</div>
      </Collapse>

      </TableCell>
      </TableRow>
      </TableBody>
    )}

  </Table>
  <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
              'aria-label': 'next page',
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
  </Paper>

  </div>


)}
