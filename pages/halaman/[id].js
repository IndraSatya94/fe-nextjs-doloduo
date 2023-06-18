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

const Halaman = ({berita,beritaPopuler,beritaSemua}) =>{


const [isRender,setRender] = useState(false);
useEffect(()=>{
      setRender(true);
 },[berita]);

  return (

          <>
          <Head>
             <script type="text/javascript" src="https://widget.kominfo.go.id/gpr-widget-kominfo.min.js"> </script>
          </Head>
            <div className='container dark:bg-gray-900 px-2 lg:px-0 '>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4">
                      <div className='grid col-span-1 lg:col-span-3 '>
                    {
                      berita.count > 0 && (
                        <>

                            <div className="lg:block  bg-white shadow-lg mt-4 dark:bg-gray-800 rounded overflow-hidden mb-4 p-5">
                            <h3 className='text-xl dark:text-gray-300 font-bold'>{berita.data.title}</h3>
                            <div className="flex justify-center pb-4 mt-4">
                              <img className='object-contain' src={berita.data.img} alt=""/>
                            </div>
                            <div className="dark:text-gray-300">
                            {
                            ReactHtmlParser(berita.data.isi_artikel)
                            }
                            </div>

                            </div>
                        </>
                      ) || (
                        <div>Berita Tidak Ada</div>
                      )
                    }
                    </div>
                    <div className="grid col-span-1 lg:gap-4 lg:mt-4">
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

                           <div id="gpr-kominfo-widget-container" className='mt-4 dark:hidden'  ></div>


                    </div>

                  </div>


                    <div className="py-5">
                        <Title text='Baca Juga' border='red-500 '  />
                    </div>
                    <div className="mb-4">
                                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">

                                              {
                                                beritaSemua.count > 0 &&
                                                beritaSemua.data.filter((e,f)=>f<=3).map((e,f)=>(
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


          </>



  )
}


export async function getServerSideProps ({params}){

  const api=process.env.Api;
  const berita = await axios.get(api+'halaman/'+params.id).then(e=>e.data);

  const beritaSemua= await axios.get(api+'berita').then(response => response.data);
  const beritaPopuler= await axios.get(api+'berita_terpopuler').then(response => response.data);

  const heads={
        title:berita.data.title,
        desc:berita.data.desc,
        img:(berita.data.img) ? berita.data.img : 'https://doloduo-dua.id/logo.png',
        url:'https://doloduo-dua.id/halaman/'+params.id,
        keyword:berita.data.title,
  };

  return {
    props:{
       berita:berita,
       beritaSemua:beritaSemua,
       beritaPopuler:beritaPopuler,
       heads:heads,
     }
  }
}

export default Halaman;
