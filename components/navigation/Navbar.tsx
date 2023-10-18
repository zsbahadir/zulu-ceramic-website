'use client'

//import React
import { useState } from "react";

//import Components
import Text from "../text/Text";



interface NavbarProps{
    className? : string;
    icon?: any;
    isFooter?: boolean;
    homePage?: boolean;
}


function Navbar(props: NavbarProps ){

    const { className, icon, isFooter, homePage }  = props;


    const pageLinks =  homePage 
    ? [
        ['Welcome', 'home'],
        ['About', 'about'],
        ['Collections', 'collections'],
      ] 
    : [
        ['New Release', 'newRealese'],
        ['Cups', 'cups'],
        ['Ornaments', 'ornaments'],
        ['Plates', 'plates'],
        ['Outlet', 'outlet'],
      ];


    const textMarginClass = isFooter ? "mx-6" : "mx-20";


    //<FaExclamation fill="#D7648A" className="mb-4"  />

    return (
        <nav className = {className}>
            { homePage ?
            (
                <>
        {pageLinks.map(([title, id]) => (
            <Text text={title} href= {`#${id}`} weight="medium" className = {`${textMarginClass} text-slate-700`}/>
        ))}
            <Text text={"Shop"} href = "/shopping" target="_blank" weight="medium" className = {`${textMarginClass} text-slate-700`}/>
       
            {icon && <span>{icon}</span>}
            </>
            )
            :
            (
                <>
                {pageLinks.map(([title, id]) => (
                    <Text text={title} href= {`#${id}`} weight="medium" className = {`${textMarginClass} text-slate-700 w-1/2`}/>
                ))} 
                {icon && <span>{icon}</span>}
                </>
            )
        }
        
      </nav>    
    )
}


export default Navbar;