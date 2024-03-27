import Image from "next/image";
import { getSession } from '../lib/action'
import { redirect } from 'next/navigation'
import { logout } from '../lib/action'
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    name: string;
}
if (typeof window !== 'undefined') {
    window.history.replaceState({}, document.title, window.location.href);
}

export default async function ProfilePage() {
    const session = await getSession();
    if (!session) {
        redirect('/login');
    }
    const onLogout = async (formData: FormData) => {
        "use server"
        await logout(formData);
        redirect('/');
    }
    const decodedHeader = jwtDecode(session) as JwtPayload;

    return (
        <>
            <div>
                <div>
                    <Image className="h-50 w-full object-cover lg:h-60" src="/assets/social-share-image.png" alt="" width={1600} height={900}
                    />
                </div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                            <Image className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="/assets/social-share-image.png" alt="" width={1600} height={900} />
                        </div>
                        <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                                <h1 className="truncate text-2xl font-bold text-gray-900">{decodedHeader.name}</h1>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <form action={onLogout}>
                                    <button type="submit" className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Logout</button>
                                </form>
                                <button type="button" className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                        <h1 className="truncate text-2xl font-bold text-gray-900">{decodedHeader.name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}