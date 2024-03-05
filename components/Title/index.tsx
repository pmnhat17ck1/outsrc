export default function Title({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex w-full h-[92px] content-center bg-gray-400 items-center justify-between text-center">
      <p className="text-center w-full">{children}</p>
    </div>
  );
}
