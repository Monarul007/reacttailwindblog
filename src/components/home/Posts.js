import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postSlice'
import { Avatar, Button, Carousel } from 'flowbite-react'
import PostItem from '../posts/PostItem'
import Pagination from '../layouts/Pagination'

export default function Posts() {
    const dispatch = useDispatch();
    const { entities, loading } = useSelector((state) => state.post);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = entities.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Articles</h2>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="h-56 md:min-h-[350px]">
                <Carousel
                    leftControl=" "
                    rightControl=" "
                >
                    {currentPosts.slice(0, 3).map((post) => (
                        // className="mx-auto bg-[url('https://picsum.photos/1135/350?random=1')]"
                        <div key={post.id} className={`mx-auto bg-[url('https://picsum.photos/1135/350?random=${post.id}')] bg-cover`}>
                            <div className='w-full h-full bg-sky-600/75 backdrop-brightness-70 px-4 py-10 md:p-48'>
                                <Button
                                    className='block bg-white mx-auto text-center'
                                    outline={true}
                                    pill={true}
                                >
                                    <Avatar
                                        className='mr-2'
                                        alt={post.title}
                                        img={`https://picsum.photos/50?random=${post.id}`}
                                        rounded={true}
                                    /> Saraji Kolhyseg
                                </Button>
                                <h1 className='block line-clamp-1 capitalize text-xl font-bold leading-none tracking-tight text-dark-900 md:text-xl lg:text-2xl dark:text-white mt-4'>{post.title}</h1>
                                <p className='text-lg capitalize line-clamp-2 md:line-clamp-3'>{post.body} <a href='/' className='underline text-white-400/80 font-bold'>Read More</a></p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentPosts.slice(3).map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={entities.length}
                paginate={paginate}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />
        </div>
    )
}