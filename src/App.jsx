import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Currentlycooking from './components/Currentlycooking/Currentlycooking';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import OurRecipes from './components/OurRecipes/OurRecipes';
import RecipeCards from './components/RecipeCards/RecipeCards';
import SideBar from './components/SideBar/SideBar';



function App() {
  const [sidebar, setSidebar] = useState([])
  const [currentlyCooking,setCurrentlyCooking] = useState([])

  const handleWantToCook = (recipecard) => {
    const isExist = sidebar.find(item => item.id == recipecard.id);
    if (!isExist) {

      const newSidebar = [...sidebar, recipecard];
      setSidebar(newSidebar)
      toast("Successfully Added!!")
    } else {
      toast.warn("Already exist!!")
    }
  }
  const handlePreparing = (currentlyCookingCard, id)=>{
    const isExist = currentlyCooking.find(item => item.id == currentlyCookingCard.id);
    if (!isExist) {

      const newCurrentCooking = [...currentlyCooking, currentlyCookingCard];
      setCurrentlyCooking(newCurrentCooking)
      toast("Successfully Added!!")
    } else {
       
      toast.warn("Already exist!!")
    }
    const removePreparing = sidebar.filter(currentlyCooking => currentlyCooking.id !== id);
    setSidebar(removePreparing)

  }
  return (
    <>
      <header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </header>
      <main>
        <OurRecipes></OurRecipes>
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto my-10 md:px-0 px-4 gap-4'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
          <div className="lg:w-[436px] border border-[#28282826] rounded-lg gap-3 px-2">
            <SideBar handlePreparing={handlePreparing} sidebar={sidebar}></SideBar>
            <Currentlycooking currentlyCooking={currentlyCooking}></Currentlycooking>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
