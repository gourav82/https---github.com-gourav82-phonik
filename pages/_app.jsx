import '../styles/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-modern-drawer/dist/index.css'
import Header from '../component/layouts/header/Header';
import Footer from '../component/layouts/footer/Footer';
import AppProvider from '../context/AppProvider';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
    </Provider>
  </>
}
