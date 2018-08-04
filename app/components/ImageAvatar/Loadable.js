/**
 *
 * Asynchronously loads the component for ImageAvatar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
