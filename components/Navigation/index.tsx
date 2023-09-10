import styled from '@emotion/styled';
import { rem } from '@mantine/core';

import Link from 'next/link';

const StyledNavigation = styled.div`
  width: 100%;
  height: ${rem(56)};

  & > div {
    max-width: ${rem(1200)};
    margin: 0 auto;
    & > a {
      padding-left: ${rem(20)};
      font-size: ${rem(36)};
      font-weight: 800;
      color: ${({ theme }) => theme.colors.dark[6]};
      text-decoration: none;

      @media only screen and (min-width: 768px) {
        padding-left: ${rem(40)};
      }

      @media only screen and (min-width: 1220px) {
        padding-left: ${rem(0)};
      }
    }
  }
`;

const Navigation = () => (
  <StyledNavigation>
    <div>
      <Link href="/">UXPal</Link>
    </div>
  </StyledNavigation>
);

export default Navigation;
