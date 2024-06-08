import React, { useState } from 'react';
import { createShortUrl } from '../services/urlService';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createShortUrl(originalUrl);
      setShortUrl(response.data.shortUrl);
      setMessage('Short URL created successfully');
    } catch (error) {
      setMessage('Failed to create short URL');
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Original URL"
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UrlShortener;
