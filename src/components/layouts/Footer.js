export default function Footer(){
  return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-3 md:px-16">
            <div className="sm:flex sm:items-center justify-center sm:justify-between">
                <ul className="flex items-center justify-center sm:justify-normal mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">
                        About
                    </a>
                    </li>
                    <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">
                        Licensing
                    </a>
                    </li>
                    <li>
                    <a href="/" className="hover:underline">
                        Contact
                    </a>
                    </li>
                </ul>
                <a href="/" className="flex justify-center sm:justify-normal items-center mb-4 sm:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" className="rounded-full"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M37,42h-26c-2.761,0 -5,-2.239 -5,-5v-26c0,-2.761 2.239,-5 5,-5h26c2.761,0 5,2.239 5,5v26c0,2.761 -2.239,5 -5,5z" fill="#339af0"></path><path d="M33.5,22h-1c-0.828,0 -1.5,-0.672 -1.5,-1.5v-0.5c0,-3.866 -3.134,-7 -7,-7h-4c-3.866,0 -7,3.134 -7,7v8c0,3.866 3.134,7 7,7h8c3.866,0 7,-3.134 7,-7v-4.5c0,-0.828 -0.672,-1.5 -1.5,-1.5zM20,19h5c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1h-5c-0.553,0 -1,-0.448 -1,-1c0,-0.552 0.447,-1 1,-1zM28,29h-8c-0.553,0 -1,-0.448 -1,-1c0,-0.552 0.447,-1 1,-1h8c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1z" fill="#ffffff"></path></g></g></g></svg>
                    <h1 className="self-center whitespace-nowrap text-xl font-[900] dark:text-white">BLOG<span className="text-gray-400">.COM</span></h1>
                </a>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©2023. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>
    )
}