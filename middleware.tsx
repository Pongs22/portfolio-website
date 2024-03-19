import type { NextRequest } from 'next/server'
// import { updateSession } from './app/lib/action';

export async function middleware(request: NextRequest) {

    const currentUser = request.cookies.get('currentUser')?.value;
    

    if (!currentUser && !request.nextUrl.pathname.startsWith('/')) {
        return Response.redirect(new URL('/login', request.url))
    }

    // return await updateSession(request);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}