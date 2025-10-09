import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { digitalProducts } from '../mock';
import { ShoppingCart, Star, CheckCircle, Puzzle, BookOpen, GraduationCap, FileText, Package } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Books', 'Courses', 'Templates', 'Resources'];

  const categoryIcons = {
    'Books': BookOpen,
    'Courses': GraduationCap,
    'Templates': FileText,
    'Resources': Package
  };

  const filteredProducts = selectedCategory === 'All' 
    ? digitalProducts 
    : digitalProducts.filter(p => p.category === selectedCategory);

  const bestsellers = digitalProducts.filter(p => p.bestseller);

  const handleAddToCart = (product) => {
    alert(`Adding to cart: ${product.title}\\n\\nStripe payment integration will be connected through GoHighLevel.\\n\\nPrice: $${product.price.toFixed(2)}`);
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
            <Puzzle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Digital Products & Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Puzzle Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Books, courses, templates, and resources to transform your medical practice—available for instant download
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#AEA1EA]" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#B2EBF9]" />
              <span>Expert-Created Content</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#AEA1EA]" />
              <span>Actionable Resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-6xl">
          {/* Customer Review Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md mb-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FB2C15] text-[#FB2C15]" />)}
              </div>
              <span className="font-bold text-gray-700">4.9/5 from 200+ customers</span>
            </div>
            <p className="text-gray-600 italic">"These resources transformed how we approach patient experience" - Dr. Sarah M.</p>
          </div>

          <div className="flex items-center gap-3 mb-12">
            <Star className="w-8 h-8 text-[#FB2C15]" />
            <h2 className="text-4xl font-bold">
              Bestsellers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">& Top Picks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => {
              const CategoryIcon = categoryIcons[product.category] || Package;
              return (
                <Card key={product.id} className="border-2 border-[#FB2C15]/30 hover:border-[#FB2C15] hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#FB2C15] text-white text-xs font-bold px-3 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  </div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3" />
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-[#AEA1EA] transition-colors">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#AEA1EA] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-3xl font-bold text-[#FB2C15]">${product.price.toFixed(2)}</div>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full px-6 font-bold"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Puzzle;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-[#B2EBF9]/30 hover:border-[#AEA1EA] hover:shadow-md'
                  }`}
                >
                  {category !== 'All' && <Icon className="w-4 h-4" />}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/5 to-[#AEA1EA]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Package className="w-8 h-8 text-[#AEA1EA]" />
            <h2 className="text-4xl font-bold">
              {selectedCategory === 'All' ? 'All' : selectedCategory} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Products</span>
            </h2>
            <span className="text-gray-500 text-lg ml-2">({filteredProducts.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const CategoryIcon = categoryIcons[product.category] || Package;
              return (
                <Card key={product.id} className="border-2 border-gray-200 hover:border-[#AEA1EA] hover:shadow-xl transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3" />
                        {product.category}
                      </span>
                    </div>
                    {product.bestseller && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#FB2C15] text-white text-xs font-bold px-3 py-1 rounded-full">
                          BESTSELLER
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-[#AEA1EA] transition-colors">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>
                    {(product.author || product.instructor) && (
                      <p className="text-xs text-gray-500 mb-3">By {product.author || product.instructor}</p>
                    )}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#B2EBF9] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-2xl font-bold text-[#AEA1EA]">${product.price.toFixed(2)}</div>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] hover:opacity-90 text-white rounded-full px-6 font-medium"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA] via-[#B2EBF9] to-[#AEA1EA] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Puzzle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a complimentary strategy session to get expert advice on which resources are right for your practice
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            size="lg"
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all"
          >
            Book Free Strategy Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
