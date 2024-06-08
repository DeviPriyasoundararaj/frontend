import React from 'react';

const UrlTable = ({ urls }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Original URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr key={url._id}>
            <td>{url.originalUrl}</td>
            <td>{url.shortUrl}</td>
            <td>{url.clickCount}</td>
            <td>{new Date(url.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UrlTable;
