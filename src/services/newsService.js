const NEWS_KEY = "civic_news";

export const getNews = () => {
  return (
    JSON.parse(
      localStorage.getItem(NEWS_KEY)
    ) || []
  );
};

export const addNews = (
  message
) => {

  const news =
    getNews();

  news.unshift({
    id: Date.now(),
    message,
    date:
      new Date().toLocaleString(),
  });

  localStorage.setItem(
    NEWS_KEY,
    JSON.stringify(news)
  );
};