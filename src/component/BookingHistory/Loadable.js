import Loadable from 'react-loadable';
import Loading from 'component/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./index'),
    loading: Loading
});

export default LoadableComponent;
