import {
  getNews
} from "../services/newsService";
import BackButton from "../components/BackButton";
function NewsFeed() {

  const news =
    getNews();

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-5xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          📰 Civic News Feed
        </h1>

        <div className="space-y-4">

          {news.length === 0 ? (

            <div className="bg-white/5 p-5 rounded-xl">
              No civic news yet.
            </div>

          ) : (

            news.map((item) => (

              <div
                key={item.id}
                className="bg-white/5 border border-cyan-500/20 rounded-xl p-5"
              >

                <p>
                  {item.message}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.date}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default NewsFeed;