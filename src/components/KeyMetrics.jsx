import { TrendingUp, Users, Play, DollarSign, Music } from "lucide-react";

const KeyMetrics = ({ metrics }) => {
  const getIcon = (title) => {
    switch (title) {
      case "Total Users":
        return <Users className="w-6 h-6" />;
      case "Active Users":
        return <TrendingUp className="w-6 h-6" />;
      case "Total Streams":
        return <Play className="w-6 h-6" />;
      case "Revenue":
        return <DollarSign className="w-6 h-6" />;
      case "Top Artist":
        return <Music className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#867555]/20 p-4 rounded-lg border border-[#d4a418]/30 shadow-lg hover:bg-[#867555]/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#d4a418]">{getIcon(metric.title)}</span>
            <h3 className="text-sm font-semibold text-[#ffeeca]">
              {metric.title}
            </h3>
          </div>
          <p className="text-2xl font-bold text-[#d4a418]">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;
