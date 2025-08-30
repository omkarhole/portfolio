import {clsx} from "clsx";
import{twMerge} from "tailwind-merge";


//to combine many css into it.

const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export default cn;
