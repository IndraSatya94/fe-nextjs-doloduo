import Link from 'next/link'

const cardBox = ({title,img,url,date}) =>{

    return(
    <Link href={url}>
        <div className="w-full cursor-pointer  flex flex-col bg-white shadow-lg dark:bg-gray-800 rounded">
            <div style={{height:200}} className='w-full overflow-hidden rounded'>
              <img className='w-full h-full object-cover rounded' src={img} alt=""/>
            </div>
              <div className="p-4 flex flex-col">
                  <a className='font-medium dark:text-gray-300 leading-tight'>{title}</a>
                  <div className="flex  flex-row mt-2">
                      <span className='text-gray-400 text-sm dark:text-gray-300 '>Berita |  </span>
                      <span className='text-gray-400 text-sm dark:text-gray-300 ml-2 '>{date}</span>
                  </div>
              </div>
        </div>
      </Link>
    )

}
export default cardBox;
