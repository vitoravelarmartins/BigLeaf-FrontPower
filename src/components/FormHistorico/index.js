import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { useSnackbar } from "notistack";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import red from '@material-ui/core/colors/red';



import Copyright from "../../components/Copyright";

import styles from "./styles";

import api from "../../services/api"

const SignInLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
));
const primary = red[500];

export default function SignUp(props) {
    const classes = styles();
    //const [lastName, setLastName] = useState("");
    const [doenca, setDoenca] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const { enqueueSnackbar } = useSnackbar();

    const handleChange = event => {

        setTipo(String(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    async function handleSubmit(e) {
        e.preventDefault();

        if (doenca === "" || descricao === "" || tipo === "") {
            enqueueSnackbar("Verifique os campos", {
                variant: "error"
            });
            return;

        }
        const payload = {
            doenca,
            descricao,
            tipo

        }
        try {
            await api.post('/historico', payload)

            props.history.push("/");

        } catch (error) {
            if (error.response.status === 400) {
                enqueueSnackbar(error.response.data.error, {
                    variant: "error"
                });
            } else {

                enqueueSnackbar("Desculpe, servidor não encontrado", {
                    variant: "error"
                });
            }

        }

    }

    return (
        <>
            <CssBaseline />
            <Container style={{ display: "flex", justifyContent: "center", marginTop: "150px", width: "100%" }}>
                <Grid item xs={true} sm={2} md={4} component={Paper} elevation={6} square >
                    <div className={classes.paper}>

                        <form className={classes.form} noValidate onSubmit={handleSubmit} >
                            <Grid container >
                                <Grid item xs={12} >
                                    <TextField
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused
                                            }
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                        autoComplete="doenca"
                                        name="doenca"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="doenca"
                                        label="Nome da Doença"
                                        autoFocus
                                        value={doenca}
                                        onChange={e => setDoenca(e.target.value)}
                                    />

                                </Grid>
                                <Grid style={{ color: "#fff" }}>
                                    H
                                </Grid>

                                <Grid item xs={12} style={{ justifyContent: "center", display: "flex", }} >
                                    <Button onClick={handleClickOpen} style={{ backgroundColor: "#f44336", justifyContent: "center", display: "flex", width: "100%", color: "#fff" }} >Tipo de Doença: {tipo}</Button>
                                    <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}  >
                                        <DialogTitle style={{ justifyContent: "center", display: "flex", backgroundColor: "#f44336", color: "#fff" }}>Selecione</DialogTitle>
                                        <DialogContent >
                                            <form className={classes.container}  >
                                                <FormControl className={classes.formControl} >
                                                    <InputLabel htmlFor="demo-dialog-native" ></InputLabel>
                                                    <Select style={{ width: "100px" }}
                                                        native
                                                        value={tipo}
                                                        onChange={handleChange}
                                                        input={<Input id="demo-dialog-native" />}
                                                    >
                                                        <option value="" />
                                                        <option value={"Alergia"}>Alergia       </option>
                                                        <option value={"Viral"}>Viral      </option>
                                                        <option value={"Cronica"}>Cronica       </option>
                                                        <option value={"Hereditaria"}>Hereditaria       </option>
                                                        <option value={"Psicologica"}>Psicologica       </option>
                                                        <option value={"Imonologica"}>Imonolosgica       </option>
                                                        <option value={"Respiratoria"}>Respiratoria      </option>
                                                        <option value={"Cardiovascular"}>Cardiovascular     </option>

                                                    </Select>
                                                </FormControl>
                                            </form>
                                        </DialogContent>
                                        <DialogActions >
                                            <Button onClick={handleClose} color={primary}>
                                                Cancelar
          </Button>
                                            <Button onClick={handleClose} color={primary}>
                                                Ok
          </Button>
                                        </DialogActions>
                                    </Dialog>

                                </Grid>


                                <Grid item xs={12}>
                                    <TextField
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused
                                            }
                                        }}
                                        InputProps={{
                                            classes: {
                                                root: classes.cssOutlinedInput,
                                                focused: classes.cssFocused,
                                                notchedOutline: classes.notchedOutline
                                            }
                                        }}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="descricao"
                                        label="descricao"
                                        name="descricao"
                                        autoComplete="descricao"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />
                                </Grid>


                            </Grid>
                            <Button
                                style={{ background: "#1b5e20", color: "#fff" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Confirmar
            </Button>
                            <Grid container justify="flex-end">

                            </Grid>
                            <Box mt={5}>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Container>
        </>

    );
}

