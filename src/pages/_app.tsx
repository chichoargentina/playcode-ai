import '@/i18n';

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@charcoal-ui/icons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}


// agrega en pages/_app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Comprobar si la aplicación está siendo cargada en un iframe
    if (window.self === window.top) {
      // Si no está en un iframe, redirigir a la página de acceso denegado
      router.push('/not-allowed');
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
