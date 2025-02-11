import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiBootstrap } from 'react-icons/si';

const iconData = [
  { Icon: FaHtml5, alt: 'HTML', color: '#E34F26' },
  { Icon: FaCss3Alt, alt: 'CSS', color: '#1572B6' },
  { Icon: FaJs, alt: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, alt: 'Typescript', color: '#3178C6' },
  { Icon: SiBootstrap, alt: 'Bootstrap', color: '#9235FC' },
  { Icon: FaReact, alt: 'React', color: '#61DAFB' },
  { Icon: FaNodeJs, alt: 'NodeJS', color: '#339933' },
  { Icon: FaPhp, alt: 'PHP', color: '#777BB4' },
  { Icon: FaDatabase, alt: 'SQL', color: '#4479A1' },
];

const repeatArray = (arr, times) => Array.from({ length: times }, () => arr).flat();

const Icons = () => {
  const repeatedIcons = repeatArray(iconData, 3);

  return (
    <div className="scrolling-content py-4">
      {repeatedIcons.map((icon, index) => {
        const IconComponent = icon.Icon;
        return (
          <IconComponent
            key={index}
            size={80}
            color={icon.color}
            title={icon.alt}
            className="mx-4 pointer"
          />
        );
      })}
    </div>
  );
};

export default Icons;
