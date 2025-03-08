
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Play, 
  VideoIcon, 
  FileText, 
  TrendingUp, 
  Building, 
  Clock, 
  Search 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Blog = () => {
  const { translate } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: "blog1",
      title: "Dubai Real Estate Market Update Q2 2023",
      excerpt: "The Dubai real estate market continues to show strong growth in Q2 2023 with property prices increasing by 15% year-over-year.",
      date: "July 15, 2023",
      category: "Market Updates",
      image: "https://images.unsplash.com/photo-1546412414-e1885e51cde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      type: "article"
    },
    {
      id: "blog2",
      title: "Investment Opportunities in Ras Al Khaimah",
      excerpt: "Ras Al Khaimah is emerging as a prime investment destination with new developments and attractive ROI potential.",
      date: "August 3, 2023",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      type: "article"
    },
    {
      id: "blog3",
      title: "Exclusive Tour: Palm Jumeirah Signature Villa",
      excerpt: "Join our property expert for an exclusive video tour of this stunning 6-bedroom villa on Palm Jumeirah.",
      date: "June 22, 2023",
      category: "Property Tours",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      type: "video",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=9371b347e14e2546ea979ef3588fb3c7d90ea4a1&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: "blog4",
      title: "New Golden Visa Regulations For Property Investors",
      excerpt: "Learn about the updated Golden Visa regulations and how property investors can benefit from long-term residency in the UAE.",
      date: "September 5, 2023",
      category: "Legal Updates",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
      type: "article"
    },
    {
      id: "blog5",
      title: "Investment Strategy Webinar: Maximizing ROI in Dubai",
      excerpt: "Watch our recent webinar featuring top investment experts discussing strategies to maximize returns in Dubai's property market.",
      date: "October 12, 2023",
      category: "Webinars",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      type: "video",
      videoUrl: "https://player.vimeo.com/external/449711006.sd.mp4?s=647c4a337305f2010449429a0958c99bc69e97cc&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: "blog6",
      title: "Dubai vs. Abu Dhabi: Investment Comparison 2023",
      excerpt: "A detailed analysis comparing investment opportunities, returns, and growth potential in Dubai and Abu Dhabi for 2023.",
      date: "November 8, 2023",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      type: "article"
    }
  ];

  // Filter blog posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Latest News & Updates")}
          subtitle={translate("Stay informed with the latest real estate trends, market updates, and investment opportunities")}
          videoUrl="https://player.vimeo.com/external/335512272.sd.mp4?s=a07f75f5264eecfb9f08069196253c50c75b6df2&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="relative max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder={translate("Search articles, videos and updates...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("All")}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("Market Updates")}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("Investment")}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("Property Tours")}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("Legal Updates")}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {translate("Videos")}
                </Button>
              </div>
            </div>
            
            {/* Featured Article */}
            {filteredPosts.length > 0 && (
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:col-span-3 h-64 md:h-auto">
                    {filteredPosts[0].type === "video" ? (
                      <div className="relative h-full w-full">
                        <video 
                          className="w-full h-full object-cover" 
                          poster={filteredPosts[0].image}
                          controls
                        >
                          <source src={filteredPosts[0].videoUrl} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <Play className="h-16 w-16 text-white opacity-80" />
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={filteredPosts[0].image} 
                        alt={filteredPosts[0].title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="bg-luxury-navy/10 text-luxury-navy text-xs font-semibold px-3 py-1 rounded-full">
                          {translate(filteredPosts[0].category)}
                        </span>
                        <span className="text-xs text-gray-500 ml-3 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {filteredPosts[0].date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{filteredPosts[0].title}</h2>
                      <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                    </div>
                    <Button asChild className="bg-luxury-gold hover:bg-luxury-gold/90 w-full sm:w-auto">
                      <Link to={`/blog/${filteredPosts[0].id}`}>
                        {filteredPosts[0].type === "video" ? 
                          translate("Watch Video") : 
                          translate("Read Article")} →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Blog Posts Grid */}
            {filteredPosts.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      {post.type === "video" && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <VideoIcon className="h-12 w-12 text-white" />
                        </div>
                      )}
                      {post.type === "article" && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-white text-luxury-navy px-2 py-1 rounded-full text-xs font-medium">
                            <FileText className="h-3 w-3 inline mr-1" />
                            {translate("Article")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-luxury-navy/10 text-luxury-navy text-xs font-semibold px-2 py-1 rounded-full">
                          {translate(post.category)}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 hover:text-luxury-gold transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.id}`}>
                          {post.type === "video" ? 
                            translate("Watch Video") : 
                            translate("Read More")} →
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              searchQuery && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">{translate("No results found")}</h3>
                  <p className="text-gray-600">
                    {translate("Try adjusting your search criteria")}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
