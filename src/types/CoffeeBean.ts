import {Roaster} from "@/types/Roaster";
import {Supplier} from "@/types/Supplier";

export type CoffeeBean = {
    id: number
    slug: string
    name: string
    origin: string
    flavor: string
    process: string
    altitude: string
    roaster?:Roaster
    supplier?:Supplier
}