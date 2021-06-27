interface BigButtonProps {
  text: string;
  disabled?: boolean;
  btnClick?: () => void;
}

const BigButton = ({ text, disabled, btnClick }: BigButtonProps) => {
  return (
    <button className={'big-btn'} disabled={!!disabled} onClick={btnClick}>
      {text}
    </button>
  );
};

export default BigButton;
