// paralle route 는 layout 에서 사용 가능하다.

export default function BeforeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="size-full">
      {children}
      {modal}
    </div>
  );
}
