type OrderButtonProps = {
  text: string;
  onClick: () => void;
}

export default function OrderButton({ text, onClick }: OrderButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}
