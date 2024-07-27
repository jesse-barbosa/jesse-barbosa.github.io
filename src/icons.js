import React from 'react';
import htmlIcon from './img/languages/html.png';
import cssIcon from './img/languages/css.png';
import jsIcon from './img/languages/js.png';
import bootstrapIcon from './img/languages/bootstrap.png';
import nodeIcon from './img/languages/nodeJS.png';
import phpIcon from './img/languages/PHP.png';
import sqlIcon from './img/languages/sql.png';

const iconData = [
  { src: htmlIcon, alt: 'HTML', class: 'ms-5 ps-3' },
  { src: cssIcon, alt: 'CSS' },
  { src: jsIcon, alt: 'JavaScript' },
  { src: bootstrapIcon, alt: 'Bootstrap' },
  { src: nodeIcon, alt: 'NodeJS' },
  { src: phpIcon, alt: 'PHP' },
  { src: sqlIcon, alt: 'SQL' },
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
