import React, { useCallback } from 'react';
import { View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  H1,
  H5,
  Icon,
  withTheme,
  PaddedView,
  styled,
  Themer,
} from '@apollosproject/ui-kit';

import { useNavigation } from '@react-navigation/native';
import { Slide } from '@apollosproject/ui-onboarding';

const Layout = styled({
  flex: 1,
  justifyContent: 'space-between',
})(SafeAreaView);

const BrandIcon = withTheme(
  ({ theme, color }) => ({
    name: 'brand-icon',
    size: theme.sizing.baseUnit * 4,
    ...(color ? { fill: color } : {}),
    style: {
      marginBottom: theme.sizing.baseUnit,
    },
  }),
  'ui-onboarding.Landing.BrandIcon'
)(Icon);

const Content = styled({
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: '15%',
})(PaddedView);

const Title = styled({ textAlign: 'center' })(H1);
const Subtitle = styled(({ theme }) => ({
  color: theme.colors.gray,
  textAlign: 'center',
  width: '60%',
  paddingTop: theme.sizing.baseUnit,
}))(H5);

const Landing = () => {
  const navigation = useNavigation();

  const onPressPrimary = useCallback(
    () => navigation.navigate('Auth'),
    [navigation.navigate]
  );

  return (
    <Themer>
      <Slide scrollEnabled={false}>
        <Layout>
          <View />
          <Content>
            <PaddedView>
              <BrandIcon />
            </PaddedView>
            <Title>Welcome to Church!</Title>
            <Subtitle>Build a daily spiritual habit, with others.</Subtitle>
          </Content>
          <PaddedView vertical={false}>
            <Button
              onPress={onPressPrimary}
              title="Get started"
              type="secondary"
              pill={false}
            />
          </PaddedView>
        </Layout>
      </Slide>
    </Themer>
  );
};

export default Landing;
