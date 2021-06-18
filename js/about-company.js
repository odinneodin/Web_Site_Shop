'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //about-company-page

  const aboutCompany = {
    head: ['About MAshop project'],
    text: [
      `This page represents our hardware store where there is information mainly about Apple products,
      as well as a couple of catalogs of other companies' products, especially flagship phones, and three
      more catalogs with laptops and cameras are planned (laptops have a test variant). The development was
      conducted by Maxim and Andrew, that is why the name was called as an abreviation of MA. The project is far
      from ideal and is about 60% complete, including the lack of declared catalogs of technology, usability and more
      dequate design of some modules, and in general the first experience in the creation of an online store, which
      provided useful knowledge and understanding of the web development stores. 
    
      `,
    ],
  };

  const headText = document.querySelector('.headText');
  const text = document.querySelector('.text');

  headText.innerHTML = aboutCompany.head;
  text.innerHTML = aboutCompany.text;
});
