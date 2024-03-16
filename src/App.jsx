import { useState } from 'react';
import './App.css';
import Currentlycooking from './components/Currentlycooking/Currentlycooking';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import OurRecipes from './components/OurRecipes/OurRecipes';
import RecipeCards from './components/RecipeCards/RecipeCards';
import SideBar from './components/SideBar/SideBar';



function App() {
  const [sidebar, setSidebar] = useState([])

  const handleWantToCook = (recipecard) => {
    const isExist = sidebar.find(item => item.id == recipecard.id);
    if (!isExist) {

      const newSidebar = [...sidebar, recipecard];
      setSidebar(newSidebar)
    } else {
      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
      toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯'
        }
      )
    }
  }
  console.log(sidebar);

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
          <div className=" border border-[#28282826] rounded-lg justify-self-end  gap-3 p-4">
            <SideBar sidebar={sidebar}></SideBar>
            <Currentlycooking></Currentlycooking>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
