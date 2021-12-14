import PropTypes from 'prop-types';
import Svg, { Polyline } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 28, fill } = {}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill={fill}
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Polyline
      points="96 48 176 128 96 208"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="192"
  height="192"
  fill="#000000"
  viewBox="0 0 256 256"
>
  <rect width="256" height="256" fill="none" />
  <polyline
    points="96 48 176 128 96 208"
    fill="none"
    stroke="#000000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="16"
  />
</svg>;
