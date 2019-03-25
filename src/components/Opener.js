import React from 'react';

export default () => {
  const handleOpeAll = () => {
    const links = document.querySelectorAll('.js-link-to-open');

    for (let i = 0; i < links.length; i++) {
      setTimeout(function() {
        links[i].click();
      }, i * 10 );
    }
  };

  return (
    <div
      className="button"
      id="js-open-all-links-btn"
      onClick={handleOpeAll}
    >
      Open all
    </div>
  )
};