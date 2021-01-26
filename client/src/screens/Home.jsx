import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import camera from '../images/camera.jpg';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Photo Lab
        </Typography>
        <img src={camera} alt='camera logo' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
