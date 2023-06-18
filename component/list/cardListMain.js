
import CardList from './cardList';
import Link from 'next/link'

const CardListMain = ({data,option}) =>{
  return(

        <div className="flex w-full flex-col lg:flex-row ">
            <div className="flex lg:w6/12 w12/12 bg-red-500 relative">
                  {
                    data.filter((e,f)=>f==0).map((e,f)=>(
                      <>
                        <img className='object-cover w-full rounded'  src={e.img} alt=""/>
                        <div className="absolute left-0 top-0 w-full  h-full bg-opacity-40 bg-black rounded"></div>
                        <div className='absolute bottom-0 p-4 flex flex-col'>
                          <Link href={`/berita/${e.id}`} ><a className='hover:text-blue-300 font-semibold text-lg text-white'>{e.title}</a></Link>
                          <span className='font-light text-sm text-white'>{e.date}</span>
                        </div>
                      </>
                    ))
                  }

            </div>
            <div className="flex w-full lg:w-6/12 lg:ml-4 mt-2 lg:mt-0">
                <CardList    data={data.filter((e,f)=>f!=0)} option={option} />
            </div>
        </div>

  )
}
export default CardListMain;
