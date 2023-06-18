 import Header from '../../component/header';
import CardListMain from '../../component/list/cardListMain.js';
import CardList from '../../component/list/cardList.js';
import CardBox from '../../component/list/cardBox.js';
import Title from '../../component/title/titleSamping.js';
import ImageContent from '../../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

import Head from 'next/head';


export default function Galeri  ({slider,galeri}) {

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
         <div className='container '>
               <div className="py-5">
                   <Title text='Galeri Kegiatan' border='red-500 '  />
               </div>
               <div className=' mb-5'>
                   <div className="grid  grid-cols-1 lg:grid-cols-5 gap-4">
                   {
                     galeri.count > 0 &&
                     galeri.data.map((e,f)=>(
                       <div key={f} className='shadow-lg rounded overflow-hidden'>
                           <a data-fancybox="gallery"  key={f} data-caption={e.caption}  href={e.img}>
                               <img className='w-full' src={e.img_med} alt=""/>
                               <div className='p-3 flex flex-col'>
                                           <span className='text-gray-400 text-xs'>{e.date}</span>
                                           <span className='text-gray-500 font-tight text-sm'>{e.caption}</span>
                               </div>

                           </a>
                       </div>

                     ))
                   }
                    </div>
               </div>

         </div>

    </>

  )
}



export async function getServerSideProps({params}){
    const id = params.id;
    const api=process.env.Api;
    const galeri= await axios.get(api+'galeri/'+id).then(response => response.data);
    const heads={
          title:'Galeri Kegiatan Desa Doloduo Dua',
          desc:'Dokumentasi Kegiatan terbaru dari Desa Doloduo Dua, Kabupaten Bolaang Mongondow',
          img: (galeri.count>0)?galeri.data[0].img:'https://doloduo-dua.id/logo.png',
          url:'https://doloduo-dua.id/galeri/'+params.id,
          keyword:'galeri Kegiatan',
    };

   return {
     props:{
        galeri,
        heads
     }
  }
}
