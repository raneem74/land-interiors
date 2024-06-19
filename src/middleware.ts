/* eslint-disable consistent-return */
import { NextResponse } from 'next/server';
import { type NextRequest as TNextRequest, type NextResponse as TNextResponse } from 'next/server';

export const middleware = (request: TNextRequest): TNextResponse | undefined => {
    // Skip next internal requests
    if (request.nextUrl.pathname.startsWith('/_next')) return;
    if (request.nextUrl.pathname.startsWith('/images')) return;
    if (request.nextUrl.pathname.startsWith('/public')) return;
    if (request.nextUrl.pathname === '/favicon.ico') return;

    // const protocol = 'https';
    const host = request.headers.get('host');
    // const originalUrl = request.headers.get('originalUrl');
    // const fullUrl = `${protocol}://${host}${originalUrl}`;

    // Check if the route starts with locale
    const { pathname } = request.nextUrl;

    const isPathnameMissingLocale =
        !pathname.startsWith(`/en/`) && pathname !== `/en` && !pathname.startsWith(`/ar/`) && pathname !== `/ar`;

    // Let's redirect if missing
    if (isPathnameMissingLocale) {
        const newURL = new URL(`http://${host}/en${pathname}`, request.url);

        console.log('Redirecting to', newURL);
        return NextResponse.redirect(newURL);
    }
};

export const config = {
    matcher: ['/((?!_next).*)'],
};
