const commafy = require("commafy")
import Link from "next/link";

const ProductDisplayComponent = ({ product, key, storename }) => {
    return (
        <Link href={"/product/" + product.id}>
            <div className="flex flex-col px-1 py-1" key={key}>
                <img className="rounded mb-2" src={product.product_image} alt="controllers i think" />

                <div className="">
                    <h1 className="text-xs">{product.product_name}</h1>
                    <h1 className="font-bold text-sm">UGX {commafy(product.product_price)}</h1>
                </div>

            </div>
        </Link>

    );
}

export default ProductDisplayComponent;