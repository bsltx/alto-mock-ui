import logoImage from 'src/assets/images/Alto_logo.png';
import KabobNav from './kabobNav';

interface LogoHeaderProps {
  navIds: Array<string>;
}

const LogoHeader = ({ navIds }: LogoHeaderProps) => {
  return (
    <div className='logo-header'>
      <div className='content-spacer' />
      <img src={logoImage} alt='Alto Brand Logo' />
      <KabobNav ids={navIds} />
    </div>
  );
};

export default LogoHeader;
