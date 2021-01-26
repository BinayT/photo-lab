import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Photo-Lab
        </Typography>
        <img src={photolab} alt='photolab logo' height='60' />
      </AppBar>
    </Container>
  );
};

export default Home;
