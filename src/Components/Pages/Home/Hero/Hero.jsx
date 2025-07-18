
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero ">
        <div className="text-center w-full">
          <div className="max-w-4xl mx-auto">
            <h1 className='text-5xl font-bold'>
            Welcome to
            <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
              {' '}
              ByteBlaze
            </span>
          </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className='flex gap-2 justify-center'>
            <Link
              to='/blogs'
              className='relative inline-block px-4 py-2 font-medium group cursor-pointer'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
              <span className='relative z-10  text-black group-hover:text-white'>
                Read Blogs
              </span>
            </Link>
            <Link
              to='/bookmarks'
              className='relative inline-block px-4 py-2 font-medium group cursor-pointer'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
              <span className='relative z-10  text-black group-hover:text-white'>
                Bookmarks
              </span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
