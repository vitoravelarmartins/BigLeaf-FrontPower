import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import api from "../../services/api";
import axios from 'axios';
import Perfil from "../../components/Perfil"
import Arquivos from "../../components/Arquivos"
import { Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { async } from 'q';
import { setState } from 'expect/build/jestMatchersObject';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Historico() {


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    async function getHistorico() {
        const { data } = await api.get('/historico')
        console.log(JSON.stringify({ data }))
        const nada = JSON.stringify({ data })

        return nada
    }
    const historico = useState("")
    console.log("sove", getHistorico())

    return (
        <>
            <div >
                <Card className={classes.card} x>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Cronica
              </Typography>
                        <Typography variant="h5" component="h2">
                            DOR DE CABEÇA
              </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Examinado
              </Typography>
                        <Typography variant="body2" component="p" value={historico.id}>

                            <br />
                            {'"Dores constantes de cabeça"'}
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>
            <div>
                <Card style={{ justifyContent: "center" }}>
                    <CardContent>
                        <Typography style={{ fontSize: "100px", justifyContent: "center" }}>


                            <ListItem button component={Link} to="/app/FormHistorico" style={{ color: "#1b5e20", fontSize: "100px", justifyContent: "center" }}>
                                <ListItemIcon>
                                    <AddIcon style={{ color: "#1b5e20", fontSize: "100px" }} />
                                </ListItemIcon>

                            </ListItem>
                        </Typography>

                    </CardContent>
                </Card>
            </div>
            <div>

            </div>
        </>

    );
}


