import React from 'react';

const Footer: React.FC<{ name: string }> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return <footer>&copy; {name} {currentYear}</footer>;
};

export default Footer;
