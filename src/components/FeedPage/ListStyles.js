import styled from 'styled-components';
import { List as VirtualList } from 'react-virtualized';

export const StyledList = styled(VirtualList)`
  height: ${props => props.theme.innerHeight};
  outline: none;
`;

export const ListWrapper = styled.div`
  height: ${props => props.theme.innerHeight};
  width: 100%;

  & > div > div::-webkit-scrollbar {
    width: 0;
  }
`;
