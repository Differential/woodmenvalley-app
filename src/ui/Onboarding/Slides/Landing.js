import { memo } from 'react';
import PropTypes from 'prop-types';
import { named } from '@apollosproject/ui-kit';
import { useTheme } from '@react-navigation/native';

import { Slide } from '@apollosproject/ui-onboarding';
import SlideContent from '../SlideContent';

const Landing = memo(
  ({ firstName, description, BackgroundComponent, ...props }) => {
    const source = useTheme();
    return (
      <Slide {...props}>
        {BackgroundComponent}
        <SlideContent
          icon={source.dark ? 'brand-icon-dark' : 'brand-icon-light'}
          title={'Welcome to Church!'}
          description={description}
        />
      </Slide>
    );
  }
);

Landing.displayName = 'Landing';

Landing.propTypes = {
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
  BackgroundComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Landing.defaultProps = {
  description:
    "We're excited that you're here. Join us on the journey to love well and change lives through Christ.",
};

export default named('ui-onboarding.Landing')(Landing);
