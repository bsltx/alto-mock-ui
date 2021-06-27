import infoIcon from 'src/assets/images/Info_icon.png';

interface DetailTableItemProps {
  title?: string;
  content: string;
  infoLink?: string;
  ind: number;
}

const DetailTableItem = ({
  title,
  content,
  infoLink,
  ind
}: DetailTableItemProps) => {
  const contentClass = title ? 'cd-content' : 'cd-content-no-title';
  return (
    <div className='detail-table-item' key={`content-item-${ind}`}>
      <p className='cd-title'>{title}</p>
      <p className={contentClass}>
        {content}{' '}
        {infoLink && (
          <a href={infoLink} target='_blank' rel='noreferrer'>
            <img src={infoIcon} alt='Info Icon' />
          </a>
        )}
      </p>
    </div>
  );
};

export default DetailTableItem;
