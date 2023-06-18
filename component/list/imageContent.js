

const ImageContent = ({data}) =>{
  return(
  <div className="flex lg:w6/12 w12/12 bg-red-500 relative">
          <img className='object-cover w-full rounded'  src={data.img} alt=""/>
          <div className="absolute left-0 top-0 w-full  h-full bg-opacity-40 bg-black rounded"></div>
          <div className='absolute bottom-0 p-4 flex flex-col'>
            <a href='/1' className='hover:text-blue-300 font-semibold text-lg leading-tight text-white'>{data.title}</a>
            <span className='font-light text-sm text-white'>{data.date}</span>
          </div>
    </div>
  )
}
export default ImageContent;
