import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Blog — Nadbużański Zakątek",
  description: "Najciekawsze miejsca w okolicach Woli Uhruskiej — Jezioro Białe, Green Velo, Dolina Bugu i wiele więcej.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        {/* Hero */}
        <div className="relative pt-36 pb-24 px-6 text-center overflow-hidden min-h-[420px] flex flex-col items-center justify-center">
          <Image
            src="/blog/hero-blog.jpg"
            alt="Wola Uhruska z lotu ptaka"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/70" />
          <div className="relative z-10">
            <span className="text-meadow text-xs font-bold tracking-[0.3em] uppercase">Blog</span>
            <h1 className="font-serif text-cream text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Odkryj <em className="italic text-meadow">okolicę</em>
            </h1>
            <p className="text-cream/70 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              Najciekawsze miejsca, szlaki i atrakcje w sercu Polesia Lubelskiego
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 text-cream/60 hover:text-cream text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Wróć do strony głównej
            </Link>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden bg-cream border border-linen hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-cream/20 backdrop-blur-sm border border-cream/20 px-3 py-1 text-cream text-xs">
                    {post.readTime} czytania
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-forest/40 text-xs mb-2">{formatDate(post.date)}</p>
                  <h2 className="font-serif text-forest text-lg font-semibold leading-snug mb-3 group-hover:text-sage transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-forest/55 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-sage text-sm font-medium flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                    Czytaj więcej
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Link to photo gallery */}
          <Link
            href="/galeria-okolicy"
            className="group mt-10 flex items-center justify-between gap-6 rounded-3xl overflow-hidden bg-pine p-8 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/galeria-okolicy/bug-meandry-z-drona.jpg" alt="Galeria okolicy" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex-1">
              <p className="text-meadow text-xs font-bold tracking-[0.25em] uppercase mb-2">Galeria zdjęć</p>
              <p className="font-serif text-cream text-xl font-semibold leading-snug">Okolica w obiektywie</p>
              <p className="text-cream/50 text-sm mt-1">Zdjęcia z okolic Woli Uhruskiej — rzeka Bug, jeziora, przyroda Polesia</p>
            </div>
            <svg className="w-6 h-6 text-cream/40 group-hover:text-meadow flex-shrink-0 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
