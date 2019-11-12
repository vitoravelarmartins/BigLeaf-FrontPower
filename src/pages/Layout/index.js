import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Perfil from "../../components/Perfil"
import Arquivos from "../../components/Arquivos"
import Historico from "../../components/Historico"
import FormHistorico from "../../components/FormHistorico"
import { Route } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImagemLogo from '../../assets/logo.png'
import ImagemLogo2 from '../../assets/logo2.png'

// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

import Copyright from "../../components/Copyright";

import styles from "./styles";

import api from "../../services/api"

import { getLoggedUser } from "../../services/auth"
import Routes from "../../routes";
import Upload from "../../components/upload/Upload";
import Progress from "../../components/progress/Progress";
import Dropzone from "../../components/dropzone/Dropzone";


export default function Dashboard() {
  const name = getLoggedUser().name
  const [email, setEmail] = useState("");
  const classes = styles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sair = () => {
    localStorage.removeItem("@money-web-app-Token")
    document.location.reload(true);
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  console.log({ email })
  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar} style={{ backgroundColor: "#001F00" }}>
          <IconButton

            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            value={name}
          >
            {name}

          </Typography >
          <img src={ImagemLogo2} alt='Logo da aplicação' />
          <IconButton color="inherit" onClick={sair}>
            <Badge /*badgeContent={3}*/ color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} >
          <img src={ImagemLogo} alt='Logo da aplicação' />
          <IconButton onClick={handleDrawerClose}>

            <ChevronLeftIcon />
          </IconButton>

        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Route exact path="/app/perfil" component={Perfil} />
            <Route exact path="/app/arquivos" component={Upload} />
            <Route exact path="/app/historico" component={Historico} />
            <Route exact path="/app/formhistorico" component={FormHistorico} />
          </Grid>
        </Container>
      </main>
    </div>
  );
}
