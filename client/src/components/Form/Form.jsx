import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useState } from 'react';

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Post your Photo ;)</Typography>
        <TextField
          name='creator'
          variant='outline'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ [e.target.name]: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;
