import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import AllProducts from '../../components/Products'

const Post = () => {
    const router = useRouter()
    const { storename } = router.query

    const [loading, setLoading] = useState(true);
    const [displayName, setDisplayName] = useState(null);
    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState(null);


    useEffect(() => {
        if (storename) {
            console.log(storename)

            fetch(`https://storelution.herokuapp.com/api/store/view/${storename}`).then(res => {
                return res.json();
            }).then((data) => {
                setDisplayName(data["store"]["store_name"])
                setProducts(data["store"]["products"])

                setLoading(false);

            });

        } else {
            return;
        }
    }, [storename]);


    

    return (
        <div className="">
            <Head>
                <title>{displayName + " | Store made by Storelution"}</title>
            </Head>



            {loading && <div>Loading...</div>}

           { products && <div>


                <NavBar displayName={displayName} />
                {/* <Hero /> */}
                <AllProducts products={products} storename={storename} />
            </div>}

        </div>
    )
}

export default Post


