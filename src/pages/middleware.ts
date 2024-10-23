import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || '';

  // Los dominios permitidos
  const allowedDomains = ['https://www.playcode.com.ar', 'https://aulas.playcode.com.ar'];

  // Comprobar si la solicitud proviene de los dominios permitidos
  const isFromAllowedDomain = allowedDomains.some(domain => referer.startsWith(domain));

  // Si la solicitud no proviene de un dominio permitido, redirigir a /not-allowed
  if (!isFromAllowedDomain) {
    return NextResponse.redirect(new URL('/not-allowed', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Aplica el middleware a todas las rutas
};
