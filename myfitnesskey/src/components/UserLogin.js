import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CoypRight(props) {
  return (
    <div className="DesignNavbar">
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          MyFitnessKey
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
const defaultTheme = createTheme();

export default function UserLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <CssBaseline />
        <Box>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography>Iniciar sesión</Typography>
          <Box>
            <TextField id="email" label="Email" name="email" autoFocus />
            <TextField
              id="password"
              label="Password"
              name="password"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remeber" color="primary" />}
            />
            <Button type="submit">Iniciar sesión</Button>
            <Grid container>
              <Grid item>
                <Link>¿Contraseña olvidada?</Link>
              </Grid>
              <Grid item>
                <Link>{"¿Aún no tienes cuenta? Regístrate"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CoypRight/>
      </Container>
    </ThemeProvider>
  );
}
