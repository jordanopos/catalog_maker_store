import { useRouter } from "next/router";

const ProductsPage = () => {

    const router = useRouter();

    const {id} = router.query;
    return ( 
        <div className="">{id}</div>
     );
}
 
export default ProductsPage;