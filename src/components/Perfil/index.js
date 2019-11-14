import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Avatar from "@material-ui/core/Avatar";

import avatar from "../../assets/img/faces/marc.jpg";

import api from "../../services/api";

import { getLoggedUser } from "../../services/auth";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Perfil() {
  const name = getLoggedUser().name;
  const email = getLoggedUser().email;
  const nomeInicial = getLoggedUser().name.substr(0, 1);
  const cpf = getLoggedUser().cpf;
  const rg = getLoggedUser().rg;
  const tipoSanguineo = getLoggedUser().tipoSanguineo;
  const dataNasc = getLoggedUser().dataNasc.substr(0, 10);

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
          <Card profile>
            <CardAvatar profile>
              {
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  style={{ backgroundColor: "red" }}
                >
                  {nomeInicial}
                </Avatar>
              }
            </CardAvatar>
            <CardBody profile>
              <h1 className={classes.cardTitle}>{name}</h1>
              <h3>E-Mail: {email}</h3>
              <h3>CPF: {cpf}</h3>
              <h3>RG: {rg}</h3>
              <h3>Tipo Sanguineo: {tipoSanguineo}</h3>
              <h3>Data De Nascimento: {dataNasc}</h3>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
