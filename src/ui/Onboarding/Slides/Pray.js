import { memo } from 'react';
import PropTypes from 'prop-types';
import { styled, named } from '@apollosproject/ui-kit';

import { Slide } from '@apollosproject/ui-onboarding';
import SlideContent from '../SlideContent';

const StyledSlideContent = styled({
  height: '100%',
})(SlideContent);

const Pray = memo(({ firstName, description, ...props }) => (
  <Slide {...props}>
    <StyledSlideContent title={'Pray with others'} description={description} />
  </Slide>
));

Pray.displayName = 'Pray';

Pray.propTypes = {
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

Pray.defaultProps = {
  description: 'Share prayer requests and lift others in prayer in real-time.',
};

export default named('ui-onboarding.Pray')(Pray);
