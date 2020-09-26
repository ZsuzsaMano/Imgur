import React from 'react';

const Navbar = ({ updateSection, section, sort, windowP, showViral, updateWindowP,
  updateSort, toggleShowViral, }) =>
{
  return (
  <div className="navbar">
  <form id="navbar__form">

   {/*choose section to display*/}
  < fieldset className="gallery__section">
    <input type="radio" id="hot" name="section" value="hot" onClick={updateSection}/>
    <label htmlFor="hot" >HOT</label>
    <input type="radio" id="top" name="section" value="top" onClick={updateSection}/>
    <label htmlFor="top">TOP</label>
    <input type="radio" id="user" name="section" value="user" onClick={updateSection}/>
    <label htmlFor="user">USER</label>
  </ fieldset>


{/*display only if section is set to top*/}
    <div className={`form__window ${section === 'top' ? '' : 'display-none'}`}>
        <label htmlFor="window" > Window Parameters  </label>
  <select value={windowP} onChange={updateWindowP}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="all">All</option>
          </select>

  </div>

{/*display only if section is set to user*/}
  <div className={`form__sort ${section === 'user' ? '' : 'display-none'}`}>
  <label htmlFor="sort">Sort  </label>
  <select value={sort} onChange={updateSort}>
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
          </select>

   </div>

{/*toggle viral image display*/}
   <div className="checkbox">
     <label htmlFor="viral__images">Viral Images
        <input
                    id="viral__images"
                     type="checkbox"
                     checked={showViral}
                     onChange={toggleShowViral}
                           />
     </label>
   </div>

  </form>
</div>
);
};

export default Navbar;
