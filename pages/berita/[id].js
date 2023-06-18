import CardListMain from '../../component/list/cardListMain.js';
import CardList from '../../component/list/cardList.js';
import CardBox from '../../component/list/cardBoxScroll.js';
import Title from '../../component/title/titleSamping.js';
import ImageContent from '../../component/list/imageContent.js';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import ReactHtmlParser from 'react-html-parser';

const Home = ({berita,beritaPopuler,beritaSemua}) =>{


const [isRender,setRender] = useState(false);

useEffect(()=>{
  setRender(false);
  setTimeout(()=>{
    setRender(true);
  },500)
},[berita]);


 const renderPage = () =>{
   return(
   <>
   <Head>
      <script type="text/javascript" src="https://widget.kominfo.go.id/gpr-widget-kominfo.min.js"> </script>
   </Head>
  <div className='container dark:bg-gray-900 px-2 md:0'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className='grid col-span-1 md:col-span-3 '>
          {
            berita.count > 0 && (
              <>

                  <div className="md:block dark:bg-gray-800 bg-white shadow-lg mt-4 rounded overflow-hidden mb-4 p-3 md:p-5">
                  <h3 className='text-xl dark:text-gray-100 font-bold'>{berita.data.title}</h3>
                  <div className="flex mt-1">
                    <span className='text-gray-300 text-sm mr-4'> Postedn On :  {berita.data.date} </span>
                    <span className='text-gray-300 text-sm '><i className="fa fa-eye"></i> Dibaca :  {berita.data.dibaca}x</span>
                  </div>

                  <div className="pb-4 mt-4">
                      <center>
                          <img src={berita.data.img} className='rounded' width={'80%'}   alt=""/>
                      </center>
                  </div>

                  <div className='dark:text-gray-100 text-gray-800' >
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
          
          <div className="grid col-span-1 md:gap-4 mt-4">
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
                  <div id="gpr-kominfo-widget-container mt-4" ></div>

          </div>

        </div>


          <div className="py-5">
              <Title text='Baca Juga' border='red-500 '  />
          </div>
          <div className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className='grid col-span-1 md:col-span-3 overflow-x-scroll	w-full'>
                          <div className="flex flex-norwrap">
                                  {
                                    beritaSemua.count > 0 &&
                                    beritaSemua.data.filter((e,f)=>f<=10).map((e,f)=>(
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
      </div>
      </>
    )
 }
  return (

        <>
           {renderPage()}
        </>
  )
}


export async function getServerSideProps ({params}){

  const api=process.env.Api;
  const berita = await axios.get(api+'berita/'+params.id).then(e=>e.data);

  const beritaSemua= await axios.get(api+'berita_terbaru').then(response => response.data);
  const beritaPopuler= await axios.get(api+'berita_terpopuler').then(response => response.data);

  const heads={
        title:berita.data.title,
        desc:berita.data.desc,
        img:(berita.data.img!='') ? berita.data.img  :'https://doloduo-dua.id/log.png',
        url:'https://doloduo-dua.id/berita/'+params.id,
        keyword:berita.data.title,
  };


  return {
    props:{
      berita,
       beritaSemua,
       beritaPopuler,
       heads,
     }
  }
}

export default Home;
