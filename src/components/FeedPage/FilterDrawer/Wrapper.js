import styled from 'styled-components';
import media from '../../../util/mediaQueries';

/*
Calculations for CSS:
  Transaction has width of 50rem;
  gutter between the filter component and the list is 2 rem
  on screens > 992px the list will be centered, otherwise:
    the half of (100vw - filter - gutter - list) will be
    left and right margins. i.e.:
    vw > 992px:
    max:30rem-2rem-centered Transactions list
    Desktop:
    marginLeft-20rem-2rem-50rem-marginRight
    Tablet:
    Filter component occupies "full screen"
 */

const Wrapper = styled.div`
  display: flex;
  right: calc((100vw - 50rem) / 2 + 52rem);
  margin-left: 2rem;
  top: 10rem;
  position: absolute;
  width: calc((100vw - 58rem) / 2);
  max-width: 30rem;
  flex-direction: column;
  background-color: ${props => props.theme.primaryBlue};
  box-shadow: 5px 5px 5px ${props => props.theme.shadowCol};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  ${media.desktop`
    top: 23rem;
    right: calc((100vw - 72rem) / 2 + 52rem);
    width: 20rem;
    margin-left: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    border-radius: 0;
    overflow: auto;
    width: 100vw;
    right: auto;
    margin-left: auto;
    max-width: 100%;
    padding: 1rem 5rem;
    opacity: ${props => (props.visible ? '1' : '0')};
    background-color: ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    position: fixed;
    max-height: ${props => (props.visible ? props.theme.innerHeight : '0')};
    top: 5rem;
    bottom: ${props => (props.theme.isX ? '10rem' : '5rem')};
    & * {
      visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    }
  `}
  ${media.phone`
    justify-content: space-around;
    padding: 1rem;
  `}
`;

export default Wrapper;
