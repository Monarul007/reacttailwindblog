import { Avatar, Button } from "flowbite-react";

export default function PostItem({post}){
    return (<>
        <div key={post.id}>
            <div className={`relative min-h-[200px] sm:min-h-[320px] rounded-lg bg-[url('https://picsum.photos/280/320')] bg-cover`}>
                <div className='absolute inset-x-0 bottom-3.5'>
                    <Button
                        className='m-auto'
                        outline={true}
                        pill={true}
                    >
                        <Avatar
                            className='mr-2'
                            alt={post.title}
                            img={`https://picsum.photos/50?random=${post.id}`}
                            rounded={true}
                        /> Courtney Henry
                    </Button>
                </div>
            </div>
            <h5 className="my-3 capitalize text-left flex items-center line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
            </h5>
            <p className="text-left line-clamp-3 font-normal text-gray-500 dark:text-gray-400">
                {post.body}
            </p>
            <hr className='my-3'/>
            <div className='flex items-center mx-auto'>
                <div className='w-5'>
                    <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <svg className="text-gray-500 mx-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                </svg>
                <span className='text-gray-400'>23/04/2023</span>
                <div className="mx-4 h-5 bg-gray-300 w-[1px]"></div>
                <svg className="text-gray-500" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className='text-gray-400 ml-2'>10K Views</span>
            </div>
            <div className='my-3'>
                <Button
                    outline={true}
                    pill={true}
                    className='w-full bg-sky-600/80 hover:bg-sky-600/80'
                >
                Read More
                </Button>
            </div>
        </div>
    </>)
}