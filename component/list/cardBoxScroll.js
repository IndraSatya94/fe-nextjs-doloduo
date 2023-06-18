import Link from 'next/link'

const cardBox = ({title,img,url,date}) =>{

    return(
    <Link href={url}>
        <div className="cursor-pointer  flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded w-full mr-4 mb-4" style={{width:'40vh'}}>
            <div style={{height:200}} className='w-full overflow-hidden'>
              <img className='w-full h-full object-cover rounded' src={img} alt=""/>
            </div>
              <div className="p-4 flex flex-col">
                  <a className='font-medium leading-tight dark:text-gray-300'>{title}</a>
                  <div className="flex  flex-row mt-2">
                      <span className='text-gray-300 text-sm '>Berita |  </span>
                      <span className='text-gray-300 text-sm ml-2 '>{date}</span>
                  </div>
              </div>
        </div>
      </Link>
    )

}
export default cardBox;
