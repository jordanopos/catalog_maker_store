import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import AllProducts from '../../components/Products'
import BigDisplayWidget from '../../components/BigDisplayWidget'

const Post = () => {
    const router = useRouter()
    const { storename } = router.query

    const [loading, setLoading] = useState(true);
    const [store, setStore] = useState(null);
    const [namestore, setStorename] = useState(null);


    useEffect(() => {
        if (storename) {
            console.log(storename)

            fetch(`https://storelution.herokuapp.com/api/store/view/${storename}`).then(res => {
                return res.json();
            }).then((data) => {
                setStore(data.store);
                setStorename(data.store.store_name);
                setLoading(false);
            });

        } else {
            return;
        }
    }, [storename]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className="">
            <Head>
                <title>{namestore + " | Store made with Storelution"}</title>
            </Head>

            {loading && <div>Loading...</div>}

            {store && <div>
                <NavBar displayName={store.store_name} />
                <BigDisplayWidget product={store.products[getRandomInt(store.products.length)]} />
                <AllProducts store={store} />
            </div>}

        </div>
    )
}

export default Post


