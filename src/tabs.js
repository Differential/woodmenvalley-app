import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationService,
  withTheme,
  useTheme,
  Icon,
  Touchable,
} from '@apollosproject/ui-kit';
import { useApolloClient } from '@apollo/client';
import {
  createFeatureFeedTab,
  UserAvatarConnected,
  ConnectScreenConnected,
} from '@apollosproject/ui-connected';
import { checkOnboardingStatusAndNavigate } from '@apollosproject/ui-onboarding';

import ActionTable from './ui/ActionTable';

// const HeaderLogo = () => {
//   const theme = useTheme();
//   return (
//     <Icon
//       name="brand-icon"
//       size={theme.sizing.baseUnit * 1.5}
//       fill={theme.colors.primary}
//     />
//   );
// };

const ProfileButton = () => {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => {
        navigation.navigate('UserSettingsNavigator');
      }}
    >
      <View>
        <UserAvatarConnected size="xsmall" />
      </View>
    </Touchable>
  );
};

const SearchButton = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Touchable
      onPress={() => {
        navigation.navigate('Search');
      }}
    >
      <Icon
        name="search"
        size={theme.sizing.baseUnit * 2}
        fill={theme.colors.primary}
      />
    </Touchable>
  );
};

const WoodmenLightIcon = withTheme(({ theme }) => ({
  name: 'wordmark-light',
  size: theme.sizing.baseUnit * 2,
}))(Icon);

const WoodmenDarkIcon = withTheme(({ theme }) => ({
  name: 'wordmark-dark',
  size: theme.sizing.baseUnit * 2,
}))(Icon);

const WoodmenIcon = () => {
  const theme = useTheme();
  if (theme.type === 'light') {
    return <WoodmenLightIcon />;
  } else {
    return <WoodmenDarkIcon />;
  }
};

const tabBarIcon = (name) => {
  function TabBarIcon({ color }) {
    return <Icon name={name} fill={color} size={24} />;
  }
  TabBarIcon.propTypes = {
    color: PropTypes.string,
  };
  return TabBarIcon;
};

const CustomConnectScreen = () => (
  <ConnectScreenConnected showAvatar={true} ActionTable={ActionTable} />
);

// we nest stack inside of tabs so we can use all the fancy native header features
const HomeTab = createFeatureFeedTab({
  options: {
    headerHideShadow: true,
    headerCenter: WoodmenIcon,
    headerLeft: ProfileButton,
    headerLargeTitle: false,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerLargeTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerBackTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
  },
  tabName: 'Home',
  feedName: 'HOME',
});

const ExploreTab = createFeatureFeedTab({
  options: {
    headerRight: SearchButton,
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerLargeTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerBackTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
  },
  tabName: 'Explore',
  feedName: 'READ',
});

const WatchTab = createFeatureFeedTab({
  options: {
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerLargeTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerBackTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
  },
  tabName: 'Watch',
  feedName: 'WATCH',
});

const ConnectTab = createFeatureFeedTab({
  screenOptions: {
    headerLeft: ProfileButton,
  },
  options: {
    headerTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerLargeTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
    headerBackTitleStyle: {
      fontFamily: 'Montserrat-Black',
    },
  },
  tabName: 'Connect',
  TabComponent: CustomConnectScreen,
});

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  const client = useApolloClient();
  // this is only used by the tab loaded first
  // if there is a new version of the onboarding flow,
  // we'll navigate there first to show new screens
  useEffect(() => {
    checkOnboardingStatusAndNavigate({
      client,
      navigation: NavigationService,
      navigateHome: false,
    });
  }, [client]);
  return (
    <Navigator lazy>
      <Screen
        name="Home"
        component={HomeTab}
        options={{ tabBarIcon: tabBarIcon('house') }}
      />
      <Screen
        name="Watch"
        component={WatchTab}
        options={{ tabBarIcon: tabBarIcon('watch') }}
      />
      <Screen
        name="Explore"
        component={ExploreTab}
        options={{ tabBarIcon: tabBarIcon('explore') }}
      />
      <Screen
        name="Connect"
        component={ConnectTab}
        options={{ tabBarIcon: tabBarIcon('connect') }}
      />
    </Navigator>
  );
};

export default TabNavigator;
