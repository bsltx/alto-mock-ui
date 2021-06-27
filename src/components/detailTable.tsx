import DetailTableItem from './detailTableItem';

interface DetailTableProps {
  content: Array<{
    title: string;
    content: string;
    infoLink?: string;
  }>;
}

const DetailTable = ({ content }: DetailTableProps) => {
  return (
    <div className='detail-table'>
      {content.map((item, index) => (
        <DetailTableItem
          key={`content-${index}`}
          title={item.title}
          content={item.content}
          infoLink={item.infoLink}
          ind={index}
        />
      ))}
    </div>
  );
};

export default DetailTable;
