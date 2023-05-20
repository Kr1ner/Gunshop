import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <div className="z-10 select-none w-[74.583333333vw] h-[4vh] flex flex-row mt-10 justify-between text-slate-300">
            <Link className="font-first text-[2vw]" to="/">GunStore</Link>
            <ul className="w-[20vw] flex flex-row justify-between place-items-center">
                <Link className="text-[1vw] leading-loose   after:content-[''] after:block after:-mt-2 after:w-0 after:h-0.5 after:duration-150 after:bg-amber-300 hover:text-amber-300 duration-150 ease-in-out hover:after:w-full hover:after:duration-150" to="/">HOME</Link>
                <Link className="text-[1vw] leading-loose   after:content-[''] after:block after:-mt-2 after:w-0 after:h-0.5 after:duration-150 after:bg-amber-300 hover:text-amber-300 duration-150 ease-in-out hover:after:w-full hover:after:duration-150" to="/gallery">GALLERY</Link>
                <Link className="text-[1vw] leading-loose   after:content-[''] after:block after:-mt-2 after:w-0 after:h-0.5 after:duration-150 after:bg-amber-300 hover:text-amber-300 duration-150 ease-in-out hover:after:w-full hover:after:duration-150" to="/shop">SHOP</Link>
            </ul>
        </div>
    )
}