/** @jsx jsx */
import { jsx } from "theme-ui"
import  React,{useState,useEffect} from "react"
import "fontsource-work-sans/latin.css"
import { Global } from "@emotion/core"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import SEO from "./seo"
import {Link} from 'gatsby'
import { SkipNavTarget, SkipNavTrigger } from "./skip-nav"

type LayoutProps = { children: React.ReactNode; color?: string }



const Layout = ({ children, color = `white` }: LayoutProps) =>{

  const [zu,setZu]= useState(false)

  useEffect(()=>{
    if(!typeof window) return
    if(typeof window){
      let l = window.localStorage.getItem("f-einverstanden")
      if(l==="undefined" || l===null){
        setZu(false)
      }else(
        setZu(true)
      )
      }
   
    
  },[])
  function ma(){
   
    if(!typeof window) return
    if(typeof window){
      setZu(true)
      window.localStorage.setItem("f-einverstanden","true")
    }
    
  }
  const MyDaten = () => {
  
    return(
      <div sx={{
        position:'absolute',
        top:120,
        left:40,
        padding:10,
        width:'320px',
        background: 'black',
        color:'white',
        zIndex:30000,
        a:{
          color:'white',
          
        },
        cursor:'pointer'
      }}>
      <h2>Wir nutzen Cookies zur Optimierung der Webseite.</h2>
      <p>Bitten informieren Sie sich vor der Nutzung über unsere Datenschutzbestimmungen</p>
      <Link to="/datenschutz" >Datenschutzbestimmungen</Link><br/>
      <button onClick={
        ma()
      }>
        Ich erkläre mein Einverständnis ...
      </button>
  
      </div>
    )
  }
  return (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*,*:after,*:before": {
          boxSizing: `border-box`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: theme.colors.primary,
          color: theme.colors.white,
        },
        "ul > li > code, ol > li > code, p > code": {
          color: `#393A34`,
          background: `#f6f8fa`,
          padding: 2,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    <SkipNavTrigger />
    <Wrapper sx={{m:5}}>
      {
        !zu && <MyDaten />  
      }
      
     
      <Sidebar bg={color} />
      <main sx={{ gridColumnStart: [1, 1, 1, 2],m:2 }}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer bg={color} />
    </Wrapper>
  </React.Fragment>
)}

export default Layout
