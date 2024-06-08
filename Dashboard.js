import React, { useEffect, useState } from 'react';
import { getUrlCount, getAllUrls } from '../../services/urlService';
import UrlTable from './UrlTable';

const Dashboard = () => {
  const [urlCount, setUrlCount] = useState(0);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlCountResponse = await getUrlCount();
        const urlsResponse = await getAllUrls();
        setUrlCount(urlCountResponse.data.count);
        setUrls(urlsResponse.data.urls);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total URLs created: {urlCount}</p>
      <UrlTable urls={urls} />
    </div>
  );
};

export default Dashboard;
