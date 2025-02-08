import { useMemo, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const StreamsTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prevSort) => ({
      key,
      direction:
        prevSort.key === key && prevSort.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedData = useMemo(() => {
    if (sortConfig.key) {
      return [...data].sort((a, b) => {
        if (sortConfig.key === "streamCount") {
          return sortConfig.direction === "asc"
            ? a[sortConfig.key] - b[sortConfig.key]
            : b[sortConfig.key] - a[sortConfig.key];
        }

        if (sortConfig.key === "dateStreamed") {
          return sortConfig.direction === "asc"
            ? new Date(a[sortConfig.key]) - new Date(b[sortConfig.key])
            : new Date(b[sortConfig.key]) - new Date(a[sortConfig.key]);
        }

        const aValue = a[sortConfig.key].toLowerCase();
        const bValue = b[sortConfig.key].toLowerCase();

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronUp className="w-4 h-4 opacity-0 group-hover:opacity-50" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-[#d4a418]/30">
      <table className="w-full min-w-full divide-y divide-[#d4a418]/30">
        <thead className="bg-[#867555]/20">
          <tr>
            {[
              { key: "songName", label: "Song Name" },
              { key: "artist", label: "Artist" },
              { key: "dateStreamed", label: "Date Streamed" },
              { key: "streamCount", label: "Streams" },
              { key: "userId", label: "User ID" },
            ].map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                className={`px-4 py-3 text-left text-sm font-semibold text-[#d4a418] cursor-pointer group hover:bg-[#867555]/30 transition-colors ${
                  sortConfig.key === column.key ? "bg-[#867555]/30" : ""
                }`}
              >
                <div className="flex items-center gap-1">
                  {column.label}
                  <SortIcon columnKey={column.key} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#d4a418]/30 bg-[#867555]/10">
          {sortedData.map((stream, index) => (
            <tr key={index} className="hover:bg-[#867555]/20 transition-colors">
              <td className="px-4 py-3 text-sm whitespace-nowrap">
                {stream.songName}
              </td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">
                {stream.artist}
              </td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">
                {formatDate(stream.dateStreamed)}
              </td>
              <td className="px-4 py-3 text-sm whitespace-nowrap">
                {stream.streamCount.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-sm font-mono whitespace-nowrap">
                {stream.userId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StreamsTable;
