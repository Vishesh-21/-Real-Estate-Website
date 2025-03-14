import React from 'react'
import { Dashboard } from './_components/Dashboard'
import { About } from './_components/About'
import { LatestProperties } from './_components/LatestProperties'
import { Services } from './_components/Services'

export default function Home() {
  return (
    <div >
      <Dashboard/>
      <About/>
      <LatestProperties/>
      <Services/>
    </div>
  )
}
