import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({children,location}) =>{
    return(
        <div className="flex-1 bg-primary-light h-screen relative ">
            <Sidebar path={location.pathname}/>
            <div className="ml-80 py-6 pr-8 h-screen " >
                <div className="shadow-2xl text-xl rounded-2xl h-full overflow-y-scroll p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;