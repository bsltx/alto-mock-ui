interface JumboTextProps {
  text: string;
  isTime?: boolean;
}

const JumboText = ({ text, isTime }: JumboTextProps) => {
  return (
    <>
      {isTime ? (
        <p className='jumbo-time'>
          {text.split(' ')[0]}
          <span>{text.split(' ')[1]}</span>
        </p>
      ) : (
        <p className='jumbo-text'>{text}</p>
      )}
    </>
  );
};

export default JumboText;
