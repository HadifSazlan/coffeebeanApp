import {CoffeeBean} from "@/types/CoffeeBean"
import React from "react"
import Link from 'next/link'

interface BeanCardProps {
    bean: CoffeeBean;
}

export const BeanCard: React.FC<BeanCardProps> = ({bean}) => {
    const beanDetails = (
        <ul>
            <li>Origin: {bean.origin}</li>
            <li>Flavor: {bean.flavor}</li>
            <li>Process: {bean.process}</li>
            <li>Altitude: {bean.altitude}</li>
        </ul>
    );

    return (
        <div className="border py-4  space-y-2 rounded-lg">
            <div className="px-4">
                <p className="text-xl font-bold tracking-wide">{bean.name}</p>
                <div className="text-sm space-y-2 mt-2">{beanDetails}</div>
            </div>
            <div className="border-t px-4">
                <p className="text-xs  divide-x-2 pt-2">
                    {
                        bean.roasterName &&
                        (
                            <div>
                                <span className="pr-1">Roasted by</span>
                                <Link href={`/roasters/${bean.roasterSlug}`}
                                    className="hover:text-blue-400"
                                >
                                    {bean.roasterName}
                                </Link>
                            </div>
                        )
                    }
                    {
                        bean.supplierName &&
                        <span className="pl-1">
                            Supplied by {bean.supplierName}
                        </span>
                    }
                </p>
            </div>
        </div>
    );
};
