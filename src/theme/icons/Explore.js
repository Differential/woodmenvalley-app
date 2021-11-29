import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 28, fill } = {}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M14 4.5C8.75329 4.5 4.5 8.75329 4.5 14C4.5 19.2467 8.75329 23.5 14 23.5C19.2467 23.5 23.5 19.2467 23.5 14C23.5 8.75329 19.2467 4.5 14 4.5ZM2.5 14C2.5 7.64873 7.64873 2.5 14 2.5C20.3513 2.5 25.5 7.64873 25.5 14C25.5 20.3513 20.3513 25.5 14 25.5C7.64873 25.5 2.5 20.3513 2.5 14Z"
      fill={fill}
    />
    <Path
      d="M19.9441 8.04222C20.2439 8.34149 20.3227 8.79724 20.1406 9.17977L16.7585 16.286C16.6572 16.4988 16.484 16.6691 16.2694 16.7666L9.46339 19.8602C9.0839 20.0327 8.63723 19.9517 8.34248 19.6569C8.04773 19.3621 7.96673 18.9155 8.13923 18.536L11.2329 11.73C11.3302 11.516 11.4997 11.3432 11.7117 11.2417L18.8061 7.84793C19.1883 7.66511 19.6442 7.74295 19.9441 8.04222ZM12.9031 12.8889L11.0634 16.936L15.1095 15.0969L17.1206 10.8713L12.9031 12.8889Z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
