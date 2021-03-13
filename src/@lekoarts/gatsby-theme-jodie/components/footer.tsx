/** @jsx jsx */
import { jsx,Link, useThemeUI } from "theme-ui"
import {Link as GatsbyLink} from 'gatsby'
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { author } = useSiteMetadata()
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme!.colors!.textMuted as string | undefined,
    theme!.colors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      
      <div>
        <GatsbyLink
          aria-label="Link zum Impressum"
          to="/impressum"
        >
         
          Impressum
        </GatsbyLink>
     
        <GatsbyLink
          aria-label="Link zum Datenschutz"
          to="/datenschutz"
        >
           <br/>
          Datenschutz
        </GatsbyLink>
      
        <br/>
        <GatsbyLink
          aria-label="Link zum Kontakt"
          to="/kontakt"
        >
          Kontakt
        </GatsbyLink>
       
      </div>
      <div>
        &copy; {new Date().getFullYear()} by K.O.M
      </div>
      <div><br/>
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          Theme by LekoArts
        </Link></div>
    </footer> 
  )
}

export default Footer
