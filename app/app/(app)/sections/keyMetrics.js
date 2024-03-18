export default function KeyMetricsSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">
            Key Metrics
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-black bg-opacity-5 rounded-md aspect-video"></div>
        <div className="bg-black bg-opacity-5 rounded-md aspect-video"></div>
        <div className="bg-black bg-opacity-5 rounded-md aspect-video"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-black bg-opacity-5 rounded-md aspect-video"></div>
        <div className="bg-black bg-opacity-5 rounded-md aspect-video"></div>
      </div>
    </div>
  );
}
