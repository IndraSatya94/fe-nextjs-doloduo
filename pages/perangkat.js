import Header from '../component/header';
import CardListMain from '../component/list/cardListMain.js';
import CardList from '../component/list/cardList.js';
import CardBox from '../component/list/cardBox.js';
import Title from '../component/title/titleSamping.js';
import ImageContent from '../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import ReactHtmlParser from 'react-html-parser';

const Perangkat = ({perangkat,banner}) =>{


const [isRender,setRender] = useState(false);

useEffect(()=>{
   setRender(false);
    setTimeout(()=>{
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
    },500);

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
            <div className="container px-2 lg:px-0">
                      <div className="py-4">
                          <Title text='Perangkat Desa Doloduo Dua' border='red-500 '  />
                      </div>
                      <div className=' mb-5'>
                          <div className="grid  grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
                          {
                            perangkat.count > 0 &&
                            perangkat.data.map((e,f)=>(
                              <div className='shadow-lg rounded  bg-white dark:bg-gray-800 overflow-hidden'>
                                  <a data-fancybox="gallery"  key={f}  href={e.img}>
                                       {
                                         e.img_singel == null && (
                                           <img className='w-full' src='/nofoto.jpeg' alt=""/>

                                         )  ||
                                         (
                                           <img className='w-full object-contain rounded' style={{height:200}} src={e.img} alt=""/>
                                         )
                                       }
                                      <div className='p-3 flex flex-col items-center justify-center'>
                                                  <span className='text-gray-400 text-sm uppercase text-center'>{e.jabatan}</span>
                                                  <span className='text-gray-500 font-semibold text-center'>{e.nama}</span>
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


export async function getServerSideProps (){

 const api=process.env.Api;
 const perangkat= await axios.get(api+'perangkat').then(response => response.data);
 const banner= await axios.get(api+'banner').then(response => response.data);
 const heads={
       title:'Daftar Perangkat Desa Doloduo Dua',
       desc:'Desa Doloduo II Secara Topografi adalah dataran rendah, berbukit dengan ketinggian 80-150 m diatas permukaan laut. Desa Doloduo II dengan luas 262,5 Ha',
       img:'https://doloduo-dua.id/logo.png',
       url:'https://doloduo-dua.id/perangkat',
       keyword:'desa doloduo dua',
 };

 return {
   props:{
     perangkat,
     banner,
     heads:heads
      }
 }
}

export default Perangkat;
