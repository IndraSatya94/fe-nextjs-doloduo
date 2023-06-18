import Link from 'next/link';

import React,{useEffect,useState} from 'react';

import axios from 'axios';


const Header  =(p)=>  {

    const [menuShow,setMenushow] = useState(false);
    const [menu,setMenu] = useState([]);
    const [menuRender,setMenuRender] = useState(false);
   const [mode,setMode] = useState(null);

    const getMenu = () =>{
      //alert(process.env.Api)
      axios.get('https://api.doloduo-dua.id/api/menu').
      // axios.get('http://desa.test:8000/api/menu').
       then((e)=>{
          const {data} = e.data;
          console.log(data);
          setMenuRender(true);
          setMenu(data);
       }).
       catch(e=>alert(e));

    }
    useEffect(()=>{
      hideMenu();
      getMenu();
    },[p])



    useEffect(()=>{

           let e = document.querySelector('html');

           const ModeDoen =  localStorage.getItem('darkMode');
           if(ModeDoen==0 || ModeDoen==null){
             e.classList.remove('dark');
            // alert('not darkmode')
            setMode('Malam');

            let x= document.querySelector('body');
            x.classList.add('bg-gray-200');

           }else{
             setMode('Normal');
            // alert('darkmode')
             e.classList.add('dark');
             let x= document.querySelector('body');
             x.classList.add('dark:bg-gray-900');
             x.classList.remove('bg-gray-200');

           }

    },[])
    const showMenu = () =>{
          setMenushow(true)
          let h = document.querySelector('body');
          h.style.position='fixed';
    }
    const hideMenu = () =>{
          setMenushow(false)
          let h = document.querySelector('body');
          h.style.position='static';
    }
    const modeMalam=()=>{
          let e = document.querySelector('html');

          if(e.classList=='dark'){
            e.classList.remove('dark');
            setMode('Malam');
            localStorage.setItem('darkMode',0);
            //lert('model normal');
          }else{
            //alert('model malam');
             localStorage.setItem('darkMode',1);
             setMode('Normal');
             e.classList.add('dark');
             let x= document.querySelector('body');
             x.classList.add('dark:bg-gray-800');
          }
          hideMenu();
          //alert(e.classList);
    }


  return(
    <div className="w-full bg-primary-dark dark:bg-gray-800 shadow-lg py-4">
        <div className={`menubar ${menuShow?'':'hidden'} `}>
              <div onClick={()=>hideMenu()} className='fixed h-screen bg-primary dark:bg-black dark:bg-opacity-80 top-0 z-10 w-full bg-opacity-70'>
              </div>
              <div style={{height:'100vh'}} className='fixed  dark:bg-gray-800 bg-white top-0 z-10 w-5/6'>
                 <div className='border-b border-gray-200'>
                       <div className="py-2 px-4 flex justify-between">
                               <span className='text-lg  dark:text-gray-300 font-bold'>Menu</span>
                               <span onClick={()=>hideMenu()} className='text-thin  dark:text-gray-300 '>X</span>
                       </div>
                 </div>
                 <div className='border-b border-gray-200'>
                       <div className="py-2 px-4">
                       <ul className='reset mt-4'>
                           <Link href="/">
                             <li className='mb-3 dark:text-gray-300'>    <i className="fa fa-home"></i> Beranda </li>
                            </Link>
                            <li>
                             <label
                                  for="toogleA"
                                  class="cursor-pointer flex"
                                >
                                <div class="mr-3  dark:text-gray-400">
                                  Dark Mode
                                </div>
                                   <div class="relative flex flex-col justify-center">

                                    {
                                      mode=='Normal'  && (
                                        <input id="toogleA" type="checkbox" checked  onClick={()=>modeMalam()} class="sr-only" />

                                      )
                                      ||
                                      (
                                        <input id="toogleA" type="checkbox" onClick={()=>modeMalam()} class="sr-only" />

                                      )
                                    }

                                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                                    <div class="dot absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition"></div>
                                  </div>


                                </label>

                            </li>
                         </ul>
                       </div>
                 </div>
                 <div className='border-b border-gray-200'>
                       <div className="py-2 px-4 overflow-y-scroll" style={{height:'70vh'}}>
                       <ul className='reset mt-4'>

                       {
                         menuRender &&
                          menu.filter((e,f)=>e.menu.judul!='Beranda').map((e,f)=>(
                            <li className='mb-4  dark:text-gray-300' key={f}><Link href={`/${e.menu.link}`}><a>{e.menu.judul}
                            {
                              e.parent   &&
                              <ul className='ml-3 leading-loose mt-3 '>
                              {
                                e.parent.map((f,g)=>(
                                  <li className=' dark:text-gray-300' key={g}><Link href={`/${f.link}`}><a>{f.judul}</a></Link></li>
                                ))
                              }
                            </ul>

                            }


                            </a></Link></li>

                          ))
                       }

                        </ul>
                       </div>
                 </div>
           </div>


        </div>
        <div className='container'>
            <div className="flex w-full  lg:justify-between items-center">
                <div className="flex lg:hidden pl-3  mr-6 lg:pr-0">
                  <a href="#" className='rounded bg-white dark:bg-gray-700 px-3 py-1 cursor-pointer' onClick={()=>showMenu()}>
                        <i className="fa fa-bars dark:text-gray-300"></i>
                    </a>
                </div>
                  <div className="flex items-center pl-0  lg:pl-0 lg:w-auto w-full  '">
                      <div className="lg:mr-4 hidden lg:block">
                          <img width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lambang_Kabupaten_Bolaang_Mongondow.png/402px-Lambang_Kabupaten_Bolaang_Mongondow.png" alt=""/>
                      </div>
                      <div className='flex justify-between  w-full lg:w-auto flex-row '>
                          <div className="flex flex-col ">
                              <span className="title font-lobster  text-2xl tracking-wide	   lg:text-3xl text-white">Desa Doloduo Dua</span>
                              <span className="title text-sm lg:text-sm text-normal uppercase text-white">Kabupaten Bolaang Mongondow</span>
                          </div>
                          <div className="lg:hidden flex  flex-col items-center justify-center pr-3">
                              <img width={33} height={33} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Lambang_Kabupaten_Bolaang_Mongondow.png/402px-Lambang_Kabupaten_Bolaang_Mongondow.png" alt=""/>
                          </div>
                      </div>

                  </div>
                  <div className="flex hidden lg:block ">
                        <ul className='flex '>
                            {
                            menuRender && (
                              menu.map((e,f)=>(
                                <Link  href={`/${e.menu.link}`}>
                                <li  key={f} className='cursor-pointer px-5 py-2  dropdown-menu text-normal text-white hover:text-black hover:bg-secondary rounded-full text-semibold'>
                                <a className=''>{e.menu.judul}

                                  {
                                    e.parent.length>0 &&

                                    (
                                      <div className='absolute dropdown-item z-10 bg-primary mt-2 rounded opacity-90 leading-lelaxed'>
                                        <ul className='float-left py-2'>

                                            {
                                          e.parent.map((f,g)=>
                                                    (
                                                      <Link  href={`/${f.link}`}>
                                                          <li key={g} className='cursor-pointer px-10  py-2 text-white hover:bg-secondary hover:text-black w-full' >
                                                            <a className=''>{f.judul}</a>
                                                          </li>
                                                      </Link>
                                                    )
                                            )
                                            }
                                        </ul>
                                      </div>
                                    )
                                  }
                                </a></li></Link>
                              ))
                            )
                            }
                            <li class='flex'>
                            <div className='flex pl-20'>
                            <label
                                  for="toogleA"
                                  class="flex items-center cursor-pointer"
                                >
                                   <div class="relative">

                                    {
                                      mode=='Normal'  && (
                                        <input id="toogleA" type="checkbox" checked  onClick={()=>modeMalam()} class="sr-only" />

                                      )
                                      ||
                                      (
                                        <input id="toogleA" type="checkbox" onClick={()=>modeMalam()} class="sr-only" />

                                      )
                                    }

                                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                                    <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                  </div>

                                  <div class="ml-3 text-white dark:text-gray-400 font-medium">
                                    Dark Mode
                                  </div>
                                </label>
                            </div>

                            </li>
                        </ul>
                  </div>

            </div>
        </div>
    </div>
  )
}



export default Header;
