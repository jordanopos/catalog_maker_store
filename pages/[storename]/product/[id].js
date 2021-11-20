import { useRouter } from "next/router";
import { useEffect, useState  } from "react";
import ProductDetails from "../../../components/ProductDetails";

const ProductDetailsPage = () => {
    const router = useRouter()
    const { id } = router.query;

    const [product, setproducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        if (id) {
            console.log(id)
            fetch(`https://storelution.herokuapp.com/api/product/view/${id}`).then(res => {
                return res.json();
            }).then((data) => {
                console.log(data.product);
                setproducts(data.product);
                setloading(false);
            });

        } else {
            return;
        }
    },
        [id]);


    return (
    
        <div>
            {loading && <div>Loading...</div>}

            {product && <ProductDetails product={product}/>}
        </div>
    
    
    
    
    );
}

export default ProductDetailsPage;