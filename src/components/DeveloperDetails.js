import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Strings from '../common/Strings/strings';
const useStyles = makeStyles(() =>
  createStyles({
    developerSection: {
      width: `100%`,
    },
  })
);
const Developer = () => {
  const classes = useStyles();
  console.log('Render - Developer Component');
  return (
    <div className={classes.developerSection}>
      <p className={classes.content}>{Strings.devName}</p>
    </div>
  );
};
export default React.memo(Developer);
