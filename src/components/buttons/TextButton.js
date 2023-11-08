export const TextButton = ({ icon, text}) => {
    return (
        <button className='px-4 py-2 flex items-center justify-center bg-pink-stronger rounded-md text-white font-semibold'>
            { icon } <span className='ml-2 hidden lg:block'>{ text }</span>    
        </button>
    )
}
