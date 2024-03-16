import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipecard from './components/Recipecard/Recipecard'
import SideBar from './components/SideBar/SideBar'
function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </header>
      <main>
        <OurRecipes></OurRecipes>
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto my-10 md:px-0 px-4 gap-4'>
          <Recipecard></Recipecard>
          <SideBar></SideBar>
        </div>
      </main>
    </>
  )
}

export default App
