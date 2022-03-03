import RockAuthedWebBrowser from '@apollosproject/ui-connected';

/* Add your custom theme definitions below. Anything that is supported in UI-Kit Theme can be
 overridden and/or customized here! */

/* Base colors.
 * These get used by theme types (see /types directory) to color
 * specific parts of the interface. For more control on how certain
 * elements are colored, go there. The next level of control comes
 * on a per-component basis with "overrides"
 */
const colors = {
  primary: '#3E4643',
  secondary: '#EB503D',
  tertiary: '#156072',
};

/* Base Typography sizing and fonts.
 * To control speicfic styles used on different type components (like H1, H2, etc), see "overrides"
 */
const typography = {
  sans: {
    regular: {
      default: 'Montserrat',
      italic: 'Montserrat-Italic',
    },
    medium: {
      default: 'Montserrat-Medium',
      italic: 'Montserrat-MediumItalic',
    },
    bold: {
      default: 'Montserrat-Bold',
      italic: 'Montserrat-BoldItalic',
    },
    black: {
      default: 'Montserrat-Black',
      italic: 'Montserrat-BlackItalic',
    },
  },
  ui: {
    regular: 'System',
  },
};

/* Responsive breakpoints */
// export const breakpoints = {};

/* Base sizing units. These are used to scale
 * space, and size components relatively to one another.
 */
// export const sizing = {};

/* Base alpha values. These are used to keep transparent values across the app consistant */
// export const alpha = {};

/* Base overlays. These are used as configuration for LinearGradients across the app */
// export const overlays = () => ({});

/* Overrides allow you to override the styles of any component styled using the `styled` HOC. You
 * can also override the props of any component using the `withTheme` HOC. See examples below:
 * ```const StyledComponent = styled({ margin: 10, padding: 20 }, 'StyledComponent');
 *    const PropsComponent = withTheme(({ theme }) => ({ fill: theme.colors.primary }), 'PropsComponent');
 * ```
 * These componnents can have their styles/props overriden by including the following overrides:
 * ```{
 *   overides: {
 *     StyledComponent: {
 *       margin: 5,
 *       padding: 15,
 *     },
 *     // #protip: you even have access 👇to component props! This applies to style overrides too 💥
 *     PropsComponent: () => ({ theme, isActive }) => ({
 *       fill: isActive ? theme.colors.secondary : theme.colors.primary,
 *     }),
 *   },
 * }
 * ```
 */
const buttons = () => ({
  default: {
    // Full Width Button Text
    fill: '#ffffff',
    // Hide Follow Request Button Text
    accent: '#ffffff',
  },
});

const overrides = {
  'ui-kit.Button.ButtonStyles': {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  'ui-prayer.PrayerView.SecondaryActionButton': {
    bordered: false,
    style: {
      backgroundColor: '#00000000',
      borderColor: '#00000000',
    },
  },
  'ui-onboarding.Features': {
    description:
      "We'd like to help you personalize your profile to make the most of your online experience.",
  },
  'ui-onboarding.LocationFinder': {
    description:
      "We'll use your location to connect you with your nearby campus and community.",
  },
  'ui-onboarding.AskNotifications': {
    description:
      "We'll let you know when important things are happening and keep you in the loop.",
  },
  'ui-onboarding.Follow': {
    description: 'Follow others to stay up to date on your church community.',
  },
  'ui-kit.ActionBar.ActionBarItem.ActionBarItem': (theme) => ({
    tint: theme.colors.text.secondary,
  }),
  'ui-kit.ContentTitles': {
    onPressShare: () => null,
  },
  'ui-kit.Button': {
    onPress: ({ action }) =>
      RockAuthedWebBrowser.open(
        action.relatedNode?.url,
        {},
        { useRockToken: true }
      ),
  },
};

export default { buttons, colors, overrides, typography };
