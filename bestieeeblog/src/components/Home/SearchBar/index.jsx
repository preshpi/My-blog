import { React} from 'react';
import './styles.css';


const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
 

 <div className=''>

    <div className="text-center m-5">
    <h2 className="mb-1 mt-5 text-2xl font-sans tracking-widest text-blue-500 dark:text-white title-font text-center">
            Welcome to my Blog ✨💫
          </h2>
          {/* <h1 className="mb-8 mt-3 text-2xl font-bold tracking-tighter text-center  text-blue-800 title-font">
            We share articles about lifestyle, tech, and inspirational stuffs.</h1> */}
    </div>
    <div className="flex justify-center gap-6 mb-5">
      <p className="bg-indigo-300 dark:text-white rounded text-l px-2 py-1">Rant</p>
      <p className="bg-indigo-300 dark:text-white rounded text-l px-2 py-1">Tech</p>
      <p className="bg-indigo-300 dark:text-white rounded text-l px-2 py-1">Lifestyle</p>
    </div>
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          placeholder='Search By Category'
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div> 

 </div>

);

export default SearchBar;
