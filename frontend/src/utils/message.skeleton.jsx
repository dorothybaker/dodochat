const MessageSkeleton = () => {
  return (
    <div className="px-2 overflow-y-auto flex-1 flex flex-col gap-2 pb-1">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div key={item} className="h-12 bg-gray-500 rounded-lg" />
      ))}
    </div>
  );
};

export default MessageSkeleton;
