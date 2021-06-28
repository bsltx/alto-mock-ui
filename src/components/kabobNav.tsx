import { useEffect, useState } from 'react';
import { getScrollPercent } from 'src/helpers/utils';

interface KabobNavProps {
  ids: Array<string>;
}

const KabobNav = ({ ids }: KabobNavProps) => {
  const [activeDot, setActiveDot] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [sectionCenters, setSectionCenters] = useState([0]);

  // Activate listener and calculate section centers
  useEffect(() => {
    window.addEventListener('scroll', scrollUpdate);

    const numberOfActiveDots = ids.filter(
      (idString) => idString.length > 0
    ).length;
    const sectionMidPoints = 100 / numberOfActiveDots / 2;
    const sectionCenterpoints = [sectionMidPoints];
    for (let i = 1; i < numberOfActiveDots; i++) {
      sectionCenterpoints.push(
        sectionCenterpoints[i - 1] + sectionMidPoints * 2
      );
    }
    setSectionCenters(sectionCenterpoints);

    return () => {
      window.removeEventListener('scroll', scrollUpdate);
    };
  }, [ids]);

  // Update Active Dot
  useEffect(() => {
    // Scroll Positions
    const prevDotPos = activeDot > 0 ? sectionCenters[activeDot - 1] : 0;
    const nextDotPos =
      activeDot < sectionCenters.length - 1
        ? sectionCenters[activeDot + 1]
        : 100;
    const sectionDivide = prevDotPos + (nextDotPos - prevDotPos) / 2;

    // Is Change Necessary
    const changeToPreviousDot =
      prevDotPos !== 0 &&
      scrollPos < sectionDivide &&
      sectionDivide - scrollPos > scrollPos - prevDotPos;
    const changeToNextDot =
      nextDotPos !== 100 &&
      scrollPos > sectionDivide &&
      scrollPos - sectionDivide > nextDotPos - scrollPos;

    // Update dot
    changeToPreviousDot && setActiveDot(activeDot - 1);
    changeToNextDot && setActiveDot(activeDot + 1);
  }, [activeDot, scrollPos, sectionCenters]);

  const scrollUpdate = () => {
    setScrollPos(getScrollPercent());
  };

  return (
    <div className='kabob-nav'>
      <div className='content-spacer' />
      <div className='kabob-dots'>
        {ids.map((id: string, index: number) => {
          if (id) {
            return (
              <a
                href={`#${id}`}
                key={`kabob-item-${index}`}
                className={`${index === activeDot ? 'active' : ''}`}
                aria-label={`Navigation Link to ${id}`}
              >
                &nbsp;
              </a>
            );
          } else {
            return (
              <p
                key={`kabob-item-${index}`}
                className={`${id.length < 1 ? 'outline' : ''}`}
                aria-label={'Inactive Nav Dot'}
              >
                &nbsp;
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default KabobNav;
