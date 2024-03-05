export default function ListItem({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-[425px] content-center bg-gray-400 justify-between">
      {children}
    </div>
  );
}
