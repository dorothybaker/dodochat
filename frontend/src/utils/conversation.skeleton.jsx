function ConversationSkeleton() {
  return (
    <div className="flex flex-col gap-2 pt-2">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <div>
            <div className="h-10 w-10 rounded-full bg-gray-500" />
          </div>
          <div className="bg-gray-500 h-12 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export default ConversationSkeleton;
