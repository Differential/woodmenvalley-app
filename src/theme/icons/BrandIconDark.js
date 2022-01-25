import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 32, fill } = {}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M13.783 26.3037H20.4368L28.7919 52.2693L37.1477 26.3068H43.8019L31.5612 61.578L26.0232 61.5742L13.783 26.3037Z"
      fill="#FFFFFF"
    />
    <Path
      d="M40.6366 39.0924L43.9271 29.6426L51.2074 52.2693L59.5632 26.3068H66.2174L53.9768 61.578L48.4388 61.5742L40.6366 39.0924Z"
      fill="#FFFFFF"
    />
    <Path
      d="M41.5842 2.97477C60.7636 3.78546 76.2141 19.2362 77.0256 38.4155H80C79.1847 17.5954 62.4036 0.814952 41.5842 -4.04081e-06V2.97477"
      fill="#FFFFFF"
    />
    <Path
      d="M2.97487 38.4155C3.78633 19.2362 19.2368 3.78546 38.4159 2.97477V-4.04081e-06C17.5964 0.814952 0.815346 17.5954 0 38.4155H2.97487Z"
      fill="#FFFFFF"
    />
    <Path
      d="M38.4159 77.0244C19.2368 76.2137 3.78595 60.763 2.97487 41.5837H0C0.815346 62.4038 17.5964 79.1843 38.4159 80V77.0244Z"
      fill="#FFFFFF"
    />
    <Path
      d="M77.0256 41.5837C76.2141 60.763 60.7636 76.2137 41.5842 77.0244V80C62.4036 79.1843 79.1851 62.4038 80 41.5837H77.0256"
      fill="#FFFFFF"
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
