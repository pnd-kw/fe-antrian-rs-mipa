"use client";

import { useState, useEffect } from "react";
import PusherConnection from "@/components/PusherConnection";
import { QueueData } from "@/model/QueueData";

const GetQueueData: React.FC = () => {
  const [queueData, setQueueData] = useState<QueueData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `http://117.20.62.118:8100/rs-service/rawat/jalan/display?search_column[]=date&search_text[]=2024-05-15`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: QueueData[]) => {
        setQueueData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleQueueUpdate = (data: QueueData[]) => {
    setQueueData(data);
  };

  return (
    <div>
      <h1>Antrian Pasien</h1>
      <ul>
        {queueData.map((item, index) => (
          <li key={index}>
            {item.antrian} - {item.poliklinik} - {item.dokter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetQueueData;
