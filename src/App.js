import React from "react";
import Header from "./components/Header";
import Information from "./components/Information";
import Menu from "./components/Menu";
import Croissants from "./components/Croissants";
import Levamos from "./components/Levamos";
import Sobre from "./components/Sobre";
import Meowenjoy from "./components/Meowenjoy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-[#F7F2E8]  font-Poppins text-[#1A1A1A] overflow-hidden">
      <div className="relative max-w-6xl mx-auto mb-[130px] ">
        <Header />
        <Information />
      </div>   
      <div className="relative max-w-6xl mx-auto">
      <Menu />
      <div className="mt-[160px]">
      <Croissants />
      </div>    
      </div>
      <div className="z-30">
        <div className="relative max-w-6xl mx-auto"><Levamos /></div>
      </div>
      <div className="w-screen h-screen">
        <Sobre />
      </div>
      <div className="relative max-w-6xl mx-auto"><Meowenjoy /></div>
      <div className="relative max-w-6xl mx-auto"><Footer /></div>
    </div>
  );
}

export default App;
