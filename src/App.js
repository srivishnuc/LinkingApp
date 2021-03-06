import React from 'react';
import 'typeface-roboto'
import { Paper, Card, withStyles, AppBar, createMuiTheme, ThemeProvider, Typography, Link, Box, CardContent } from '@material-ui/core'
import list_dat from './data'
import { grey, orange, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: grey,
  }

})

const useStyle = (style) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: 'auto',
    padding: style.spacing(2)
  },
  CardContainer: {
    display: 'flex',
    //flexDirection: 'rows',
    //flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignItems: 'center',
    padding: style.spacing(3)
  },
  card: {
    margin: style.spacing(3),
    width: 200,
    height: 175,
    boxShadow: `0 1px 3px ${theme.palette.secondary.dark}, 0 1px 3px ${theme.palette.secondary.dark}`,
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: `0 14px 28px ${theme.palette.primary.light}, 0 10px 10px ${theme.palette.primary.light}`,
    }
  },
  img: {
    display: 'block',
    maxHeight: '200px',
    maxWidth: '200px',

  },
  CardContent: {
    margin: 0,
    padding: 0,
  },
  list: {
    '&:hover': {
      textDecoration: 'none',
    }
  },

})

class App extends React.Component {


  render() {
    const { classes } = this.props

    const list = list_dat.map(dat =>

      <div key={dat.id}>
        <Card className={classes.card}>
          <CardContent className={classes.CardContent}>
            <Link className={classes.list} href={`${dat.address}`} target="_blank" rel="noopener noreferrer">
              <img className={classes.img} src={require(`${dat.icon}`)} alt={dat.name} />
              <Typography className={classes.cardName} align="center" color="secondary" variant="h5">{dat.name}</Typography>
            </Link>
          </CardContent>
        </Card>

      </div>)

    return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.paper}>
          <AppBar color='primary'>
            <Typography align="center" variant="h3">Pages</Typography>
          </AppBar>
          <Box className={classes.CardContainer}>
            {list}
          </Box>
        </Paper >
      </ThemeProvider >
    );
  }

}

export default (withStyles)(useStyle)(App);
