/**
 *
 * Asynchronously loads the component for FloatingButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
