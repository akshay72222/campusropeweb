/**
 *
 * Asynchronously loads the component for Dialog
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
