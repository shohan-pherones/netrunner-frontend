import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center gap-2">
      <Loader2 className="animate-spin" size={16} />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
