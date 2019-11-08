import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';
import ChatIcon from '@material-ui/icons/Chat';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/app/perfil" style={{ color: "#1b5e20" }}>
      <ListItemIcon>
        <PersonIcon style={{ color: "#1b5e20" }} />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem button component={Link} to="/app/arquivos" style={{ color: "#1b5e20" }}>
      <ListItemIcon>
        <FolderIcon style={{ color: "#1b5e20" }} />
      </ListItemIcon>
      <ListItemText primary="Arquivos" />
    </ListItem>
    {/* <ListItem button component={Link} to="/creditcards">
      <ListItemIcon>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItem>
    <ListItem button component={Link} to="/categories">
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Extras</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ChatIcon style={{ color: "#1b5e20" }} />
      </ListItemIcon>
      <ListItemText primary="Chat" style={{ color: "#1b5e20" }} />
    </ListItem>
    <ListItem button component={Link} to="/app/historico">
      <ListItemIcon>
        <LocalHospitalIcon style={{ color: "#1b5e20" }} />
      </ListItemIcon>
      <ListItemText primary="Historico Medico" style={{ color: "#1b5e20" }} />
    </ListItem>
  </div>
);
