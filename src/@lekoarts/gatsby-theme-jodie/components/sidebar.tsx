/** @jsx jsx */
import React,{useEffect,useState} from 'react'
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
//import Logo from "../icons/logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Navigation from "./navigation"


type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
  const [farbe,setFarbe]=useState("white")
  const { siteTitle } = useSiteMetadata()
  let mcolor=bg==='black'?'white':'black'
 
  return (
   
    <header
      sx={{

       p:3,
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        backgroundColor: bg,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
        svg: {
          fill: readableColor(bg),
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      <div sx={{display:['none','none','none','block']}}>
      <Link to="/" aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}>
        </Link>
      </div>
 
      <div sx={{ py: 4, display: [`block`, `block`] }} >
      <span sx={{pl:2,display:'inline-block',color:`${mcolor}`,fontWeight:400,fontSize:4}}>Benjamin May</span> 
      
      <Navigation bg={bg} />
      </div>
    </header>
    
  )
}

export default Sidebar
