import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'
import TopMoviesTable from './TopMoviesTable'


const TopMovies = () => {
  return (
    <>
    <section className='flex min-h-screen bg-secondary'>
      <aside className='bg-primary text-dark basis-[200px]'>
        <Navigation menu="top-movies"/>
 
      </aside>

      <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
        <Header title="Top Movies" subtitle="Top 10 Movies of the Month" />
        <TopMoviesTable/>
        <Footer/>
      </main>
    </section>

    
    </>

  )
}

export default TopMovies