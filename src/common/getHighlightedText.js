export const getHighlightedText = (text, highlight) => {
  console.log('The text', text);
  let parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  console.log('The parts', parts);
  return parts.map((part, i) => {
    return (
      <>
        {part.toLowerCase() === highlight.toLowerCase() ? (
          <mark style={{ backgroundColor: '#D4FF00', fontWeight: 'bold' }}>
            {part}
          </mark>
        ) : (
          part
        )}
      </>
    );
  });
};
