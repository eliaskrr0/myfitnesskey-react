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
      <Container component={"main"} maxWidth="xs">
        <CssBaseline />
        
        {/* Caja principal */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
          {/* Icono del candado */}
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          {/* Icono del candado */}

          <Typography component={"h1"} variant="h5">
            Iniciar sesión
          </Typography>

          {/* Caja con los elementos del formulario */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            
            {/* Email */}
            <TextField
              id="email"
              label="Email"
              name="email"
              required
              autoFocus
              margin="normal"
              fullWidth
              autoComplete="email"
            />
            {/* Email */}


            {/* Contraseña */}
            <TextField
              id="password"
              label="Password"
              name="password"
              required
              autoFocus
              margin="normal"
              fullWidth
              autoComplete="current-password"
            />
            {/* Contraseña */}
            
            {/* Opción para recordar sesión */}
            <FormControlLabel
              control={<Checkbox value="remeber" color="primary" />}
              label="Recuérdame"
            />
            {/* Opción para recordar sesión */}

            {/* Iniciar sesión */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}>Iniciar sesión</Button>
            {/* Iniciar sesión */}
            
            
            <Grid container>
              {/* Formulario para pedir una nueva contraseña */}
              <Grid item>
                <Link>¿Contraseña olvidada?</Link>
              </Grid>
              {/* Formulario para pedir una nueva contraseña */}

              {/* Formulario para registrarse */}
              <Grid item>
                <Link>{"¿Aún no tienes una cuenta? Regístrate"}</Link>
              </Grid>
              {/* Formulario para registrarse */}
            </Grid>
            

          </Box>
          {/* Caja con los elementos del formulario */}

        </Box>
        {/* Caja principal */}

        <CoypRight sx={{ mt: 8, mb: 4 }}/>
      </Container>
    </ThemeProvider>
  );
}
