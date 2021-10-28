import { v4 as uuidv4 } from 'uuid';
export const getHighlightedText = (text, highlight) => {
  console.log('The text', text);
  let queries = text.split(new RegExp(`(${highlight})`, 'gi'));
  console.log('The queries', queries);
  return queries.map((query) => {
    return (
      <>
        {query.toLowerCase() === highlight.toLowerCase() ? (
          <mark
            style={{ backgroundColor: '#D4FF00', fontWeight: 'bold' }}
            key={uuidv4()}>
            {query}
          </mark>
        ) : (
          query
        )}
      </>
    );
  });
};
