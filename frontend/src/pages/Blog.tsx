import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "wouter";
import { useSEO, breadcrumbJsonLd } from "@/lib/useSEO";
import { AnswerCapsule } from "@/components/effects/AnswerCapsule";
import { BeamCard } from "@/components/effects/BeamCard";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const samplePosts = [
  {
    id: "1",
    title: "The Hidden Cost of Staff Turnover in Medical Practices",
    slug: "hidden-cost-staff-turnover",
    excerpt: "Staff turnover costs medical practices far more than just recruitment expenses. Discover the true impact on patient care, team morale, and your bottom line.",
    category: "Staff Management",
    author: "Jennifer Radu",
    publishedDate: new Date("2024-01-15"),
    featured: true,
    featuredImage: null,
  },
  {
    id: "2",
    title: "5 AI Tools That Are Transforming Patient Experience",
    slug: "ai-tools-patient-experience",
    excerpt: "From intelligent scheduling to personalized communication, these AI-powered tools are helping practices deliver exceptional patient experiences.",
    category: "Technology",
    author: "Jennifer Radu",
    publishedDate: new Date("2024-01-10"),
    featured: false,
    featuredImage: null,
  },
  {
    id: "3",
    title: "Why Your Patient Satisfaction Scores Aren't Improving",
    slug: "patient-satisfaction-scores",
    excerpt: "You've tried everything, but your scores remain flat. Here's what you're missing about the real drivers of patient satisfaction.",
    category: "Patient Experience",
    author: "Jennifer Radu",
    publishedDate: new Date("2024-01-05"),
    featured: false,
    featuredImage: null,
  },
  {
    id: "4",
    title: "The Puzzle Pyramid Approach to Practice Transformation",
    slug: "puzzle-pyramid-approach",
    excerpt: "Learn how our proprietary Engage-Educate-Excel methodology creates lasting change in medical practices.",
    category: "PXC Insights",
    author: "Jennifer Radu",
    publishedDate: new Date("2023-12-28"),
    featured: false,
    featuredImage: null,
  },
  {
    id: "5",
    title: "Building a Culture of Engagement: A Healthcare Leader's Guide",
    slug: "building-culture-engagement",
    excerpt: "Engaged staff deliver better patient care. Here's your roadmap to creating a workplace where everyone thrives.",
    category: "Leadership",
    author: "Jennifer Radu",
    publishedDate: new Date("2023-12-20"),
    featured: false,
    featuredImage: null,
  },
  {
    id: "6",
    title: "How to Reduce No-Shows Without Annoying Your Patients",
    slug: "reduce-no-shows",
    excerpt: "No-shows drain revenue and disrupt schedules. Discover proven strategies that work without frustrating your patients.",
    category: "Operations",
    author: "Jennifer Radu",
    publishedDate: new Date("2023-12-15"),
    featured: false,
    featuredImage: null,
  },
];

const categories = ["All", "Patient Experience", "Staff Management", "Leadership", "Technology", "Operations", "PXC Insights"];

