'use client';

import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Box, Button, Container, MenuItem, TextField, Typography, Select, FormControl, InputLabel, FormHelperText, } from "@mui/material";

// Definir las opciones para el Select
const units = ['Unidad 1', 'Unidad 2', 'Unidad 3'];

export default function NewTicketPage() {
  // Utilizar el hook useTheme para acceder al tema actual
  const theme = useTheme();
  // Inicializa el hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Estado controlado para la unidad
  const [selectedUnit, setSelectedUnit] = useState(''); // Valor inicial vacío

  // Función para manejar el cambio en el select
  const handleUnitChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedUnit(event.target.value as string);
  };
  
  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data), // Envía los datos del formulario
      });

      if (response.ok) {
        alert('Ticket creado exitosamente');
      } else {
        alert('Error al crear el ticket');
      }
    } catch (error) {
      console.error('Error al enviar el ticket:', error);
      alert('Hubo un error al enviar los datos');
    }
  };

  return (
    <Container maxWidth="sm"
    sx={{
      color: theme.palette.text.primary,
      padding: theme.spacing(3), 
      borderRadius: theme.shape.borderRadius,
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Ticket de asistencia Ingeniera
      </Typography>
      {/* Usamos un formulario en un Grid para que sea responsivo */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        sx={{mt: 3}}
      >
        <Grid container spacing={2}>
          {/* Titulo */}
          <Grid size={12}>
          <TextField
              fullWidth
              label="Título*"
              variant="outlined"
              {...register('description', { required: 'El título es requerido' })}
              error={!!errors.description} // Muestra error si hay
              helperText={typeof errors.description?.message === 'string' ? errors.description.message : ''}
            />
          </Grid>

          {/* Persona solicitante */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Solicitante*"
              variant="outlined"
              {...register('creator', { required: 'El creador es requerido' })}
              error={!!errors.creator}
              helperText={typeof errors.creator?.message === 'string' ? errors.creator.message : ''} // Verifica si el mensaje es una cadena
            />
          </Grid>

          {/* Unidad */}
          <Grid size={12}>
          <FormControl fullWidth error={!!errors.unit}>
              <InputLabel>Unidad*</InputLabel>
              <Select
                value={selectedUnit}
                label="Unidad*"
                {...register('unit', { required: 'Selecciona una unidad', onChange:handleUnitChange })}
              >
                <MenuItem value="">
                  <em>Seleccione una unidad</em>
                </MenuItem>
                {units.map((unitOption) => (
                  <MenuItem key={unitOption} value={unitOption}>
                    {unitOption}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {typeof errors.unit?.message === 'string' ? errors.unit.message : ''}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* Descripción detallada, comentarios, etc. */}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Descripción detallada, comentarios, etc."
              variant="outlined"
              multiline
              rows={4}
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