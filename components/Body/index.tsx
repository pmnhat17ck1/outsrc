export default function Body({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[32px] flex-1 w-full content-start px-[160px] py-[32px]">
      {children}
    </div>
  );
}
