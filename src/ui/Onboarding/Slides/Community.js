import { memo } from 'react';
import PropTypes from 'prop-types';
import { styled, named } from '@apollosproject/ui-kit';

import { Slide } from '@apollosproject/ui-onboarding';
import SlideContent from '../SlideContent';

const StyledSlideContent = styled({
  height: '100%',
})(SlideContent);

const Community = memo(({ firstName, description, ...props }) => (
  <Slide {...props}>
    <StyledSlideContent title={'Be in community.'} description={description} />
  </Slide>
));

Community.displayName = 'Community';

Community.propTypes = {
  /* The `Swiper` component used in `<onBoarding>` looks for and hijacks the title prop of it's
   * children. Thus we have to use more unique name.
   */
  firstName: PropTypes.string,
  description: PropTypes.string,
  /* Recommended usage:
   * - `Image` (react-native)
   * - `GradientOverlayImage` (@apollosproject/ui-kit) for increased readability
   * - `Video` (react-native-video) because moving pictures!
   */
};

Community.defaultProps = {
  description: 'Be known, grow and live life with people.',
};

export default named('ui-onboarding.Community')(Community);
