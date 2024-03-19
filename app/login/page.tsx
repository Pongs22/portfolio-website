import { login } from '../lib/action'
import { RedirectType, redirect } from 'next/navigation';


export default async function LoginPage() {
    
    const onLogin = async (formData: FormData) => {
            "use server"
             await login(formData);
             redirect('/blog');
    }

    return (
        <div className="bg-dark-blue-05 h-screen flex flex-col gap-y-8 space-y-8 content-center my-auto">
            <div className="mx-auto my-auto">
                <form action={onLogin} className='mx-auto my-auto bg-dark-blue-05 flex flex-col gap-y-5 max-w-xl'>
                    <input type="text" name="username" placeholder="username" required className='text-dark-blue-05' />
                    <input type="password" name="password" placeholder="Password" required className='text-dark-blue-05' />
                    <button type="submit" className='bg-white text-dark-blue-05 w-full'>Login</button>
                </form>
            </div>
        </div>
    );
}
