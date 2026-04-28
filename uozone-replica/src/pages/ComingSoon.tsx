export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-md shadow-uo-card px-6 py-10 text-center">
      <h2 className="text-uo-garnetText text-[20px] font-bold mb-2">{title}</h2>
      <p className="text-[14px] text-uo-subtle">
        This section will be filled in as more screenshots are provided.
      </p>
    </div>
  );
}
