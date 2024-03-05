export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex sticky top-0 flex-row w-full h-[72px] content-center bg-black justify-between">
      {children ? (
        children
      ) : (
        <>
          <div className="flex items-center text-white">logo</div>
          <div className="flex items-center text-white">center</div>
          <div className="flex items-center text-white">right</div>
        </>
      )}
    </div>
  );
}
