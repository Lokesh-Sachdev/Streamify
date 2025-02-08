import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [metrics, setMetrics] = useState([]);
    const [streams, setStreams] = useState([]);

    // Fetch or set mock data here
    useEffect(() => {
        const mockMetrics = [
            { title: "Total Users", value: "10,000" },
            { title: "Active Users", value: "7,500" },
            { title: "Total Streams", value: "500,000" },
            { title: "Revenue", value: "$250,000" },
            { title: "Top Artist", value: "Artist A" },
        ];

        const mockStreams = [
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

        setMetrics(mockMetrics);
        setStreams(mockStreams);
    }, []);

    return (
        <DataContext.Provider value={{ metrics, streams }}>
            {children}
        </DataContext.Provider>
    );
};
