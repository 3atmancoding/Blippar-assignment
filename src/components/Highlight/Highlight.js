import { getHighlightedText } from '../../common/getHighlightedText';

const filteredItem = {
  padding: `20px 20px`,
  listStyleType: `none`,
  cursor: `pointer`,
  color: `#6e6e6e`,
};
const Highlight = ({ value, highlight }) => {
  return <li style={filteredItem}>{getHighlightedText(value, highlight)}</li>;
};
export default Highlight;
