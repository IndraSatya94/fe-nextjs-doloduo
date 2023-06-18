
import Header from './header.js';
import Footer from './footer.js';
import Head from 'next/head';
import React,{useState,useEffect} from 'react';
import Router,{useRouter} from 'next/router';

import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';




const Layout = ({children,pr}) =>{

    const [isRender,setRender] = useState(false);
    const router = useRouter()

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
       setIsLoaded(true);


    },[]);


    const [isLoaded,setIsLoaded] = useState(false);

    Router.events.on('routeChangeStart', (e) =>{
       //galeri =
      if(e.substr(0,8)!='/galeri/')
        setIsLoaded(false)

        let x= document.querySelector('body');
        x.classList.remove('bg-gray-200');
    });
    Router.events.on('routeChangeComplete', () =>{
      setIsLoaded(true)
      let x= document.querySelector('body');
      x.classList.add('bg-gray-200');
    });

    return(
          <div className=' py-0  w-full  '>
           <Header />
           <Head>

                   {
                     children.props.heads && (
                       <>
                       <title>{children.props.heads.title }</title>
                       <meta name="description" CONTENT={children.props.heads.desc} />
                      <meta name="keyword" CONTENT={children.props.heads.key} />
                      <meta property="og:url"                content={children.props.heads.url} />
                      <meta property="og:type"               content="article" />
                      <meta property="og:title"              content={children.props.heads.title} />
                      <meta property="og:description"        content={children.props.heads.desc} />
                      <meta property="og:image"  content={children.props.heads.img} />

                       </>
                     ) || (
                       <title>Welcome</title>
                     )
                   }


                   <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
                   <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
                   <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous"></script>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" />
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" />

                     <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/fontawesome.min.js" integrity="sha512-KCwrxBJebca0PPOaHELfqGtqkUlFUCuqCnmtydvBSTnJrBirJ55hRG5xcP4R9Rdx9Fz9IF3Yw6Rx40uhuAHR8Q==" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                    <link rel="stylesheet"
                              href="https://fonts.googleapis.com/css?family=Lobster" />

           </Head>


            {
                isLoaded &&
                  children
                ||
                (
                  <>
                  <div className='py-2 px-2 md:py-3   md:px-2'>
                         <Skeleton count={1}  height={20}/>
                        <Skeleton count={1} height={200}/>
                        <Skeleton count={1} height={400}/>

                  </div>

                  </>
                )
             }


            <Footer />

          </div>

    )
}

export default Layout;
