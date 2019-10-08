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
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/accounts">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Accounts" />
    </ListItem>
    <ListItem button component={Link} to="/creditcards">
      <ListItemIcon>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Credit cards" />
    </ListItem>
    <ListItem button component={Link} to="/categories">
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
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
      <ListItemText primary="Import data" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Export reports" />
    </ListItem>
  </div>
);
