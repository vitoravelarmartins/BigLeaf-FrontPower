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

import avatar from "../../assets/img/faces/marc.jpg";

import api from "../../services/api"

import { getLoggedUser } from "../../services/auth"

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
  const name = getLoggedUser().name

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Seu Profile</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader >
            <CardBody>
              <GridContainer>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText={name}
                    id="username"
                    value={name}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email "
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Tipo Sanguineo"
                    id="Tipo Sanguineo"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}></InputLabel>
                  <CustomInput
                    labelText=""
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#test" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{name}</h4>
              <p className={classes.description}>
                {"'"}In the end, there will be no one left. We are no longer innocent. We are lost from this world From home. We longer believe in such things. We only believe in war
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
