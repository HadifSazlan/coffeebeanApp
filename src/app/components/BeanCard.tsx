import {CoffeeBean} from "@/types/CoffeeBean"
import React from "react"
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BeanCardProps {
    bean: CoffeeBean
    expanded?: boolean
}

export const BeanCard: React.FC<BeanCardProps> = ({bean, expanded = false}) => {
    const beanDetails = (
        <ul>
            <li>Origin: {bean.origin}</li>
            <li>Flavor: {bean.flavor}</li>
            <li>Process: {bean.process}</li>
            <li>Altitude: {bean.altitude}</li>
        </ul>
    );

    const expandedDetails = expanded && (
        <div className="border-t ">
            <ul className="text-sm pt-2">
                {
                    bean.roaster &&
                    (
                        <li>
                            <span className="pr-1">Roasted by</span>
                            <Link href={`/roasters/${bean.roaster.slug}`}
                                  className="hover:text-blue-400"
                            >
                                {bean.roaster.name}
                            </Link>
                        </li>
                    )
                }
                {
                    bean.supplier &&
                    <li>
                        Supplied by {bean.supplier.name}
                    </li>
                }
            </ul>
        </div>
    )

    return (

        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{bean.name}</CardTitle>
                    {
                        bean.link && (
                            <Button asChild>
                                <a href={bean.link}
                                   className="px-3 py-2 text-gray-200 rounded-lg bg-blue-700 hover:bg-opacity-90"
                                >
                                    BUY NOW
                                </a>
                            </Button>
                        )
                    }
                </div>

            </CardHeader>
            <CardContent>
                <div className=" space-y-2 mt-2">{beanDetails}</div>
            </CardContent>
            <CardFooter>
                {expandedDetails}
            </CardFooter>
        </Card>


   /*
   <div className="border py-4 space-y-2 rounded-lg">
            <div className="px-4">
                <div className="flex justify-between items-center">
                    <p className="text-xl md:text-2xl font-bold tracking-wide">{bean.name}</p>
                    {
                        bean.link && (
                            <a href={bean.link}
                               className="px-3 py-2 text-gray-200 rounded-lg bg-blue-700 hover:bg-opacity-90"
                            >
                                BUY NOW
                            </a>
                        )
                    }
                </div>
                <div className=" space-y-2 mt-2">{beanDetails}</div>
            </div>
            {expandedDetails}
        </div>
        */
    );
};
