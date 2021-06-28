import logoImage from 'src/assets/images/Alto_logo.png';
import KabobNav from './kabobNav';

interface LogoHeaderProps {
  navIds: Array<string>;
}

const LogoHeader = ({ navIds }: LogoHeaderProps) => {
  return (
    <div className='logo-header'>
      <div className='content-spacer' />
      <div className='logo-wrapper'>
        <img src={logoImage} alt='Alto Brand Logo' />
      </div>
      <KabobNav ids={navIds} />
    </div>
  );
};

export default LogoHeader;
