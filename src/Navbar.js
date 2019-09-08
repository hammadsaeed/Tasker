import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LogoTasker from './logo.png'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({searchSubmit}) {{

  const classes = useStyles();
    return(
      <div className={classes.root}>
      <AppBar position="static"  style={{ width: "100%",background: 'transparent',borderRadius:"1%", boxShadow: '2'}}>
        <Toolbar>
          <img src={LogoTasker}  style={{ padding: "0.5 em"}}alt="fireSpot"/>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <div>

          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}
}
