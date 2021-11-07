import {ShoppingCart} from "iconsax-react";

const NavBar = ({displayName}) => {
    return (
        <div className="h-16 flex shadow-lg items-center px-8 justify-between sticky top-0 z-50 bg-white">
              <h2>{displayName}</h2>
                <ShoppingCart/>
        </div>
    );
}

export default NavBar;