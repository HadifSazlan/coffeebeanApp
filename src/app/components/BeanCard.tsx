import {CoffeeBean} from "@/types/CoffeeBean"
import React from "react"
import Link from 'next/link'

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
        <div className="border-t px-4">
            <ul className="text-xs pt-2">
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
        <div className="border py-4 space-y-2 rounded-lg">
            <div className="px-4">
                <p className="text-xl font-bold tracking-wide">{bean.name}</p>
                <div className="text-sm space-y-2 mt-2">{beanDetails}</div>
            </div>
            {expandedDetails}
        </div>
    );
};
