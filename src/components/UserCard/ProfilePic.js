import styled from 'styled-components';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const ProfilePic = styled(Gravatar)`
  border-radius: 4px;
  ${media.phone`
    width: 30px;
    height: 30px;
  `}
`;

export default ProfilePic;
