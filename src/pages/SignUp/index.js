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
  const [name, setName] = useState("");
  //const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [open, setOpen] = React.useState(false);
  const [tipoSanguineo, setTipoSanguineo] = React.useState('');
  const [dataNasc, setDataNasc] = React.useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = event => {

    setTipoSanguineo(String(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  async function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || cpf === "" || rg === "" || dataNasc === "" || tipoSanguineo === "") {
      enqueueSnackbar("Verifique os campos", {
        variant: "error"
      });
      return;

    }
    const payload = {
      name,
      // lastName,
      email,
      password,
      cpf,
      rg,
      dataNasc,
      tipoSanguineo,

    }
    try {
      await api.post('/users', payload)

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
            <Avatar className={classes.avatar} style={{ background: "#1b5e20" }}>
              <AssignmentIndIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastre-se
          </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nome Completo"
                    autoFocus
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        }
                      }}
                      style={{ color: "#1b5e20" }}
                      id="date"
                      label="Data de Nascimento"
                      type="date"
                      defaultValue="2001-01-01"
                      className={classes.textField}
                      value={dataNasc}
                      onChange={e => setDataNasc(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                    />
                  </form>
                </Grid>
                <Grid item xs={12} style={{ justifyContent: "center", display: "flex", }} >
                  <Button onClick={handleClickOpen} style={{ backgroundColor: "#f44336", justifyContent: "center", display: "flex", width: "100%", color: "#fff" }} >Tipo Sanguíneo: {tipoSanguineo}</Button>
                  <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}  >
                    <DialogTitle style={{ justifyContent: "center", display: "flex", backgroundColor: "#f44336", color: "#fff" }}>Selecione</DialogTitle>
                    <DialogContent >
                      <form className={classes.container}  >
                        <FormControl className={classes.formControl} >
                          <InputLabel htmlFor="demo-dialog-native" ></InputLabel>
                          <Select style={{ width: "100px" }}
                            native
                            value={tipoSanguineo}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                          >
                            <option value="" />
                            <option value={"O+"}>O +       </option>
                            <option value={"O-"}>O -       </option>
                            <option value={"A+"}>A +       </option>
                            <option value={"A-"}>A -       </option>
                            <option value={"B+"}>B +       </option>
                            <option value={"B-"}>B -       </option>
                            <option value={"AB+"}>AB +      </option>
                            <option value={"AB-"}>AB -      </option>

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
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
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
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    autoComplete="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    id="rg"
                    label="RG"
                    name="rg"
                    autoComplete="RG"
                    value={rg}
                    onChange={e => setRg(e.target.value)}
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
                <Grid item>
                  <Link component={SignInLink} variant="body2" style={{ color: "#1b5e20" }}>
                    Já tem uma conta? Faça Login
                </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Container>
    </>

  );
}

