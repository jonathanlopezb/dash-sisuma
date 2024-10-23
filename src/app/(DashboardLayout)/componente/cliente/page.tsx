'use client';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Agregar Cliente">
          <>
            <Stack spacing={3}>
              <TextField
                id="name-basic"
                label="Name"
                variant="outlined"
              />
              <TextField id="email-basic" label="Email" variant="outlined" />
              <TextField
                id="pass-basic"
                label="cedula"
                variant="outlined"
              />

            </Stack>
            <br />
            <Button>
              Guardar
            </Button>
          </>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;