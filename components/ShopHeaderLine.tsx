//w-870 left-62

interface ShopHeaderLineProps {
  className?: string | undefined;
  title: string;
}

function ShopHeaderLine(props: ShopHeaderLineProps) {
  
  const { title } = props;

  return (
    <div>
        <h3 className="ml-16">{ title }</h3>
      <div
        className={`left-[62px] right-[62px] absolute border border-pink  opacity-60 self-end`}
      ></div>
    </div>
  );
}

export default ShopHeaderLine;
