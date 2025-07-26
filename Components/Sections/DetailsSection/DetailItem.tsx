export type DetailItemType = {
  title: string;
  description: string;
  icon: any;
  url?: string;
};
export default function DetailItem({ item }: { item: DetailItemType }) {
  return (
    <div className="detailItem">
      <div>{item.icon}</div>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
      <div className="img">{item.icon}</div>
    </div>
  );
}
