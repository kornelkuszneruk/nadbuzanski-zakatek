import FadeIn from "./FadeIn";

type VideoItem = {
  id: string;
  title: string;
  short?: boolean; // true = Shorts (9:16), false/undefined = normalny (16:9)
};

const videos: VideoItem[] = [
  { id: "nkJHUrTG5FE", title: "Zakątek 8 sierpnia 2026" },
  { id: "bYT7jUI352E", title: "Zakątek — Short 3", short: true },
  { id: "a5ct71XUE_k", title: "Zakątek — Short", short: true },
  { id: "wqiVkctHyI4", title: "Zakątek — Short 2", short: true },
];

export default function Videos() {
  const regular = videos.filter((v) => !v.short);
  const shorts = videos.filter((v) => v.short);

  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Wideo
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Zobacz nas <em className="italic text-sage">w akcji</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4 max-w-lg mx-auto">
              Filmy z życia Nadbużańskiego Zakątka — przyroda, atmosfera i chwile relaksu
            </p>
          </div>
        </FadeIn>

        {/* Normalne filmy 16:9 */}
        {regular.length > 0 && (
          <FadeIn delay={80}>
            <div className={`grid gap-6 ${regular.length === 1 ? "max-w-3xl mx-auto" : "sm:grid-cols-2"}`}>
              {regular.map((v) => (
                <div key={v.id} className="rounded-2xl overflow-hidden shadow-lg bg-forest">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Shorts 9:16 */}
        {shorts.length > 0 && (
          <FadeIn delay={100}>
            {regular.length > 0 && (
              <div className="flex items-center gap-4 mt-12 mb-6">
                <span className="text-forest font-medium text-sm tracking-wide">Shorts</span>
                <div className="flex-1 h-px bg-linen" />
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-6">
              {shorts.map((v) => (
                <div key={v.id} className="rounded-2xl overflow-hidden shadow-lg bg-forest w-64 flex-shrink-0">
                  <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