export default function Blog() {
  useSEO({
    title: "PXC Insights Blog | Medical Practice Transformation, AI Integration & Patient Experience",
    description: "Expert insights from Jennifer Radu, fCAIOX — staff retention, AI tools for medical practices, leadership development, and patient experience strategies that actually work in real Florida medical practices.",
    path: "/blog",
    keywords: "medical practice blog, patient experience insights, AI healthcare blog, staff retention strategies, medical practice management tips, healthcare leadership articles, Jennifer Radu blog",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section - BLACK background */}
      <section className="relative py-20 bg-black overflow-hidden">
        <AuroraBackdrop opacity={0.1} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 justify-center flex"
            items={[{ label: "Blog", href: "/blog" }]}
          />
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              PXC <span className="text-[#47d8ff]">Insights</span>
            </h1>
            <p className="text-xl text-[#AEA1EA] mb-8 max-w-3xl mx-auto">
              Expert guidance on patient experience, practice management, and healthcare transformation from the team at Patient eXperience Consulting.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <AnswerCapsule
              jsonLdId="blog-aeo"
              question="What are the most effective patient experience strategies for independent medical practices in 2026?"
              answer="The most effective 2026 patient experience strategies for independent medical practices combine AI-powered automation (smart scheduling, intelligent triage, no-show recovery) with human-centered staff retention frameworks and leadership development. The PXC Insights blog — written by Jennifer Radu, fCAIOX — publishes field-tested playbooks covering staff retention, AI tools for medical practices, leadership development, no-show recovery, and patient satisfaction strategies that have actually worked inside Florida medical practices over 21+ years. Every article is written for independent and small-to-mid-size practices, not hospital systems."
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Category Filter - WHITE background */}
      <section className="py-8 bg-white border-b border-[#AEA1EA]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All"
                  ? "cta-bounce bg-[#FB0000] text-white font-black"
                  : "border-[#AEA1EA]/40 text-black font-semibold"
                }
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - WHITE background */}
      {samplePosts.find(p => p.featured) && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Badge className="mb-2 bg-[#FB0000] text-white">Featured Article</Badge>
            </div>
            <BeamCard cyan>
              <Card className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#AEA1EA]/10 rounded-l-lg flex items-center justify-center p-12">
                    <div className="w-20 h-20 rounded-2xl bg-[#FB0000]/15 border border-[#FB0000]/30 flex items-center justify-center">
                      <User className="h-10 w-10 text-[#FB0000]" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-2 bg-[#47d8ff] text-black">{samplePosts[0].category}</Badge>
                    <h2 className="text-3xl font-bold mb-4 text-white">{samplePosts[0].title}</h2>
                    <p className="text-white/70 mb-6">{samplePosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-6 flex-wrap">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{samplePosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{samplePosts[0].publishedDate.toLocaleDateString()}</span>
                      </div>
                    </div>
                    <MagneticButton>
                      <Button
                        size="lg"
                        className="w-fit cta-bounce bg-[#FB0000] text-white font-black"
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                        asChild
                        data-testid="button-read-featured"
                      >
                        <Link href={`/blog/${samplePosts[0].slug}`}>
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </Card>
            </BeamCard>
          </div>
        </section>
      )}

      <SectionDivider color="#AEA1EA" />

      {/* Blog Grid - BLACK background */}
      <section className="py-12 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts.filter(p => !p.featured).map((post) => (
              <BeamCard key={post.id} cyan className="h-full">
                <Card
                  className="bg-black border border-[#AEA1EA]/20 card-glow-lilac hover-elevate transition-all duration-300 flex flex-col h-full"
                  data-testid={`card-post-${post.id}`}
                >
                  <div className="bg-[#AEA1EA]/10 border-b border-[#AEA1EA]/20 h-48 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#FB0000]/15 border border-[#FB0000]/30 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-[#FB0000]" />
                    </div>
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-[#47d8ff] text-black">{post.category}</Badge>
                    <CardTitle className="line-clamp-2 text-white">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-[#AEA1EA]">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-4 text-sm text-[#AEA1EA] flex-wrap">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.publishedDate.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full cta-bounce-lilac border-white bg-[#AEA1EA]/20 text-white font-black"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                      asChild
                      data-testid={`button-read-${post.id}`}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </BeamCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#FB0000" />

      {/* Newsletter CTA - WHITE background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">
            Stay <span className="text-[#FB0000]">Informed</span>
          </h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
            Get the latest insights on patient experience and practice transformation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-[#AEA1EA]/40 bg-white px-3 py-2 text-sm text-black placeholder:text-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB0000] focus-visible:ring-offset-2"
              data-testid="input-newsletter-email"
            />
            <MagneticButton>
              <Button
                size="lg"
                className="whitespace-nowrap cta-bounce bg-[#FB0000] text-white font-black"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
