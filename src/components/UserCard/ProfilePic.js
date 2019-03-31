import styled from 'styled-components';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const ProfilePic = styled(Gravatar)`
  border-radius: 4px;
  ${media.phone`
    width: ${props => props.side || '30'}px;
    height: ${props => props.side || '30'}px;
  `}
`;

export default ProfilePic;
