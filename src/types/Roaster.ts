import {CoffeeBean} from "@/types/CoffeeBean";

export type Roaster =
{
    name: string
    slug: string
    email: string
    phone: string,
    beans: CoffeeBean[]
}