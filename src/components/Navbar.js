import React from 'react';

const Navbar = ({getSearch, search, updateSearch}) => {
return(
  <div className="navbar">
  <ul>
  <li>allow selecting the gallery section: hot, top, user;</li>
  <li>allow including / excluding viral images from the result set;</li>
  <li>allow specifying window and sort parameters;</li>
  <li>when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.</li>
  </ul>
  <form>
  <label htmlFor="gallery__section">Gallery Section</label>
  hot top user
  <label htmlFor="viral__images">Viral Images</label>
  on off
  <label htmlFor="window">Window Parameters</label>
  <label htmlFor="sort">Sort</label>
  </form>
</div>
);
}

export default Navbar;
