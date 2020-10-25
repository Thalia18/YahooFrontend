import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div>aqui va el navbar</div>
      {children}
      <footer>aqui va el footerx</footer>
    </div>
  );
};

export default Layout;
