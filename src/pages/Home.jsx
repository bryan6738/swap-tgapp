import React from 'react'
import Navbar from '../Components/Navbar'
import Exchanger from '../Components/Exchanger'
import Faqs from '../Components/Faqs'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import Privacy_card from '../Components/Privacy_card'
import Wide_cards from '../Components/Wide_cards'
import Safety from '../Components/Safety'
import Support from '../Components/Support'
import Buy_Crypto from '../Components/Buy_Crypto'
import Trustpilot from '../Components/Trustpilot'
import Currency from '../Components/Currency'
import How_it_works from '../Components/How_it_works'

const Home = () => {
  return (
<>
<div className='bg-regal-blue h-screen'>
<Navbar/>
{/* Exhanger Home Component starts here */}
<div>
{/* Heading starts here */}
<div className='flex  text-white flex-col justify-center p-4 items-center'>
    <h1 className='text-white leading-relaxed text-[52px]'>Crypto Exchange</h1>
    <p className='text-xl leading-tight'>Free from sign-up, limits, complications</p>
</div>

<Exchanger/>




</div>

</div>
<div>
  <div className='bg-[#062763]/90'>

<Cards/>
<Privacy_card/>
<Wide_cards/>
<Safety/>
<Support/>
<Buy_Crypto/>
<Trustpilot/>
<Currency/>
<How_it_works />
  </div>
<Footer/>
</div>

</>
  )
}

export default Home