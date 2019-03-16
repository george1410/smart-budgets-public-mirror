import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Form = styled.form`
  width: 100%;
  padding-top: 0 !important;
  ${media.phone`
    font-size: 5rem;
  `}
`;

export default Form;
