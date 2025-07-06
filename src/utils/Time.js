export const getTimeDetails = (timestamp) => {
  const now = new Date();

  const createdAt = new Date(timestamp);
  const secondsAgo = Math.floor((now - createdAt) / 1000);

  if (secondsAgo < 60) return 'just now';
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} m`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} h`;
  if (secondsAgo < 2592000) return `${Math.floor(secondsAgo / 86400)} d`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2592000)} m`;

  return `${Math.floor(secondsAgo / 31536000)} y`;
};
