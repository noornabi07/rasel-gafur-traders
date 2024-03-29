import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { Link} from 'react-router-dom'
import Avatar from './Avatar'



const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const user = false;
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar></Avatar>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (
                            <>

                                <Link
                                    to='/dashboard'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Dashboard
                                </Link>
                                <div
                                    onClick={()=>{
                                        setRole(null)
                                        logOut()
                                    }}
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdown