import { Navbar } from "flowbite-react";

export default function Hero(){
    return (
        <div>
            <div
                className="flex items-center justify-between"
            >
                <h1 className="text-2xl text-left font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Discover Nice Articles Here</h1>
                <div className="flex flex-wrap justify-center gap-2">

                    <button className="bg-blue-100 p-2 font-semibold text-sky-400/100 inline-flex items-center space-x-2 rounded-full">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                    </button>

                    <button className="bg-red-100 p-2 font-semibold text-red-400/100 inline-flex items-center space-x-2 rounded-full">
                        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
                    </button>
                </div>
            </div>
            <p className="my-10 text-lg text-slate-500 text-left">All The Articles & Contents Of This Have Been <span className="text-dark font-bold">Updated Today</span> And You Can Find <br /> Your <span className="text-dark font-bold">Articles & Contents</span> Quickly And Without Any Problems.</p>

            {/* Search & Filter Area */}
            <div className="flex items-center justify-between md:gap-20">
                <form className="flex items-center flex-auto w-full">   
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    </div>
                </form>
                
                {/* Categories */}
                <Navbar
                    className="hidden md:block"
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link
                        href="/navbars"
                        >
                        All
                        </Navbar.Link>
                        <Navbar.Link
                            to="/navbars"
                        >
                        Manufacturing
                        </Navbar.Link>
                        <Navbar.Link href="/navbars" active={true}>
                        Technology
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                        Sport
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                        Design
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                        Programming
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                        Engineering
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}