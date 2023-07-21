import React from 'react'
import Hero from './components/Hero'
import "../../styles/home.css"
import airtel from "../../assets/SponserLogos/Row1/airtel.png"
import firstBank from "../../assets/SponserLogos/Row1/firstBank.png"
import mtn from "../../assets/SponserLogos/Row1/mtn.png"
import paga from "../../assets/SponserLogos/Row1/paga.png"
import uba from "../../assets/SponserLogos/Row1/uba.png"

import Airbnb from "../../assets/SponserLogos/Row2/Airbnb.png"
import CocaCola from "../../assets/SponserLogos/Row2/CocaCola.png"
import Ebay from "../../assets/SponserLogos/Row2/Ebay.png"
import facebook from "../../assets/SponserLogos/Row2/facebook.png"
import GoogleCloud from "../../assets/SponserLogos/Row2/GoogleCloud.png"
import Spotify from "../../assets/SponserLogos/Row2/Spotify.png"
import Tux from "../../assets/SponserLogos/Row2/Tux.png"

import Adobe from "../../assets/SponserLogos/Row3/Adobe.png"
import CreativeCloud from "../../assets/SponserLogos/Row3/CreativeCloud.png"
import Discord from "../../assets/SponserLogos/Row3/Discord.png"
import Figma from "../../assets/SponserLogos/Row3/Figma.png"
import Netflix from "../../assets/SponserLogos/Row3/Netflix.png"
import Paypal from "../../assets/SponserLogos/Row3/Paypal.png"
import Zoom from "../../assets/SponserLogos/Row3/Zoom.png"
import LogosCarousel from './components/LogosCarousel'

const Home = () => {

  const row1 = [airtel, firstBank, mtn, paga, uba];
  const row2 = [Airbnb, CocaCola, Ebay, facebook, GoogleCloud, Spotify, Tux];
  const row3 = [Adobe, CreativeCloud, Discord, Figma, Netflix, Paypal, Zoom];

  return (
    <div className="w-full py-7">
      <Hero />
      <div className='mt-20 flex items-center flex-col justify-center overflow-hidden '>

        <LogosCarousel images={row1} />
        <LogosCarousel images={row2} />
        <LogosCarousel images={row3} />

      </div>
    </div>
  )
}

export default Home