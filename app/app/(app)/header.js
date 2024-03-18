export default function Header({ title, timeframe, setTimeframe }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
