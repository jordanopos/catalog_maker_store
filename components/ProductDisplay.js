const commafy = require("commafy")
import Link from "next/link";
import { useState } from "react";

const ProductDisplayComponent = ({ product, key, storename }) => {
    const [loaded , setLoaded] = useState(false);
    return (
        <Link href={"/product/" + product.id}>
            <div className={ loaded ?"flex flex-col px-1 py-1" : "hidden"} key={key}>
                <img 
                onLoad={()=> setLoaded(true)}
                className="rounded mb-2" src={product.product_image} alt="product" />
                <div className="">
                    <h1 className="text-xs">{product.product_name}</h1>
                    <h1 className="font-bold text-sm">UGX {commafy(product.product_price)}</h1>
                </div>

            </div>
        </Link>

    );
}

export default ProductDisplayComponent;