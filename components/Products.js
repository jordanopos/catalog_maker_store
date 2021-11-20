import StackGrid from "react-stack-grid";
import ProductDisplayComponent from "./ProductDisplay";

const AllProducts = ({ store }) => {
    return (
        <div className="pt-5 px-7">
            <div className="grid grid-cols-2">
                {store.products.map((item) => (
                    <ProductDisplayComponent product={item} key={item.id} storename={store.unique_name} />
                ))}

            </div>
        </div>

    );
}

export default AllProducts;






{/* <StackGrid columnWidth={190}   >

            </StackGrid> */}
















    //         "name": "Controller",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 2,
    //         "name": "Play Station",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 3,

    //         "name": "Condoms",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     },
    //     {
    //         "id": 4,
    //         "name": "Controller",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 5,

    //         "name": "Play Station",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 6,

    //         "name": "Condoms",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     },
    //     {
    //         "id": 7,
    //         "name": "Controller",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 8,

    //         "name": "Play Station",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 9,

    //         "name": "Condoms",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     },
    //     {
    //         "id": 10,
    //         "name": "Controller",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 11,

    //         "name": "Play Station",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }, {
    //         "id": 12,
    //         "name": "Condoms",
    //         "price": 3000,
    //         "image": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     }
    // ]
