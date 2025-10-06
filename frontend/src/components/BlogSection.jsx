import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { blogPosts } from '../mock';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  const handleReadMore = (slug) => {
    // Placeholder for blog navigation
    console.log('Navigate to blog post:', slug);
    alert('Blog post page will be created. This will navigate to: /blog/' + slug);
  };

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <BookOpen className="w-16 h-16 text-[#FB2C15] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & <span className="text-[#FB2C15]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with actionable insights on AI integration, patient experience, and practice transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-2 border-gray-200 hover:border-[#FB2C15] transition-all hover:shadow-xl overflow-hidden group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FB2C15] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#FB2C15] transition-colors">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <Button 
                    onClick={() => handleReadMore(post.slug)}
                    variant="ghost" 
                    className="text-[#FB2C15] hover:text-[#d92515] p-0 h-auto font-semibold"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={() => alert('Blog listing page will be created at /blog')}
            variant="outline" 
            className="border-2 border-[#FB2C15] text-[#FB2C15] hover:bg-[#FB2C15] hover:text-white rounded-full px-8 font-semibold"
          >
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
