export default async function Page() {

    const res = await fetch('http://jm-portfolio.local/wp-json/wp/v2/posts');
    const json = await res.json();

    return <h1 className ='text-dark-blue-05'>{json.id}</h1>


}