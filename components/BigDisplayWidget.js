const commafy  = require("commafy")

const BigDisplayWidget = ({ product }) => {
    return (
        <div className=" px-4 pt-10">
            <img className="w-screen rounded-md" src={product.product_image}></img>
            <div className="pt-2">
                <h1 className="text-lg">{product.product_name}</h1>
                <h1 className="font-bold text-sm">UGX {commafy(product.product_price)}</h1>
            </div>
        </div>
    );
}

export default BigDisplayWidget;