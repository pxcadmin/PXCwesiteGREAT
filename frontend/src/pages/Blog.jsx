import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { blogPosts } from '../mock';
import { Calendar, Clock, ArrowRight, Search, TrendingUp, Sparkles, BookOpen, User } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Featured posts (top 3)
  const featuredPosts = blogPosts.slice(0, 3);
  
  // All posts
  const allPosts = blogPosts;

  // Categories
  const categories = ['All', 'AI Integration', 'Leadership', 'Patient Experience', 'Practice Management', 'Staff Development'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadPost = (slug) => {
    // Placeholder for blog post navigation
    alert(`Navigate to blog post: ${slug}\n\nYou can integrate this with GoHighLevel blog URLs or create individual post pages.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#B2EBF9]/20 via-white to-[#AEA1EA]/15 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#AEA1EA]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B2EBF9]/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Expert Insights & Thought Leadership</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            PXC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Knowledge Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Actionable strategies, AI insights, and proven frameworks to transform your medical practice
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-[#B2EBF9]/30 focus:border-[#AEA1EA] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-[#FB2C15]" />
            <h2 className="text-4xl font-bold">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Articles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Main Featured Post */}
            <Card className="lg:row-span-2 border-2 border-[#AEA1EA]/30 hover:border-[#AEA1EA] hover:shadow-2xl transition-all group cursor-pointer">
              <div className="relative h-96 overflow-hidden rounded-t-lg">
                <img 
                  src={featuredPosts[0].image} 
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {featuredPosts[0].category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{featuredPosts[0].title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">{featuredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#AEA1EA]" />
                    <span className="text-sm text-gray-600">{featuredPosts[0].author}</span>
                  </div>
                  <Button 
                    onClick={() => handleReadPost(featuredPosts[0].slug)}
                    className="bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full px-6"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Featured Posts */}
            <div className="space-y-8">
              {featuredPosts.slice(1, 3).map((post, index) => (
                <Card key={index} className="border-2 border-[#B2EBF9]/30 hover:border-[#B2EBF9] hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-[#B2EBF9] to-[#AEA1EA] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-[#AEA1EA] transition-colors">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <Button 
                        onClick={() => handleReadPost(post.slug)}
                        variant="ghost" 
                        className="text-[#B2EBF9] hover:text-[#AEA1EA] p-0 h-auto font-semibold text-sm"
                      >
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#B2EBF9]/10 to-[#AEA1EA]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-[#B2EBF9]/30 hover:border-[#AEA1EA] hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-[#AEA1EA]" />
            <h2 className="text-4xl font-bold">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Articles</span>
            </h2>
            <span className="text-gray-500 text-lg ml-2">({filteredPosts.length})</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-2 border-gray-200 hover:border-[#AEA1EA] hover:shadow-xl transition-all group cursor-pointer">
                  <div className="relative h-56 overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#AEA1EA] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#B2EBF9]" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Button 
                        onClick={() => handleReadPost(post.slug)}
                        variant="ghost" 
                        className="text-[#AEA1EA] hover:text-[#B2EBF9] p-0 h-auto font-semibold"
                      >
                        Read <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA] via-[#B2EBF9] to-[#AEA1EA] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss an Insight
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to get the latest strategies, case studies, and AI insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-6 text-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 rounded-full focus:border-white"
            />
            <Button 
              className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold px-8 py-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">Join 500+ practice leaders getting weekly insights</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
