import { graphql, useStaticQuery } from "gatsby"

type useAllTitelsProps = {
 shortTitle:string,
 slug:string,


}

const useAllTitels = () => {
  const data = useStaticQuery<useAllTitelsProps>(graphql`
  query{
      allMdxProject {
        nodes {
          slug
          shortTitle
          id
        }
      }
     } 

  `)
  return data
  
}

export default useAllTitels
