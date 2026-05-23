import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Blog = () => {
  const posts = [
    {
      title: 'Understanding the New Land Laws in Kenya 2024',
      date: 'March 15, 2024',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Corporate Compliance: Key Steps for Kenyan SMEs',
      date: 'Feb 28, 2024',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Intellectual Property Protection for Digital Startups',
      date: 'Jan 20, 2024',
      category: 'IP Law',
      image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-light-grey">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-gold font-bold tracking-widest text-sm uppercase">Legal Insights</span>
          <h2 className="text-3xl lg:text-5xl text-navy mt-4">Knowledge & Expertise</h2>
          <p className="text-gray-500 mt-6 font-sans">
            Stay informed with the latest legal updates, compliance requirements, and industry insights from our experts.
          </p>
        </div>
        <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white rounded-none h-12">
          View All Insights
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-none bg-transparent group cursor-pointer">
              <CardHeader className="p-0 overflow-hidden relative mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {post.category}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs text-gray-400 mb-3 font-sans uppercase tracking-widest">{post.date}</p>
                <h3 className="text-xl text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="flex items-center text-navy font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};