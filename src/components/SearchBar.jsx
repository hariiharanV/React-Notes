import { RiSearchLine } from 'react-icons/ri';

function SearchBar({changeHandler}) {
  return (
    <div className="searchBar my-1">
        <RiSearchLine size={20} className="mx-2 my-1"/>
        <input type="text" onChange={(e)=>changeHandler(e.target.value)} className="searchText" placeholder="Search items here..."></input>

    </div>
  )
}

export default SearchBar