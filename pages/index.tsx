import styled from '@emotion/styled';
import { rem } from '@mantine/core';

import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

const StyledPage = styled.div`
  height: 100%;
  min-height: ${rem(750)};
`;

export default function HomePage() {
  return (
    <StyledPage>
      <Navigation />
      <Heading />
    </StyledPage>
  );
}
