import { Josefin_Sans } from "next/font/google";
import Logo from "@/assets/icons/Logo";
import {
  RevenueDistribution,
  TopSongsChart,
  UserGrowthChart,
} from "@/components/Chart";
import KeyMetrics from "@/components/KeyMetrics";
import StreamsTable from "@/components/StreamsTable";
import { DataProvider } from "@/context/DataContext";
import {
  mockMetrics,
  mockUserGrowthData,
  mockRevenueData,
  mockTopSongsData,
  mockStreams,
} from "@/utils/data";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const Dashboard = () => {
  return (
    <DataProvider>
      <div className="min-h-screen bg-[#051937] text-[#ffeeca]">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-[#d4a418]/10">
          <div className="w-full flex items-center justify-between gap-4">
            <Logo />
            <h1 className="text-lg font-medium">Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Metrics Grid */}
          <KeyMetrics metrics={mockMetrics} />

          {/* Main Charts and Table Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User Growth Chart */}
            <div className="bg-[#867555]/10 rounded-xl p-4 border border-[#d4a418]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">User Growth</h3>
                <select className="bg-[#867555]/20 text-sm rounded-lg px-2 py-1 border border-[#d4a418]/20">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <div className="h-[300px] centered">
                <UserGrowthChart data={mockUserGrowthData} />
              </div>
            </div>

            {/* Revenue Distribution */}
            <div className="bg-[#867555]/10 rounded-xl p-4 border border-[#d4a418]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Revenue Distribution</h3>
                <select className="bg-[#867555]/20 text-sm rounded-lg px-2 py-1 border border-[#d4a418]/20">
                  <option>This Year</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-[300px] centered">
                <RevenueDistribution data={mockRevenueData} />
              </div>
            </div>

            {/* Top Songs Chart */}
            <div className="bg-[#867555]/10 rounded-xl p-4 border border-[#d4a418]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Top Songs</h3>
                <select className="bg-[#867555]/20 text-sm rounded-lg px-2 py-1 border border-[#d4a418]/20">
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="h-[300px] centered">
                <TopSongsChart data={mockTopSongsData} />
              </div>
            </div>

            {/* Streams Table */}
            <div className="bg-[#867555]/10 rounded-xl p-4 border border-[#d4a418]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Recent Streams</h3>
                <select className="bg-[#867555]/20 text-sm rounded-lg px-2 py-1 border border-[#d4a418]/20">
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
              <div className="h-[300px] overflow-auto centered">
                <StreamsTable data={mockStreams} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </DataProvider>
  );
};

export default Dashboard;
