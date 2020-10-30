import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Episode from "./Episode";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { themeOrangeGrey, themePurpleYellow } from "./themes";
import Broadcaster from "./Broadcaster";
import Show from "./Show";
import Search from "./Search";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Site(props) {
  const classes = useStyles();

  let { broadcasterHandle } = useParams();

  const [name, setName] = useState("");
  const [broadcasterData, setBroadcasterData] = useState({});

  let match = useRouteMatch();

  useEffect(async () => {
    const resp = await axios.get("/broadcasters.json");
    const thisBroadcaster = resp.data.find((x) => x.handle === broadcasterHandle);
    setName(thisBroadcaster.name);
    setBroadcasterData(thisBroadcaster);
  }, []);
  // console.log('broadcasterData', broadcasterData);
  return (
    <ThemeProvider theme={ broadcasterData.handle !== 'purple-finch' ? themeOrangeGrey : themePurpleYellow}>
      <NavBar 
        broadcasterData={broadcasterData} 
        title={name} />
      <Switch>
        <Route exact path={match.path}>
          <Broadcaster 
          currentUser={props.currentUser}
          broadcasterData={broadcasterData} />
        </Route>
        <Route path={`${match.path}/search`}>
          <Search broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId/:episodeId`}>
          <Episode broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId`}>
          <Show
          currentUser={props.currentUser} 
          broadcasterId={broadcasterData.id} 
          broadcasterData={broadcasterData}/>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
