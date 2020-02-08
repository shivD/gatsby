import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ pageContext: { dog } }) => (
    <Layout>
        <SEO title= {dog.name} /> 
        {dog.name} - {dog.breed} 
   </Layout>

)