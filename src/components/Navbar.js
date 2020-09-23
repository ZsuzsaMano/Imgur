import React from 'react';

const Navbar = ({getSearch, search, updateSearch}) => {
return(
  <div className="navbar">
  <ul>
  <li>show gallery images in a grid of thumbnails;</li>
  <li>show image description in the thumbnail, top or bottom;</li>
  <li>allow selecting the gallery section: hot, top, user;</li>
  <li>allow including / excluding viral images from the result set;</li>
  <li>allow specifying window and sort parameters;</li>
  <li>when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.</li>
  </ul>
</div>
);
}

export default Navbar;
