/** @jsx jsx */
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { jsx } from 'theme-ui';

export const useContentfulContent = () => {
  const Bold = ({ children }) => (
    <span sx={{ fontWeight: 'bold' }}>{children}</span>
  );
  const Text = ({ children }) => <p sx={{ marginBottom: 16 }}>{children}</p>;
  const Heading5 = ({ children }) => (
    <h5
      sx={{
        fontSize: ['2.5rem', '3rem'],
        fontFamily: 'body',
        mb: 16,
        mt: 32,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </h5>
  );
  const Heading4 = ({ children }) => (
    <h4
      sx={{
        fontSize: ['3rem', '3.5rem'],
        fontFamily: 'body',
        mb: 25,
        mt: 40,
        lineHeight: 1.25,
      }}
    >
      {children}
    </h4>
  );
  const Heading3 = ({ children }) => (
    <h3
      sx={{
        fontSize: ['3rem', '4rem', '4.5rem'],
        fontFamily: 'body',
        mb: 40,
        lineHeight: 1.25,
      }}
    >
      {children}
    </h3>
  );
  const UlList = ({ children }) => (
    <ul sx={{ pl: ['4rem', '10rem'], textAlign: ['left'] }}>{children}</ul>
  );
  const OlList = ({ children }) => (
    <ol sx={{ pl: ['4rem', '10rem'], textAlign: ['left'] }}>{children}</ol>
  );
  const ListItem = ({ children }) => <li sx={{}}>{children}</li>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.UL_LIST]: (node, children) => <UlList>{children}</UlList>,
      [BLOCKS.OL_LIST]: (node, children) => <OlList>{children}</OlList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    },
  };
  return options;
};
