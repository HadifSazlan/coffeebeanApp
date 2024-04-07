import {CoffeeBean} from "@/types/CoffeeBean";
import {BeanCard} from "@/app/components/BeanCard";

async function getData() {
    const res = await fetch('http://localhost:3000/api/v1/beans')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

    const data = await getData()

    const beansList = data.map((bean: CoffeeBean) =>{
        return <li key={`bean-${bean.id}`}>
            <BeanCard bean={bean} expanded/>
        </li>
    });

    return (
        <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
           <div className="w-1/3">
               <h1 className="text-2xl font-bold tracking-wider">
                   Coffee Beans
               </h1>
               <ul className="space-y-3 mt-6">
                   {beansList}
               </ul>
           </div>
        </main>
    );
}
