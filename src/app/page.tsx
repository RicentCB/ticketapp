'use client';

import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles"
import { Box, Button, Container, MenuItem, TextField, Typography } from "@mui/material";

// Definir las opciones para el Select
const units = ['Unidad 1', 'Unidad 2', 'Unidad 3'];

export default function NewTicketPage() {
  const theme = useTheme(); // Utilizar el hook useTheme para acceder al tema actual
  return (
    <Container maxWidth="sm"
    sx={{
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      padding: theme.spacing(3), 
      borderRadius: theme.shape.borderRadius,
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Creación de Nuevo Ticket
      </Typography>

      {/* Usamos un formulario en un Grid para que sea responsivo */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          {/* Descripción breve */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Descripción breve"
              variant="outlined"
              required
            />
          </Grid>

          {/* Persona que lo ha creado */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Persona que lo ha creado"
              variant="outlined"
              required
            />
          </Grid>

          {/* Unidad */}
          <Grid size={12}>
            <TextField
              select
              fullWidth
              label="Unidad"
              variant="outlined"
              required
            >
              {units.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Descripción detallada, comentarios, etc. */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Descripción detallada, comentarios, etc."
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>

          {/* Botón de Enviar */}
          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Crear Ticket
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}