import { cookies } from "next/headers";



export async function login( formData: FormData ) {
    const username = formData.get( 'username' );
    const password = formData.get( 'password' );

    const tokenResponse = await fetch(`${process.env.WORDPRESS_API_URL}/api/v1/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { username, password } ),
    });

    if (!tokenResponse.ok) {
        console.log('This email have no existing account');
        return;
    }

    const { jwt_token } = await tokenResponse.json();

    const validateResponse = await fetch( `${process.env.WORDPRESS_API_URL}/api/v1/token-validate`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt_token}`,
        },
    });

    if ( validateResponse.ok ) {

        const setcookies = cookies().set('session', jwt_token , { httpOnly: true });
    }
}


export async function getSession() {

    const session = cookies().get('session')?.value;
    if ( !session ) { return null };
    return session;
}

export async function logout(formData: FormData) {
    cookies().set('session', '', { expires: new Date(0) });
}
