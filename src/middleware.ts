import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Obtener el Referer de la petición
  const referer = req.headers.get('referer') || '';

  // Los dominios permitidos para que la app cargue dentro de un iframe
  const allowedDomains = ['https://www.playcode.com.ar', 'https://aulas.playcode.com.ar'];

  // Comprobar si el referer comienza con uno de los dominios permitidos
  const isFromAllowedDomain = allowedDomains.some(domain => referer.startsWith(domain));

  // Si la solicitud no viene desde los dominios permitidos, redirigir o bloquear
  if (!isFromAllowedDomain) {
    return NextResponse.redirect(new URL('/not-allowed', req.url));
  }

  // Si la solicitud viene de un iframe de los dominios permitidos, continuar con la carga
  return NextResponse.next();
}

// Aplicar el middleware a todas las rutas
export const config = {
  matcher: ['/', '/(.*)'], // Aplica el middleware a todas las rutas
};
