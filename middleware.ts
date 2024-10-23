import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || '';
  const allowedDomain = 'https://www.playcode.com.ar';

  // Si la solicitud no viene de tu dominio, redirige o bloquea
  if (!referer.startsWith(allowedDomain)) {
    return NextResponse.redirect(new URL('/not-allowed', req.url));
  }

  // Si viene de tu sitio, permite continuar
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Aplica el middleware en todas las rutas
};
