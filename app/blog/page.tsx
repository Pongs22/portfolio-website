import { getSession } from '../lib/action'
import { redirect } from 'next/navigation'
import { logout } from '../lib/action'
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    name: string;
}

export default async function Page() {
    const session = await getSession();
    if (!session) {
        return null;
    }
    const onLogout = async (formData: FormData) => {
        "use server"
        await logout(formData);
        redirect('/');
    }

    const decodedHeader = jwtDecode(session) as JwtPayload;
    try {

        const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp/v2/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session}`,
            },
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }
        const posts = await res.json();
        return (
            <>
                <div className="container">
                    <div>
                        <h1 className='text-dark-blue-05 font-oswald text-[70px]'>Good Day User {decodedHeader.name}</h1>
                    </div>
                    <div>
                        <p className='text-dark-blue-05 font-oswald text-[40px] font-bold'>Articles in GL Component Library</p>
                    </div>
                    <div>
                        {posts.map((post: any) => (
                            <div key={post.id}>
                                <h1 className='text-dark-blue-05 font-oswald text-[30px]'>
                                    - {post.title.rendered}</h1>
                            </div>
                        ))}
                    </div>
                    <form className="mt-4 " action={onLogout}>
                        <button type="submit" className='bg-dark-blue-05 text-white max-w-sm py-2 px-5 rounded-lg mx-auto'>Logout</button>
                    </form>
                </div>
            </>
        );
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
