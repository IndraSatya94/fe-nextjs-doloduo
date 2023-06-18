 import Header from '../../component/header';
import CardListMain from '../../component/list/cardListMain.js';
import CardList from '../../component/list/cardList.js';
import CardBox from '../../component/list/cardBox.js';
import Title from '../../component/title/titleSamping.js';
import ImageContent from '../../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

import Head from 'next/head';
import Link from 'next/link';


export default function Galeri  ({slider,album}) {

  const [isRender,setRender] = useState(false);

  useEffect(()=>{
    setRender(true);
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

         <div id="banner">
                   {
                     slider.count > 0 && (
                       <div className="owl-carousel owl-carousel-slider">
                         {
                           slider.data.map((e,f)=>(
                         <img key={f}  className='rounded w-full' src={e.img} alt=""/>
                         ))
                        }
                       </div>
                     )  || (
                       <div className="owl-carousel-slider">
                         <img   className='rounded w-full' src="/banner.jpeg" alt=""/>
                       </div>
                     )
                   }
          </div>
          <div className='mt-4 lg:mt-4 text-center'>
                <span className='text-2xl p-2 dark:text-white'>Selamat Datang Di Website Resmi <strong>Desa Doloduo Dua</strong> </span>
          </div>
          <div className='container px-2 lg:px-0 dark:bg-gray-800 '>
               <div className="py-5">
                   <Title text='Album Kegiatan' border='red-500 '  />
               </div>
               <div className=' mb-5'>
                   <div className="grid  grid-cols-1 lg:grid-cols-5 gap-4">
                   {
                     album.count > 0 &&
                     album.data.map((e,f)=>(
                       <Link href={`/galeri/${e.id}`}>
                         <div key={f} className='shadow-lg rounded bg-white dark:bg-gray-900 overflow-hidden'>
                             <a >
                                 <img className='w-full' src={e.img_med} alt=""/>
                                 <div className='p-3 flex flex-col'>
                                              <span className='text-gray-500 dark:text-gray-300 font-tight text-sm'>{e.nama}</span>
                                 </div>

                             </a>
                         </div>
                       </Link>

                     ))
                   }
                    </div>
               </div>

         </div>
         </>


  )
}



export async function getServerSideProps(){
  const api=process.env.Api;
   const banner= await axios.get(api+'banner').then(response => response.data);
   const album= await axios.get(api+'album').then(response => response.data);
   const heads={
         title:'Galeri Kegiatan Desa Doloduo Dua',
         desc:'Dokumentasi Kegiatan terbaru dari Desa Doloduo Dua, Kabupaten Bolaang Mongondow',
         img: 'https://doloduo-dua.id/logo.png',
         url:'https://doloduo-dua.id/galeri/',
         keyword:'galeri Kegiatan',
   };


   return {
     props:{
       slider:banner,
       album,
       heads,
     }
  }
}
