import {Roaster} from "@/types/Roaster";
import {CoffeeBean} from "@/types/CoffeeBean";
import {BeanCard} from "@/app/components/BeanCard";
import React from "react";
import Link from "next/link";
import {Metadata} from 'next'

const apiUrl = process.env.API_URL

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    {params}: Props,
): Promise<Metadata> {

    const slug = params.slug

    const roaster: Roaster = await getData(slug)

    return {
        title: roaster.name,
        openGraph: {
            title: roaster.name,
        },
        twitter: {
            title: roaster.name
        }
    }
}

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
    const res = await fetch(`${apiUrl}/roasters/${slug}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return await res.json()
}

export default async function Page({params}: { params: { slug: string } }) {

    const roaster: Roaster = await getData(params.slug)

    const contactDetails = (
        <ul className="list-none space-y-1">
            <li>Phone: {roaster.phone}</li>
            <li>Email: {roaster.email}</li>
        </ul>
    );

    const beansList = (
        <ul className="space-y-3 list-none">
            {
                roaster.beans.map((bean: CoffeeBean) => {
                    return <li key={`bean-${bean.id}`}
                               className="w-full"
                    >
                        <BeanCard bean={bean}/>
                    </li>;
                })
            }
        </ul>
    );

    return (
        <div>
            <main className="flex min-h-screen bg-white flex-col items-center p-24">
                <div className="w-1/3">
                    <div className="flex justify-start">
                        <div>
                            <Link href="/"
                                  scroll={false}
                                  className="hover:bg-gray-100 px-2 py-3 rounded-lg text-sm"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className="text-2xl font-bold tracking-wider">
                            {roaster.name}
                        </h1>
                        <div className="mt-6">
                            <h2 className="text-xl font-bold tracking-wider">
                                Beans
                            </h2>
                            <div className="mt-2">
                                {beansList}
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-medium tracking-wide">
                                Contact Details
                            </h3>
                            <div className="mt-2">
                                {contactDetails}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}