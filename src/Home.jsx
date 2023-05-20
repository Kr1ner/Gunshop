import { Link } from 'react-router-dom'
import HomeSoldier from '/src/assets/homegirlgun.png'

export default function Home(){
    const scrollDown = ()=>{
        window.scrollBy({
            top: 500,
            left: 0,
            behavior : "smooth"
        })
    }
    return(
       <div id='home-page' className="w-screen flex flex-row justify-center">
        <div id='display-section' className="w-4/5 h-screen flex flex-row items-center justify-between -mt-32">
            <u className="no-underline">
                <h1 className="text-slate-200 font-first font-black text-[3.3vw]">We don't just sell guns,<br /> we sell peace of mind.</h1>
                <p className="text-[1.1vw] text-gray-300">Welcome to GunStore, your premier destination for all your firearm needs.<br /> Whether you're an avid hunter, a sport shooter, or a responsible gun owner<br /> seeking to protect yourself and your loved ones, we are here to provide you <br/>with a wide selection of high-quality firearms and accessories. </p>
                <br/>
                <p className='flex flex-row w-full h-full'>
                <a href='#' className="rounded-full select-none flex flex-col justify-center items-center font-first text-slate-100 bg-amber-800 w-52 h-10 hover:bg-zinc-800 hover:text-amber-500 hover:border-2 hover:border-amber-500 duration-150 hover:duration-150">Our Social Media</a>
                <Link className='rounded-full select-none flex flex-col justify-center items-center font-first text-slate-100  w-52 h-10 hover:text-amber-500 duration-150 hover:duration-150' to='/shop'>Shop Now ➜</Link>
                </p>
            </u>
            <img className='w-[35vw] h-[35vw]' src={HomeSoldier}/>
            </div>
            <svg onClick={scrollDown} className="w-16 absolute mt-[80vh] hover:cursor-pointer"version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path stroke="white" stroke-width="10" fill="#fff" d="m386.96 445.76-36.961 36.957-36.961-36.961c-4.4805-4.4805-11.199-4.4805-15.68 0-4.4805 4.4805-4.4805 11.199 0 15.68l44.801 44.801c2.2383 2.2422 5.0391 3.3633 7.8398 3.3633s5.6016-1.1211 7.8398-3.3594l44.801-44.801c4.4805-4.4805 4.4805-11.199 0-15.68s-11.199-4.4805-15.68 0z"/> <path stroke="white" stroke-width="10" fill="#fff" d="m402.64 384.16c-4.4805-4.4805-11.199-4.4805-15.68 0l-36.961 36.961-36.961-36.961c-4.4805-4.4805-11.199-4.4805-15.68 0-4.4805 4.4805-4.4805 11.199 0 15.68l44.801 44.801c2.2383 2.2383 5.0391 3.3594 7.8398 3.3594s5.6016-1.1211 7.8398-3.3594l44.801-44.801c4.4805-4.4805 4.4805-11.199 0-15.68z"/> <path stroke="white" stroke-width="10" fill="#fff" d="m450.8 252v-100.8c0-55.441-45.359-100.8-100.8-100.8s-100.8 45.359-100.8 100.8v100.8c0 55.441 45.359 100.8 100.8 100.8s100.8-45.359 100.8-100.8zm-100.8 78.398c-43.121 0-78.398-35.281-78.398-78.398v-100.8c0-43.121 35.281-78.398 78.398-78.398 43.121 0 78.398 35.281 78.398 78.398v100.8c0 43.121-35.277 78.398-78.398 78.398z"/> <path stroke="white" stroke-width="10" fill="#fff" d="m350 112c-6.1602 0-11.199 5.0391-11.199 11.199v33.602c0 6.1602 5.0391 11.199 11.199 11.199s11.199-5.0391 11.199-11.199v-33.602c0-6.1602-5.0391-11.199-11.199-11.199z"/> </g> </svg>
       </div>
    )
}