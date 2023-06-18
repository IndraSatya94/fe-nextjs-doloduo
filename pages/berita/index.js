 import Header from '../../component/header';
import CardListMain from '../../component/list/cardListMain.js';
import CardList from '../../component/list/cardList.js';
import CardBox from '../../component/list/cardBox.js';
import Title from '../../component/title/titleSamping.js';
import ImageContent from '../../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import ReactHtmlParser from 'react-html-parser';

const Berita = ({beritaSemua,banner}) =>{


const [isRender,setRender] = useState(false);

useEffect(()=>{
  $('.owl-carousel-banner,.owl-carousel-slider').owlCarousel({
         margin:10,
         autoplay:true,
         loop:true,
         lazyLoad:true,
         animateOut: 'fadeOut',
         center:true,
         autoHeight:true,
         responsive:{
             0:{
                 items:1
             },
         }
   })

},[]);

  return (

           <>

              <div className="banner">

              {
              banner.count>0 && (
                  <div className="owl-carousel owl-carousel-banner">
                    {
                      banner.data.map((e,f)=>(
                    <img key={f}  className='rounded w-full' src={e.img} alt=""/>
                    ))
                   }
                  </div>
                )  || (
                  <div className="owl-carousel owl-carousel-banner">
                    <img   className='rounded w-full' src="/banner-05.jpeg" alt=""/>
                  </div>
                )
              }


             </div>
             <div className='mt-4 lg:mt-4 text-center'>
                   <span className='text-2xl p-2 dark:text-white'>Selamat Datang Di Website Resmi <strong>Desa Doloduo Dua</strong> </span>
             </div>
             <div className='container dark:bg-gray-900 px-2 lg:px-0 '>
                   <div className="py-2">
                       <Title text='Daftar Berita' border='red-500 '  />
                   </div>
                         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                             <div className='grid col-span-1 lg:col-span-4 '>

                                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">

                                             {
                                               beritaSemua.count > 0 &&
                                               beritaSemua.data.map((e,f)=>(
                                                          <CardBox
                                                          key={f}
                                                         title={e.title}
                                                         img={e.img}
                                                         date={e.date}
                                                         url={`/berita/${e.id}`}
                                                          />

                                               ))
                                             }
                                 </div>
                             </div>
                         </div>
                 </div>
           </>
         ) || (
           <>
             <div className="bg-gray-100 mb-4 shadow-lg p-5" style={{height:400}}>
             </div>
             <div className='container py-10 text-center'>
                <div className="grid grid-cols-8 gap-4 " style={{height:500}}>
                     <div className="col-span-6 bg-gray-100 shadow-lg p-5 ">
                     </div>
                     <div className="col-span-2 bg-gray-100 shadow-lg p-5"></div>
               </div>
             </div>
           </>


  )
}


export async function getServerSideProps ({params}){

  const api=process.env.Api;

  const beritaSemua= await axios.get(api+'berita_semua').then(response => response.data);
  const banner= await axios.get(api+'banner').then(response => response.data);
  const heads={
        title:'Berita  Desa Doloduo Dua',
        desc:'Berita terbaru dari Desa Doloduo Dua, Kabupaten Bolaang Mongondow',
        img: 'https://doloduo-dua.id/logo.png',
        url:'https://doloduo-dua.id/berita/',
        keyword:'galeri Kegiatan',
  };


  return {
    props:{
      beritaSemua,
      banner,
      heads,
      }
  }
}

export default Berita;
