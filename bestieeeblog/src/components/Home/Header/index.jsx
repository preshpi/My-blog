import React from 'react';
import Toggle from '../darkmode/toggle';

const Header = () => (
    <header className="h-20 top-0 text-serif items-center m-5">
    <div className="flex justify-between mb-5 items-center max-w-[1240px] mx-auto px-4">
      <h1 className="text-2xl dark:text-white animate-pulse">Preshpie.</h1>
    <Toggle/>
    </div>
   </header>  
);

export default Header;
