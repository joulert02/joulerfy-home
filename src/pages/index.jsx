import React from "react"
import Layout from "../components/organisms/layout/layout"
import Home from "../components/organisms/home/home"
import Seo from "../components/seo"

const Index = () => {
  return (
    <Layout isLoguerUser={false}>
      <Home />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" description="Home joulerfy" />

export default Index
