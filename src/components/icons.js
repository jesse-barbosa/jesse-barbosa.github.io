import React from 'react';

const iconData = [
  { src: '/assets/languages/html.png', alt: 'HTML', class: 'ms-5 ps-3' },
  { src: '/assets/languages/css.png', alt: 'CSS' },
  { src: '/assets/languages/javascript.png', alt: 'JavaScript' },
  { src: '/assets/languages/typescript.png', alt: 'Typescript' },
  { src: '/assets/languages/bootstrap.png', alt: 'Bootstrap' },
  { src: '/assets/languages/react.png', alt: 'React' },
  { src: '/assets/languages/nodejs.png', alt: 'NodeJS' },
  { src: '/assets/languages/php.png', alt: 'PHP' },
  { src: '/assets/languages/sql.png', alt: 'SQL' },
];

const repeatArray = (arr, times) => Array.from({ length: times }, () => arr).flat();

const Icons = () => {
  const repeatedIcons = repeatArray(iconData, 6);

  return (
    <div className="scrolling-content">
      {repeatedIcons.map((icon, index) => (
        <img key={index} src={icon.src} alt={icon.alt} className={icon.class} />
      ))}
    </div>
  );
};

export default Icons;
