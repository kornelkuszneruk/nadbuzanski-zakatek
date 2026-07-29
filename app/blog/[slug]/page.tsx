import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog Nadbużański Zakątek`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        {/* Cover image */}
        <div className="relative h-[55vh] min-h-[360px] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/20 to-sand" />
          <div className="absolute bottom-0 left-0 right-0 pb-10 px-6">
            <div className="mx-auto max-w-2xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors duration-200 mb-5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Blog
              </Link>
              <h1 className="font-serif text-cream text-3xl md:text-4xl font-semibold leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-cream/55 text-sm">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime} czytania</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-2xl px-6 py-14">
          <p className="text-forest/65 text-lg leading-relaxed mb-10 font-medium border-l-2 border-sage pl-5">
            {post.excerpt}
          </p>

          <div className="space-y-6">
            {post.sections.map((section, i) => {
              if (section.type === "heading") {
                return (
                  <h2 key={i} className="font-serif text-forest text-2xl font-semibold mt-10 mb-2">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "tip") {
                return (
                  <div key={i} className="rounded-2xl bg-sage/10 border border-sage/20 px-6 py-5">
                    <p className="text-forest/75 text-sm leading-relaxed">
                      <span className="text-sage font-semibold">💡 </span>
                      {section.text}
                    </p>
                  </div>
                );
              }
              if (section.type === "image") {
                return (
                  <figure key={i} className="my-6">
                    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <Image src={section.src} alt={section.alt} fill className="object-cover" />
                    </div>
                    {section.caption && (
                      <figcaption className="text-center text-forest/40 text-xs mt-3 italic">{section.caption}</figcaption>
                    )}
                  </figure>
                );
              }
              return (
                <p key={i} className="text-forest/65 text-base leading-relaxed">
                  {section.text}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-pine text-cream p-8 md:p-10 text-center">
            <p className="font-serif text-2xl font-semibold mb-3">
              Zaplanuj pobyt w sercu Polesia
            </p>
            <p className="text-cream/55 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              Nadbużański Zakątek to idealna baza wypadowa do odkrywania tych wszystkich miejsc
            </p>
            <Link
              href="/#cennik"
              className="inline-block rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-cream tracking-wide transition-all duration-300 hover:bg-fern hover:shadow-lg hover:shadow-sage/30"
            >
              Sprawdź dostępność
            </Link>
          </div>

          {/* Other posts */}
          <div className="mt-14">
            <p className="text-forest/40 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Inne wpisy
            </p>
            <div className="space-y-3">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-cream border border-linen hover:border-sage/30 hover:bg-sand transition-all duration-200 group"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-forest font-medium text-sm group-hover:text-sage transition-colors duration-200 leading-snug">
                        {p.title}
                      </p>
                      <p className="text-forest/40 text-xs mt-1">{p.readTime} czytania</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
