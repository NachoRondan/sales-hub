import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Gratis',
    subheader: '-',
    price: '0',
    description: [
      '1 analista de ventas',
      '1 plataforma',
      'Gestiona fácilmente desde un único lugar',
      'Soporte comunitario'],
    buttonText: 'Registrate gratis',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'El recomendado',
    price: '15',
    description: [
      '5 empleados',
      '3 plataformas',
      'Gestiona fácilmente desde un único lugar',
      'Recibi informacion privilegiada sobre tus ventas',
      'Soporte 24/7',
    ],
    buttonText: 'Iniciá ahora',
    buttonVariant: 'contained',
  },
  {
    title: 'Pequeñas empresas',
    subheader: '-',
    price: '30',
    description: [
      '10 empleados',
      '4 plataformas',
      'Gestiona fácilmente desde un único lugar',
      'Recibi informacion privilegiada sobre tus ventas',
      'Sopote personalizado',
    ],
    buttonText: 'Contactate',
    buttonVariant: 'outlined',
  },
  {
    title: 'Grandes empresas',
    subheader: '-',
    price: '45',
    description: [
      'Usuarios ilimitados',
      'Todas las plataformas disponibles',
      'Gestiona fácilmente desde un único lugar',
      'Recibi informacion privilegiada sobre tus ventas',
      'Sopote personalizado',
    ],
    buttonText: 'Contactate',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pricing
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
           Ofrecemos distintos planes que se ajustan a tu negocio. Registrate gratis o paga por la cantidad de plataformas en las cuales queres expandir tu negocio.
            Contrata por cantidad de empleados o tamaño de empresa .
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={20} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Grandes empresas' || tier.title === 'Pequeñas empresas' ? 12 : 6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title.includes('empresas') ? tier.title : tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', variant:'h6' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? null : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Box sx={{display:'flex', flexDirection: 'column', height:325, alignContent:'center'}} >
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}

      {/* End footer */}
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);
