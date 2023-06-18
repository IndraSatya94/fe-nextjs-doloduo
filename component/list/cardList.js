
import Link from 'next/link'

const cardList = ({data,option}) =>{
  return(
    <div className="shadow-md bg-white dark:bg-gray-800 rounded">
         <div className="border-b border-gray-200">
                 <div className="p-3 flex justify-between  ">
                 <span className='font-bold text-xl dark:text-gray-300 '>{option.title}</span>
                 {
                   option.lainya && (
                     <a href='' className='text-blue-500  hover:underline font-normal'>Lihat Lainya</a>

                   )
                 }
                 </div>
          </div>
          <div className="overflow-scroll" style={{maxHeight:option.height}}  >
          {
            data.map((e,f)=>(
              <Link href={`/berita/${e.id}`}>
              <div key={f} className="cursor-pointer border-b border-gray-200">
                    <div className="flex justify-between p-5">
                    <a style={{width:'80%'}} className='dark:text-gray-300 leading-normal text-base hover:text-blue-400 font-medium '>{e.title}</a>
                    <div class='flex justify-center items-start ' style={{width:'30%'}}>
                          <img className='w-full  object-cover lg:object-cover rounded' style={{height:60}} src={e.img} alt=""/>
                     </div>
                    </div>
              </div>
              </Link>
            ))
          }


          </div>
    </div>
  )
}
export default cardList;
