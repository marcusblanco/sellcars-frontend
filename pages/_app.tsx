import '../styles/globals.scss';
// import '../styles/reset.scss';

import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import store from '../state/reducers';
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
