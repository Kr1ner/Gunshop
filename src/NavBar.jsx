import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <div className="select-none w-[74.583333333vw] h-11 flex flex-row mt-10 justify-between text-slate-300">
            <Link className="font-first text-4xl" to="/">GunStore</Link>
            <ul className="w-64 flex flex-row justify-between">
                <Link className="text-xl leading-loose duration-150 ease-in-out hover:text-amber-300 duration-150 ease-in-out" to="/">HOME</Link>
                <Link className="text-xl leading-loose ease-in-out hover:text-amber-300 duration-150 ease-in-out" to="/gallery">GALLERY</Link>
                <Link className="text-xl leading-loose ease-in-out hover:text-amber-300 duration-150 ease-in-out" to="/shop">SHOP</Link>
            </ul>
        </div>
    )
}