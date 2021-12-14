import { memo } from 'react';
import PropTypes from 'prop-types';
import { styled, named } from '@apollosproject/ui-kit';

import { Slide } from '@apollosproject/ui-onboarding';
import SlideContent from '../SlideContent';

const StyledSlideContent = styled({
  height: '100%',
})(SlideContent);

const Scripture = memo(({ firstName, description, ...props }) => (
  <Slide {...props}>
    <StyledSlideContent
      title={'Grow in scripture.'}
      description={description}
    />
  </Slide>
));

Scripture.displayName = 'Scripture';

Scripture.propTypes = {
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

Scripture.defaultProps = {
  description: 'Journal & reflect with others reading scripture.',
};

export default named('ui-onboarding.Scripture')(Scripture);
