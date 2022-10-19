import React from "react"
import Layout from "../components/organisms/layout/layout"
import Home from "../components/organisms/home-logued/home"
import Seo from "../components/seo"

const Index = () => {
  return (
    <Layout isLoguerUser={true}>
      <Home />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" description="Home joulerfy" />

export default Index
