import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Page: React.FC<{ title: string, name: string }> = ({ title, name }) => {
  return (
    <div>
      <Header title={title} />
      <Navbar />
      <main>
      </main>
      <Footer name={name} />
    </div>
  );
};

export default Page;
