import React from 'react';
import { BrowserRouter, Switch, Route, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import showList from './ShowList';
import BroadcasterForm from './BroadcasterForm';
import EpisodeForm from "./EpisodeForm";
import { ThemeProvider } from '@material-ui/core';
import { theme, themePurpleYellow, themeOrangeGrey } from './themes'
import Login from "./Login"


export default function Welcome(props) {
  // const [shows, setShows] = useState([])
  // useEffect(async ()=> {
  //   const resp = await axios.get('/shows.json')
  //   console.log(resp.data);
  //   setShows(resp.data);
  // },[]);
  // const [name, setName] = useState('');
  // const [broadcasterId, setBroadcasterId] = useState(0);

  // useEffect(async ()=> {
  //   const resp = await axios.get('/broadcasters.json')
  //   const thisBroadcaster = resp.data.find( x => x.handle === props.handle );
  //   setName(thisBroadcaster.name);
  //   setBroadcasterId(thisBroadcaster.id);
  // },[]);


  return (
    <div>
      <ThemeProvider theme={themeOrangeGrey}>
      <NavBar title="RadioCamp"/> 
      <Container>
        <Typography variant="h4">
          Join RadioCamp you will be so happy!
        </Typography>
        <Box><BroadcasterForm /></Box>
        <Login handleSubmit={props.handleSubmit}/>
      </Container>
      </ThemeProvider>
    </div>
  )
}