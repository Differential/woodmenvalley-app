import { useNavigation } from '@react-navigation/native';
import { OnboardingSwiper } from '@apollosproject/ui-onboarding';
import { named } from '@apollosproject/ui-kit';

import Landing from './Landing';
import Scripture from './Scripture';
import Pray from './Pray';
import Community from './Community';
import Discover from './Discover';

function LandingSwiper() {
  const navigation = useNavigation();
  const slides = [Landing, Scripture, Pray, Community, Discover];

  return (
    <OnboardingSwiper
      onComplete={() => {
        navigation.navigate('Auth');
      }}
    >
      {({ swipeForward }) => (
        <>
          {slides.map((Slide) => (
            <Slide key={Slide.displayName} onPressPrimary={swipeForward} />
          ))}
        </>
      )}
    </OnboardingSwiper>
  );
}

export default named('ui-onboarding.LandingSwiper')(LandingSwiper);
