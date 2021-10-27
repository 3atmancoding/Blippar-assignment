import Container from '@mui/material/Container';
import { createStyles, makeStyles } from '@mui/styles';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Highlight from './components/Highlight/Highlight';
import Developer from './components/DeveloperDetails';

const url = `https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words`;
const useStyles = makeStyles(() =>
  createStyles({
    userContainer: {
      height: `300px`,
      // backgroundColor: ` #f2fcfd `,
      backgroundColor: ` #ebebeb `,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `column`,
      position: `relative`,
      top: `200px`,
      borderRadius: `10px`,
    },
    row: {
      width: `auto`,
    },
    content: {
      textAlign: `center`,
    },
    searchBox: {
      width: `196px`,
      height: `43px`,
      fontSize: `1rem`,
      border: 0,
      borderRadius: `4px`,
      padding: `5px 10px`,
      outline: 0,
    },
    developerSection: {
      width: `100%`,
    },
    filteredListContainer: {
      backgroundColor: `#fff`,
      width: `216px`,
      position: `absolute`,
      zIndex: 99,
      boxShadow: `3px 3px 5px 2px rgba(215,215,215,0.75)`,
      borderRadius: `0 0 4px 4px`,
      overflow: `scroll`,
      height: `200px`,
      bottom: `-98px`,
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(data);

  /**
   *
   * @param {*} e
   * e is synthetic event
   * All the changes done in the input element will be handled inside changeHandler method
   */
  const changeHandler = (e) => {
    setValue(e.target.value);
    const query = e.target.value;
    const listOfStrings = data?.split('\n');
    // console.log(listOfStrings);
    if (query.length >= 3) {
      const result = listOfStrings?.filter((d) => {
        return d.toLowerCase().startsWith(query.toLowerCase());
      });
      // result.includes(query)

      setFilterData(result);
    } else setFilterData('');
  };
  /**
   * fetchData method to fetch Data from the url and set the data using useState hook
   * in variable called data
   */
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      const { data } = response;

      setData(data);
    } catch (e) {
      // console.log('The error', e);
    }
  }, []);

  /**
   * useEffect is used for side-effect like a network call from method fetchData()
   * Added a dependency fetchData which is a method
   */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredList = filterData
    ? filterData?.map((data, i) => {
        return <Highlight value={data} highlight={value} key={uuidv4()} />;
      })
    : '';

  return (
    <Container maxWidth="sm" style={{ margin: `0 auto` }}>
      <main className={classes.userContainer}>
        <section className={classes.row}>
          <Developer />
          <input
            type="text"
            placeholder="Search..."
            className={classes.searchBox}
            onChange={changeHandler}
            value={value}
          />
          {filterData ? (
            <div className={classes.filteredListContainer} id="text">
              {filteredList}
            </div>
          ) : (
            ''
          )}
        </section>
      </main>
    </Container>
  );
};

export default App;
