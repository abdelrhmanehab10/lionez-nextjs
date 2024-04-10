import { useEffect } from 'react';
import { useRouter } from 'next/router';
import restrictIndiaMiddleware from '../restrictCountry/restrictCountry';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Apply the India restriction middleware to all routes
    const handleRouteChange = (url) => {
      router.events.on('routeChangeComplete', restrictIndiaMiddleware);
      return () => {
        router.events.off('routeChangeComplete', restrictIndiaMiddleware);
      };
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
