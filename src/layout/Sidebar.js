import React from "react";
import {Link} from 'react-router-dom'

const Sidebar = ({path}) => {
  
  const Item = ({name,pathname}) =>{
        return(
            <Link to={pathname} className={`group py-3 w-full flex flex-row justify-start items-start ${pathname===path && "bg-primary-extralight"} px-4 rounded-md shadow-lg my-2 hover:bg-slate-300 transition-all duration-300`}>
                <p className="text-primary-light font-semibold transition-all duration-300 group-hover:text-primary-dark">{name}</p>
            </Link>
        )
    }

    return (
    <div className="absolute left-0">
      <div className="h-screen  w-80 p-6">
        <div className="h-full bg-primary-dark w-full rounded-2xl shadow-primary-dark shadow-xl flex flex-col items-center px-2 pt-6 relative">
          <h1 className="text-primary-light font-bold ">
            Harita Eğim Hesaplama
          </h1>
          <div className="w-full h-0.5 my-2 shadow-primary-extralight shadow-2xl">
            <div className="bg-primary-light h-1/2"></div>
          </div>
          <div  className="w-full px-3 mt-3  ">
            <Item name={"Anasayfa"} pathname="/anasayfa"/>
            <Item name={"Hesaplama"} pathname="/hesaplama"/>
            <Item name={"Örnek Soru"} pathname="/orneksoru"/>
          </div>
          <h1 className="bottom-4 absolute text-primary-light"  >Elif Güler &&  Perihan Gire</h1>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
