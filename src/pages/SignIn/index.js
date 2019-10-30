import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { useSnackbar } from "notistack";

import Copyright from "../../components/Copyright";

import styles from "./styles";

import api from "../../services/api";
import { login } from "../../services/auth"

const SignUpLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/signup" {...props} />
));

const ForgotPasswordLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/forgot-password" {...props} />
));

export default function SignIn(props) {
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = styles();

  async function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      enqueueSnackbar("E-mail ou senha inválidos", {
        variant: "error"
      });

      return;
    }

    const payload = {
      email,
      password
    };
    try {
      const { data } = await api.post('/sessions', payload)

      login(data.token)
      props.history.push("/dashboard");
    } catch (erro) {
      enqueueSnackbar("E-mail ou senha inválidos", {
        variant: "error"
      });
    }


  }

  return (
    <>
      <CssBaseline />
      <Container style={{display: "flex", justifyContent: "center", marginTop: "150px",width:"100%"}}>
        <Grid item xs={true} sm={2} md={4} component={Paper} elevation={6} square >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={ForgotPasswordLink} variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link component={SignUpLink} variant="body2">
                  {"Cadastre-se"}
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
