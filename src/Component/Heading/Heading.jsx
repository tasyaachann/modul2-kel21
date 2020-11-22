import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const ButtonLink = styled.button
`
    color: white;
     width: 70px;
     height: 30px;
     border:none;
     border:solid 2px white;
     border-radius: 5px;
     background: rgba(255, 255, 255,0);
     font-size: 10px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
          fontWeight: 70,
    },
  }));


export default function Heading(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#b04d5f' }}>
                <Toolbar >
                    <Typography  className={classes.title}>
                        Modul 2 RSBK - Kel 21
                    </Typography>
                    <ButtonLink>
                            Sign Up
                    </ButtonLink>
                    <ButtonLink >
                            Sign In
                    </ButtonLink>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}

