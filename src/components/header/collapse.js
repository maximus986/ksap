/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, Fragment } from 'react';
import { Button, Collapsible } from 'grommet';
import { FormNext, FormDown } from 'grommet-icons';

export const Collapse = ({ menuItem, children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Fragment>
      <Button
        sx={{
          position: 'absolute',
          top: '4px',
          right: 0,
          background: 'white',
          svg: {
            width: '3rem',
            height: '3rem',
            stroke: 'white',
          },
        }}
        icon={openMenu ? <FormDown /> : <FormNext />}
        a11yTitle="Open menu item"
        focusIndicator={false}
        onClick={() => {
          setOpenMenu(openMenu => !openMenu);
        }}
      />
      <Collapsible open={openMenu}>{children}</Collapsible>
    </Fragment>
  );
};
