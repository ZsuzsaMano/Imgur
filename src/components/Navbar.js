import React from 'react';

const Navbar = ({getSearch, search, updateSearch}) => {
return(
  <div className="navbar">

  <ul>
  <li>when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.</li>
  </ul>

  <form>

  <div className="gallery__section">Gallery Section
  <input type="radio" id="male" name="section" value="hot" checked={true}/>
<label htmlFor="hot">HOT</label><br/>
<input type="radio" id="female" name="section" value="top"/>
<label htmlFor="top">TOP</label><br/>
<input type="radio" id="other" name="section" value="user"/>
<label htmlFor="user">USER</label>
</div>

  <div className="checkbox">
    <label htmlFor="viral__images">Viral Images

            <input
                    type="checkbox"
                    /* value={label}
                    checked={isChecked}
                     onChange={toggleCheckboxChange} */
                          />
    </label>
  </div>

    <div className="form__window">
        <label htmlFor="window">Window Parameters
only if  section is top
  <select /*value={value} onChange={handleChange}*/>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="all">All</option>
          </select>
        </label>
  </div>

  <div className="form__sort">
  <label htmlFor="sort">Sort
    only available with user section
  <select /*value={value} onChange={handleChange}*/>
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
          </select>
  </label>
   </div>
  </form>
</div>
);
}

export default Navbar;
