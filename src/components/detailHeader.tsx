import JumboText from 'src/components/jumboText';

interface DetailHeaderProps {
  cardType?: string;
  jumboText: string;
  isJumboTime?: boolean;
  subText?: string;
}

const DetailHeader = ({
  cardType,
  jumboText,
  isJumboTime,
  subText
}: DetailHeaderProps) => {
  return (
    <div className='detail-header'>
      {cardType && <p className='card-title'>YOUR {cardType.toUpperCase()}</p>}
      <JumboText isTime={!!isJumboTime} text={jumboText} />
      {subText && <p className='estimated-arrival'>{subText}</p>}
    </div>
  );
};

export default DetailHeader;
