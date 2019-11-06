import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LabelIcon from "@material-ui/icons/Label";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ArchiveIcon from "@material-ui/icons/Archive";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/app/perfil">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem button component={Link} to="/app/arquivos">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Arquivos" />
    </ListItem>
    <ListItem button component={Link} to="/creditcards">
      <ListItemIcon>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Documentos" />
    </ListItem>
    <ListItem button component={Link} to="/categories">
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More options</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ArchiveIcon />
      </ListItemIcon>
      <ListItemText primary="Importa Documentos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Exporta Documentos" />
    </ListItem>
  </div>
);
