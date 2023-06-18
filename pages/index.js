import CardListMain from '../component/list/cardListMain.js';
import CardList from '../component/list/cardList.js';
import CardBox from '../component/list/cardBoxScroll.js';
import Title from '../component/title/titleSamping.js';
import ImageContent from '../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home  ({berita,beritaPopuler,banner,slider,galeri}) {

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
             setRender(true);
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
               <div className="container dark:bg-gray-900 px-2 lg:px-0">
               <div className='mt-4 lg:mt-4 text-center'>
                     <span className='text-2xl p-2 dark:text-white'>Selamat Datang Di Website Resmi <strong>Desa Doloduo Dua</strong> </span>
               </div>
                   <div className="lg:py-2 mb-4">
                       <Title text='Terbaru' border='red-500'  />
                   </div>
                   <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4 mb-0 lg:mb-4">
                       <div className='grid col-span-1 lg:col-span-3 overflow-x-scroll	'>
                           <div className="flex flex-norwrap">
                                   {
                                     berita.count > 0 &&
                                     berita.data.filter((e,f)=>f<=5).map((e,f)=>(
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
                       <div className="grid col-span-1 lg:gap-4 mt-0 ">
                               {
                                 beritaPopuler.count > 0 && (
                                   <CardList data={beritaPopuler.data} option={{
                                     lainya:false,
                                     title:"Terpopuler",
                                     height:350,
                                     url:'123',
                                   }}  />
                                 )
                               }
                       </div>
                   </div>

                   <div id="banner" className='mt-4 lg:mt-4'>
                             {
                               banner.count > 0 && (
                                 <div className="owl-carousel owl-carousel-slider">
                                   {
                                     banner.data.map((e,f)=>(
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 mb-4 gap-4">
                            <div class='col-span-1 lg:col-span-8 p-3 bg-white dark:bg-gray-800 shadow-lg'>

                               <iframe className="w-full h-full" src="https://www.youtube.com/embed/VcQDfTfswgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                             <div class='col-span-1 lg:col-span-4 dark:bg-gray-800 bg-white  shadow-lg p-5'>
                                 <div className="py-4">
                                     <Title text='Desa Doloduo Dua' border='red-500 '  />
                                     <p className='text-base dark:text-gray-300 text-konten mt-4'>
                                     Alhamdulillah, segala puji hanya milik Allah SWT semata, atas kehendak-Nya website resmi Desa Doloduo Dua bisa hadir ditengah derasnya perkembangan teknologi informasi.
                                     Lahirnya UU No 6 Tahun 2014 tentang Desa memberi harapan baru bagi kemajuan desa dimasa yang akan datang, salah satunya adalah tentang Sistem Informasi Desa sebagaimana diamanatkan pada pasal 86 UU No 6 Tahun 2014.
                                     </p>
                                     <p className='text-base dark:text-gray-300 text-konten mt-4'>
                                     Sistem Informasi Desa kedepan dikembangkan untuk menjalankan setidaknya empat fungsi utama: Fungsi Media Transparansi dan Informasi, Fungsi Perbaikan Pelayanan dan Tata Kelola Pemerintahan Desa, Fungsi Interkoneksi data antara Desa dengan Supra Desa, Fungsi Promosi Produk Unggulan Desa Berkaitan dengan hal tersebut maka kami dari Pemerintah
                                      Desa Doloduo Dua
                                      Kecamatan Dumoga Barat merasa perlu untuk membuat sebuah website resmi Desa Doloduo Dua, sebagai upaya mewujudkan desa berbasis IT di Bolaang Mongondow.
                                       Besar harapan, dengan adanya website ini, masyarakat desa khususnya perangkat desa, sadar akan pentingnya teknologi dan komunikasi sehingga memudahkan pelayanan
                                        dan pemberian informasi ke khalayak umum.
                                     </p>
                                     <p className='text-base dark:text-gray-300 text-konten mt-4'>
                                      Desa Doloduo Dua Secara Topografi adalah dataran rendah, berbukit dengan ketinggian 80-150 m diatas permukaan laut. Desa Doloduo Dua dengan luas 262,5 Ha berbatasan dengan :

                                      <ol className='mt-3'>
                                              <li>Sebelah Utara  Berbatasan dengan Desa Doluduon </li>
                                              <li>Sebelah Selatan  Berbatasan dengan Taman Nasional Bogani  Nani Wartabonde </li>
                                              <li>Sebelah Timur  Berbatasan dengan Desa Doluduo Satu </li>
                                              <li>Sebelah Barat  Berbatasan dengan Desa Mekaruo dan Desa dan Doluduo Tiga. </li>
                                      </ol>
                                  </p>
                                 </div>
                             </div>
                    </div>
                    <div className="py-0 lg:py-4">
                        <Title text='Galeri Kegiatan' border='red-500 '  />
                    </div>
                    <div className='mb-5 mt-4 '>
                        <div className="grid  grid-cols-2 lg:grid-cols-5 gap-4">
                        {
                          galeri.count > 0 &&
                          galeri.data.map((e,f)=>(
                            <div key={f} class='shadow-lg rounded overflow-hidden'>
                                <a data-fancybox="gallery"  key={f} data-caption={e.caption}  href={e.img}>
                                    <img className='w-full' src={e.img_med} alt=""/>
                                    <div className='p-3 flex flex-col hidden lg:block'>
                                                <span className='text-gray-400 text-xs'>{e.date}</span> <br/>
                                                <span className='text-gray-500 font-tight text-sm'>{e.caption}</span>
                                    </div>

                                </a>
                            </div>

                          ))
                        }
                         </div>
                         <div className='text-center lg:text-right mt-4 mb-4'>
                           <Link href="/galeri">
                             <button className="shadow-lg bg-primary dark:bg-gray-800 rounded px-9 py-2 text-white text-sm "><i className="fa fa-images"></i> Lihat Lebih Banyak</button>
                           </Link>
                         </div>
                    </div>
               </div>
          </>


        )
}



export async function getServerSideProps(){

  const api=process.env.Api;
  const berita= await axios.get(api+'berita_terbaru').then(response => response.data);
  const beritaTerpopuler= await axios.get(api+'berita_terpopuler').then(response => response.data);

  const banner= await axios.get(api+'banner').then(response => response.data);
  const slider= await axios.get(api+'slider').then(response => response.data);
  const galeri= await axios.get(api+'galeri').then(response => response.data);

  const heads={
        title:'Desa Doloduo Dua',
        desc:'Desa Doloduo Dua Secara Topografi adalah dataran rendah, berbukit dengan ketinggian 80-150 m diatas permukaan laut. Desa Doloduo Dua dengan luas 262,5 Ha',
        img:'https://doloduo-dua.id/logo.png',
        url:'https://doloduo-dua.id/',
        keyword:'desa doloduo dua',
  };

   return {
     props:{
       berita:berita,
       beritaPopuler:beritaTerpopuler,
       banner:banner,
       slider:slider,
       galeri:galeri,
       heads:heads
     }
  }
}
