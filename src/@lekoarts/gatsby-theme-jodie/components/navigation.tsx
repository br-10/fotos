/** @jsx jsx */
import { jsx,Box, Link as TLink } from "theme-ui"
import React, {useEffect,useState} from "react"
import { Link } from "gatsby"
import { readableColor } from "polished"
import useJodieConfig from "../hooks/use-jodie-config"
import {FaCamera} from 'react-icons/fa'
import useAllTitels from "../hooks/use-all-titels"

const Navigation = ({ bg }: { bg: string }) => {
  const [menu1,setMenu1]=useState(false)
  const [menu2,setMenu2]=useState(false)
  const { navigation, projectsPath, projectsUrl } = useJodieConfig()
  const data = useAllTitels()

  function mmenu1(){
    setMenu1(!menu1)
    setMenu2(false)
  }
  function mmenu2(){
    setMenu1(false)
    setMenu2(!menu2)
  }
  return (
    <nav
      aria-label="Primary Navigation"
      
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: 2,
          marginLeft: 2,
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
     
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      {/* <Box sx={{my:1,mx:[2,3], textAlign:'left',display:['block','block','block','block'],justifyContent:'flex-start'}}>
         <span sx={{display:'inline-block',color:'white',letterSpacing:'.09rem',fontSize:'1.3rem'}}>Benjamin May</span>
      </Box> */}
      
     <>
     <h2 onMouseEnter={()=>mmenu1()} sx={{ml:2,color:'black',fontWeight:400,fontSize:1,textTransform:'uppercase'}}>Projects</h2>
     {menu1 && 
      <ul sx={{m:0,p:0}}>
       {data.allMdxProject.nodes.map((node,index)=>{
         
         return(
           <Link sx={{textAlign:'left',display:'block',fontSize:'1rem'}} key={index} to={node.slug}><li>{node.shortTitle}  </li></Link>
         )
       })}
     
      </ul>
      }
      <hr/>
     
      <h2 onMouseEnter={()=>mmenu2()} sx={{ml:2,color:'black',fontWeight:400,fontSize:'1rem',textTransform:'uppercase'}}>More</h2>
      {menu2 && 
       <ul sx={{display:'flex',flexDirection:'column'}}>
        {navigation.map((navItem) => (
          navItem.slug!=="/projects" &&
          <li  key={navItem.slug}>
            <TLink  as={Link} to={navItem.slug}>
              <span>{navItem.name}</span>
            </TLink>
          </li>
        ))}
      </ul>
    }
   </>
    </nav>
  )
}

export default Navigation
