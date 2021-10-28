import { getHighlightedText } from '../../common/getHighlightedText';
import { v4 as uuidv4 } from 'uuid';
const filteredItem = {
  padding: `20px 20px`,
  listStyleType: `none`,
  cursor: `pointer`,
  color: `#6e6e6e`,
};
const Highlight = ({ data, highlight }) => {
  return (
    <li style={filteredItem} key={uuidv4()}>
      {getHighlightedText(data, highlight)}
    </li>
  );
};
export default Highlight;
