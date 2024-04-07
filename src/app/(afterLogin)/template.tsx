// 페이지에서 공통적으로 먼가 할때
// ex:) google analytics 같은거?
// 페이지가 넘나들을때마다 새롭게 component 가 mount 된다고 생각하면 됨
export default function Template({ children }: { children: React.ReactNode }) {
  console.log('afterl login template.');

  return <div>{children}</div>;
}
