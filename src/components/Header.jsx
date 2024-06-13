import Button from "./Button";
import Image from "./Image";
import AddOne from '../assets/img/logo.png'

export default function Header() {
  return (
    <nav class="bg-[#191919] container m-auto ">
      <div class="flex flex-wrap items-center justify-between mx-auto pt-[48px] pb-[28px]">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={AddOne} className="w-10"/>
      </a>
      <div class="flex md:order-1 flex-1 mx-[30px]">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <form class=" mx-auto w-full">   
            <div class="relative flex border rounded-[10px] border-[#353535]">
                <input type="search" id="default-search" class="block w-full px-4 py-2 text-sm text-gray-900  bg-transparent focus:ring-blue-500 focus:border-0   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" required />
                <button type="submit" class="text-white bg-[#ff0000]  font-medium rounded-r-[10px] text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-[11px] px-[15px]">
                  <svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentcolor" ><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </button>
            </div>
        </form>

        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-transparent rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>       
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">          
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium text-white md:flex-row md:mt-0 md:border-0  me-[25px]">
            <li>
              <a href="#" class="relative px-[25px] text-md text-color-[rgb(255 255 255 / 70%)] block py-0 px-3 opacity-70 active headerMenu" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="relative px-[25px] text-md text-color-[rgb(255 255 255 / 70%)] block py-0 px-3 opacity-70 headerMenu">Search</a>
            </li>
            <li>
              <a href="#" class="relative px-[25px] text-md text-color-[rgb(255 255 255 / 70%)] block py-0 px-3 opacity-70 headerMenu">Live Cams</a>
            </li>
            <li>
              <a href="#" class="relative px-[25px] text-md text-color-[rgb(255 255 255 / 70%)] block py-0 px-3 opacity-70 headerMenu">Videos</a>
            </li>
          </ul>
          <div class="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
             <Button label="Login" className={"bg-transparent border  text-bold text-white me-2 rounded-[10px] border-[#ff0000]"} onClick={()=>console.log("onlcik")} />
              <Button label="Register" className={" !bg-[#ff0000] text-bold "} onClick={()=>console.log("onlcik")} />
        </div>
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
          </div>
        </div>
      </div>
    </nav>

  )
}
