import {SearchNormal} from "iconsax-react";

const Hero = () => {
    const print = ()=>{
        console.log("Print")
    }
    return (
        <div className="pt-10 px-8">
            <h1 className="text-2xl font-bold">Delivery from your favorite <br /> adress</h1>

            <div className="flex h-11 mt-5">
                <input type="text" className="w-4/5 bg-gray-100 rounded-md mr-2 outline-none px-3" />

                <button onClick={()=> print()} className="bg-blue-600 flex-grow rounded-md justify-center items-center flex">
                    <SearchNormal color="white"/>
                </button>

            </div>
        </div>
    );
}

export default Hero;