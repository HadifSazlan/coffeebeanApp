import {Roaster} from "@/types/Roaster";
import {CoffeeBean} from "@/types/CoffeeBean";

const apiUrl = process.env.API_URL

export async function generateStaticParams() {
    const res = await fetch(`${apiUrl}/roasters`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data.map((item: { roasters: Roaster, beanology: CoffeeBean }) => ({
        slug: item.roasters?.slug,
    }));
}

async function getData(slug: string) {
    console.log(`${apiUrl}/roasters/${slug}`)
    const res = await fetch(`${apiUrl}/roasters/${slug}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data[0]
}

export default async function Page({params}: { params: { slug: string } }) {

    const data = await getData(params.slug)

    console.log({data})

    return (
        <div>
            <h1>
                {data.roasters?.name}
            </h1>
        </div>
    )
}