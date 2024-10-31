import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'
import TopSeriesTable from './TopSeriesTable'



const TopSeries = () => {
  return (
    <>
    <section className='flex min-h-screen bg-secondary'>
      <aside className='bg-primary text-dark basis-[200px]'>
        <Navigation menu="top-series"/>
 
      </aside>

      <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
        <Header title="Top Series" subtitle="Top 10 Series of the Month" />
        <TopSeriesTable/>
        <Footer/>
      </main>
    </section>

    
    </>

  )
}

export default TopSeries