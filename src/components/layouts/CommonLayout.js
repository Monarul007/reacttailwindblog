import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import phoneIcon from "../images/phone-30.png"

export default function CommonLayout(){
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="sm:px-0"
            >
                <Navbar.Brand href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" className="rounded-full"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M37,42h-26c-2.761,0 -5,-2.239 -5,-5v-26c0,-2.761 2.239,-5 5,-5h26c2.761,0 5,2.239 5,5v26c0,2.761 -2.239,5 -5,5z" fill="#339af0"></path><path d="M33.5,22h-1c-0.828,0 -1.5,-0.672 -1.5,-1.5v-0.5c0,-3.866 -3.134,-7 -7,-7h-4c-3.866,0 -7,3.134 -7,7v8c0,3.866 3.134,7 7,7h8c3.866,0 7,-3.134 7,-7v-4.5c0,-0.828 -0.672,-1.5 -1.5,-1.5zM20,19h5c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1h-5c-0.553,0 -1,-0.448 -1,-1c0,-0.552 0.447,-1 1,-1zM28,29h-8c-0.553,0 -1,-0.448 -1,-1c0,-0.552 0.447,-1 1,-1h8c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1z" fill="#ffffff"></path></g></g></g></svg>
                    <h1 className="self-center whitespace-nowrap text-xl font-[900] dark:text-white">BLOG<span className="text-gray-400">.COM</span></h1>
                    <div className="ml-6 h-7 bg-gray-300 w-[1px]"></div>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="" rounded={true} />}
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">
                        Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                        name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                    <div className="md:mx-6 mx-2 h-7 bg-gray-300 w-[1px]"></div>
                        <Dropdown
                            className="max-w-xs"
                            arrowIcon={false}
                            inline={true}
                            label={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"><path d="M 25 1 C 23.75 1 22.685226 1.5047556 22.001953 2.2734375 C 21.318681 3.0421194 21 4.0277779 21 5 C 21 5.4966904 21.085339 5.9957691 21.257812 6.46875 C 15.702627 7.9152078 12 12.553952 12 19 C 12 26.41755 10.547843 29.808728 9.1914062 31.673828 C 8.513188 32.606378 7.8476292 33.168819 7.2539062 33.724609 C 6.9570448 34.002505 6.6695769 34.279709 6.4257812 34.644531 C 6.1819857 35.009354 6 35.491667 6 36 C 6 37.375 6.8371355 38.530747 7.9921875 39.300781 C 9.1472395 40.070816 10.651796 40.58625 12.408203 40.976562 C 14.381291 41.415027 16.693605 41.670873 19.132812 41.822266 C 19.052934 42.194807 19 42.585813 19 43 C 19 46.32381 21.67619 49 25 49 C 28.32381 49 31 46.32381 31 43 C 31 42.585813 30.947066 42.194807 30.867188 41.822266 C 33.306395 41.670873 35.618709 41.415027 37.591797 40.976562 C 39.348204 40.58625 40.852761 40.070816 42.007812 39.300781 C 43.162864 38.530747 44 37.375 44 36 C 44 35.491667 43.818014 35.009354 43.574219 34.644531 C 43.330423 34.279709 43.042955 34.002505 42.746094 33.724609 C 42.152371 33.168819 41.486812 32.606378 40.808594 31.673828 C 39.452157 29.808728 38 26.41755 38 19 C 38 12.591017 34.336043 7.8775016 28.740234 6.4746094 C 28.91413 5.9999375 29 5.4986987 29 5 C 29 4.0277779 28.681319 3.0421194 27.998047 2.2734375 C 27.314774 1.5047556 26.25 1 25 1 z M 25 3 C 25.749999 3 26.185226 3.2452444 26.501953 3.6015625 C 26.81868 3.9578806 27 4.4722221 27 5 C 27 5.5277779 26.81868 6.0421194 26.501953 6.3984375 C 26.185226 6.7547556 25.749999 7 25 7 C 24.250001 7 23.814774 6.7547556 23.498047 6.3984375 C 23.18132 6.0421194 23 5.5277779 23 5 C 23 4.4722221 23.18132 3.9578806 23.498047 3.6015625 C 23.814774 3.2452444 24.250001 3 25 3 z M 22.558594 8.2304688 C 23.208375 8.7075696 24.050307 9 25 9 C 25.941913 9 26.778192 8.7123549 27.425781 8.2421875 C 32.741966 9.1666377 36 12.995237 36 19 C 36 26.68245 37.547843 30.591663 39.191406 32.851562 C 40.013188 33.981513 40.847629 34.688212 41.378906 35.185547 C 41.644545 35.434214 41.825827 35.629666 41.910156 35.755859 C 41.994486 35.882052 42 35.908333 42 36 C 42 36.625 41.712136 37.094253 40.898438 37.636719 C 40.084739 38.179184 38.776796 38.66375 37.158203 39.023438 C 33.921018 39.742812 29.462963 40 25 40 C 20.537037 40 16.078982 39.742812 12.841797 39.023438 C 11.223204 38.66375 9.9152605 38.179184 9.1015625 37.636719 C 8.2878645 37.094253 8 36.625 8 36 C 8 35.90833 8.0055098 35.882052 8.0898438 35.755859 C 8.1741728 35.629666 8.3554551 35.434214 8.6210938 35.185547 C 9.1523707 34.688212 9.9868119 33.981513 10.808594 32.851562 C 12.452157 30.591663 14 26.68245 14 19 C 14 12.971311 17.285276 9.2237025 22.558594 8.2304688 z M 21.177734 41.927734 C 22.439338 41.973336 23.71573 42 25 42 C 26.28427 42 27.560662 41.973336 28.822266 41.927734 C 28.925508 42.257591 29 42.605423 29 43 C 29 45.27619 27.27619 47 25 47 C 22.72381 47 21 45.27619 21 43 C 21 42.605423 21.074492 42.257591 21.177734 41.927734 z"></path></svg>}
                        >
                            <Dropdown.Header
                                className="text-left"
                            >
                                Notifications
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <a href="/">
                                    <Avatar
                                        img="https://randomuser.me/api/portraits/men/1.jpg"
                                        rounded={true}
                                    >
                                        <div className="space-y-1 font-medium dark:text-white text-left">
                                            <div>
                                                <b>Dinesh K</b> likes your post comment
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                5 days ago
                                            </div>
                                        </div>
                                    </Avatar>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/">
                                    <Avatar
                                        img="https://randomuser.me/api/portraits/men/2.jpg"
                                        rounded={true}
                                    >
                                        <div className="space-y-1 font-medium dark:text-white text-left">
                                            <div>
                                                <b>Zarzis Hossain</b> added a new post
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                6 days ago
                                            </div>
                                        </div>
                                    </Avatar>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/">
                                    <Avatar
                                        img="https://randomuser.me/api/portraits/men/3.jpg"
                                        rounded={true}
                                    >
                                        <div className="space-y-1 font-medium dark:text-white text-left">
                                            <div>
                                                <b>Mehedi Hasan</b> mentioned you in a comment
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                a week ago
                                            </div>
                                        </div>
                                    </Avatar>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/">
                                    <Avatar
                                        img="https://randomuser.me/api/portraits/men/4.jpg"
                                        rounded={true}
                                    >
                                        <div className="space-y-1 font-medium dark:text-white text-left">
                                            <div>
                                                <b>Badal Sayed</b> commented on the post you shared 
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                a week ago
                                            </div>
                                        </div>
                                    </Avatar>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/">
                                    <Avatar
                                        img="https://randomuser.me/api/portraits/men/5.jpg"
                                        rounded={true}
                                    >
                                        <div className="space-y-1 font-medium dark:text-white text-left">
                                            <div>
                                                <b>Nazmus Sakib</b> likes your post
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                a week ago
                                            </div>
                                        </div>
                                    </Avatar>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                                className="justify-center"
                            >
                                <a href="/" className="block">See all notifications</a>
                            </Dropdown.Item>
                        </Dropdown>
                    <div>
                    <Button
                        className="ml-4 hidden sm:flex"
                        color="dark"
                        pill={true}          
                    >
                        <img src={phoneIcon} alt="phone icon" className="w-[15px] mr-2" />
                        Contact Us
                    </Button>
                    </div>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                    href="/navbars"
                    active={true}
                    >
                    Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <hr className="my-6" />
        </div>
    );
}