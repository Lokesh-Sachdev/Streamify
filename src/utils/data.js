// Mock data (replace with actual data fetching logic)
export const mockMetrics = [
    { title: "Total Users", value: "10,000" },
    { title: "Active Users", value: "7,500" },
    { title: "Total Streams", value: "500,000" },
    { title: "Revenue", value: "$250,000" },
    { title: "Top Artist", value: "Artist A" },
];

export const mockUserGrowthData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets: [
        {
            label: "Total Users",
            data: [
                5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000,
                15000, 16000,
            ],
            borderColor: "#d4a418",
            backgroundColor: "rgba(212, 164, 24, 0.1)",
            fill: true,
        },
        {
            label: "Active Users",
            data: [
                3000, 4000, 4500, 5000, 6000, 7000, 7500, 8000, 8500, 9000, 9500,
                10000,
            ],
            borderColor: "#ffeeca",
            backgroundColor: "rgba(255, 238, 202, 0.1)",
            fill: true,
        },
    ],
};

export const mockRevenueData = {
    labels: ["Subscriptions", "Ads"],
    datasets: [
        {
            data: [200000, 50000],
            backgroundColor: ["#867555", "#d4a418"],
        },
    ],
};

export const mockTopSongsData = {
    labels: ["Song A", "Song B", "Song C", "Song D", "Song E"],
    datasets: [
        {
            label: "Streams",
            data: [12000, 10000, 8000, 6000, 4000],
            backgroundColor: "#d4a418",
        },
    ],
};

export const mockStreams = [
    {
        songName: "Song A",
        artist: "Artist A",
        dateStreamed: "2023-10-01",
        streamCount: 1200,
        userId: "user1",
    },
    {
        songName: "Song B",
        artist: "Artist B",
        dateStreamed: "2023-10-02",
        streamCount: 1000,
        userId: "user2",
    },
    // Add more mock data here
];