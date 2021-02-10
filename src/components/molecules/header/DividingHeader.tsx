import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { ThemeContext } from '../../../contexts';

const DividingHeader: FC = ({ children }) => {
  const theme = useContext(ThemeContext);
  const Heading = styled(Header)`
    color: ${theme.color.black};
  `;
  const InsideIcon = styled(Icon)`
    font-size: 1.1em !important;
    margin: 0 0.15em 0.4em 0 !important;
  `;

  return (
    <Heading as="h2" dividing>
      <InsideIcon />
      {children}
    </Heading>
  );
};

export default DividingHeader;
