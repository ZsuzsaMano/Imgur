import React from 'react';

const Navbar = ({ section, sort, windowP, showViral, updateWindowP, updateSort, toggleShowViral, }) => {
  return (
  <div className="navbar">
  <form>
  <div className="gallery__section">
    <input type="radio" id="hot" name="section" value="hot" />
    <label htmlFor="hot">HOT</label><br/>
    <input type="radio" id="top" name="section" value="top"/>
    <label htmlFor="top">TOP</label><br/>
    <input type="radio" id="user" name="section" value="user"/>
    <label htmlFor="user">USER</label>
  </div>



    <div className={`form__window ${ section === 'top' ? '' : 'display-none'}`}>
        <label htmlFor="window" >Window Parameters
  <select value={windowP} onChange={updateWindowP}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="all">All</option>
          </select>
        </label>
  </div>

  <div className={`form__sort ${ section === 'user' ? '' : 'display-none'}`}>
  <label htmlFor="sort">Sort
  <select value={sort} onChange={updateSort}>
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
          </select>
  </label>
   </div>

   <div className="checkbox">
     <label htmlFor="viral__images">Viral Images

             <input
                     type="checkbox"
                     checked={showViral}
                     onChange={toggleShowViral}
                           />
     </label>
   </div>

  </form>
</div>
);
}

export default Navbar;
