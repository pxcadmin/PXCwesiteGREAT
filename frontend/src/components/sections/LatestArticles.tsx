import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";

export function LatestArticles() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latest = (posts ?? [])
    .slice()
    .sort((a, b) => {
      const da = new Date(a.publishedDate).getTime();
      const db = new Date(b.publishedDate).getTime();
      return db - da;
    })
    .slice(0, 3);

  return (
    <section className="py-20 bg-black border-t border-white/10" data-testid="section-latest-articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#47d8ff] font-bold mb-2">
              From the PXC Insights Blog
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Latest <span className="text-[#FB0000]">Field Notes</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-[#47d8ff] text-[#47d8ff] hover:bg-[#47d8ff]/10 self-start sm:self-end"
            asChild
            data-testid="button-all-articles"
          >
            <Link href="/blog">
              All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border-white/10 flex flex-col"
                  data-testid={`latest-skeleton-${i}`}
                >
                  <CardHeader>
                    <Skeleton className="h-6 w-24 mb-2 bg-white/10" />
                    <Skeleton className="h-6 w-full bg-white/10" />
                    <Skeleton className="h-6 w-3/4 bg-white/10" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-3">
                    <Skeleton className="h-4 w-full bg-white/10" />
                    <Skeleton className="h-4 w-5/6 bg-white/10" />
                    <Skeleton className="h-4 w-2/3 bg-white/10" />
                  </CardContent>
                </Card>
              ))
            : latest.map((post) => (
                <Card
                  key={post.slug}
                  className="pxc-card-lift bg-white/5 border-white/10 flex flex-col"
                  data-testid={`latest-card-${post.slug}`}
                >
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-[#47d8ff] text-black hover:bg-[#47d8ff]">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-white text-lg leading-snug line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-[#AEA1EA] mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(post.publishedDate), "MMM d, yyyy")}
                      </span>
                      <span className="text-white/40">{post.author}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="self-start text-[#47d8ff] hover:text-[#47d8ff] hover:bg-[#47d8ff]/10 px-2"
                      asChild
                      data-testid={`button-read-${post.slug}`}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
