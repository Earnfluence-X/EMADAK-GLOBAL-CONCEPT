import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowUpRight, X, Clock, MessageCircle } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  content: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Why Land Banking is the Smartest Investment in Nigeria",
      excerpt: "Discover why savvy investors are turning to land banking as the most secure and profitable real estate investment strategy in Nigeria's growing economy.",
      author: "Emmanuel Dare Akinlotan",
      date: "June 15, 2025",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      slug: "land-banking-smartest-investment-nigeria",
      content: `
        <p class="text-tertiary leading-relaxed mb-6">
          Land banking has emerged as one of the most secure and profitable investment strategies in Nigeria's rapidly growing real estate market. As the population continues to expand and urbanization accelerates, the demand for land in strategic locations has skyrocketed.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">Why Land Banking Works in Nigeria</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          Nigeria's population is projected to reach over 400 million by 2050, making it one of the most populous countries in the world. This population growth, combined with rapid urbanization, has created an unprecedented demand for land and housing.
        </p>
        <ul class="list-disc list-inside space-y-2 text-tertiary mb-6">
          <li><span class="text-primary font-semibold">Population Growth:</span> Over 2.5% annual growth rate drives housing demand</li>
          <li><span class="text-primary font-semibold">Urban Migration:</span> 50%+ of Nigerians now live in urban areas</li>
          <li><span class="text-primary font-semibold">Infrastructure Development:</span> New airports, roads, and free zones create value</li>
          <li><span class="text-primary font-semibold">Land Scarcity:</span> Prime land is becoming increasingly limited</li>
        </ul>
        <div class="glass-gold p-6 rounded-2xl my-6 border border-[#D4AF37]/20">
          <p class="text-primary italic text-lg font-['Playfair_Display']">
            "Land is the only asset that never depreciates. In Nigeria's growing economy, land banking offers a unique opportunity to build generational wealth."
          </p>
          <p class="text-[#D4AF37] text-sm mt-2">— Emmanuel Dare Akinlotan, The Real Estate Doctor</p>
        </div>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">The Emadak Advantage</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          At Emadak Global Concept, we offer structured land banking investment vehicles that deliver consistent returns:
        </p>
        <ul class="list-disc list-inside space-y-2 text-tertiary mb-6">
          <li><span class="text-primary font-semibold">15% ROI in 6 months</span> — Short-term growth</li>
          <li><span class="text-primary font-semibold">35% ROI in 12 months</span> — Maximum wealth acceleration</li>
          <li><span class="text-primary font-semibold">Co-ownership pools</span> — Diversified portfolio</li>
        </ul>
        <p class="text-tertiary leading-relaxed">
          By leveraging our extensive network and market expertise, we identify high-potential properties in strategic locations across Nigeria, ensuring your investment is both secure and profitable.
        </p>
      `
    },
    {
      id: 2,
      title: "Top 5 Real Estate Trends to Watch in 2025",
      excerpt: "From smart cities to sustainable living, explore the emerging trends that are shaping Nigeria's real estate landscape and where smart money is flowing.",
      author: "Emmanuel Dare Akinlotan",
      date: "May 28, 2025",
      category: "Market Trends",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
      slug: "real-estate-trends-2025",
      content: `
        <p class="text-tertiary leading-relaxed mb-6">
          As Nigeria's real estate market continues to evolve, several key trends are shaping the industry in 2025. From smart city developments to sustainable living, understanding these trends is crucial for making informed investment decisions.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">1. Smart City Developments</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          Lagos and Abuja are leading the way in smart city development, with projects like Lekki Aviation Town and Abuja Smart City incorporating fiber optics, solar lighting, and modern infrastructure.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">2. Sustainable Living</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          Eco-friendly and sustainable housing is becoming increasingly popular. Properties with solar panels, rainwater harvesting, and green spaces command premium prices.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">3. Mixed-Use Developments</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          Developers are moving towards mixed-use developments that combine residential, commercial, and leisure spaces, creating self-contained communities.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">4. Technology Integration</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          PropTech (Property Technology) is transforming the industry with virtual tours, AI-powered property matching, and blockchain for title verification.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">5. Infrastructure-Led Growth</h3>
        <p class="text-tertiary leading-relaxed">
          Areas with major infrastructure projects — like the Lekki-Epe Expressway, new airports, and seaports — are seeing the highest property appreciation rates.
        </p>
      `
    },
    {
      id: 3,
      title: "Landvest Corp: A Case Study in Wealth Creation",
      excerpt: "How Landvest Corp is revolutionizing land banking in Nigeria with innovative investment vehicles that deliver consistent 35% returns for investors.",
      author: "Emmanuel Dare Akinlotan",
      date: "May 10, 2025",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
      slug: "landvest-corp-case-study",
      content: `
        <p class="text-tertiary leading-relaxed mb-6">
          Landvest Corp has emerged as a revolutionary force in Nigeria's real estate investment landscape, demonstrating the power of strategic land banking in creating substantial wealth for investors.
        </p>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">The Landvest Model</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          Landvest Corp's approach combines institutional-grade due diligence with a deep understanding of Nigeria's property market dynamics. Their investment vehicles offer:
        </p>
        <ul class="list-disc list-inside space-y-2 text-tertiary mb-6">
          <li><span class="text-primary font-semibold">35% ROI in 12 months</span> — Industry-leading returns</li>
          <li><span class="text-primary font-semibold">Prime Location Selection</span> — Strategic land acquisition</li>
          <li><span class="text-primary font-semibold">Professional Management</span> — Expert oversight</li>
          <li><span class="text-primary font-semibold">Legal Security</span> — Verified titles and documentation</li>
        </ul>
        <div class="glass-gold p-6 rounded-2xl my-6 border border-[#D4AF37]/20">
          <p class="text-primary font-semibold text-lg">Investment Breakdown</p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="text-center p-4 glass rounded-xl border-white/5">
              <div class="text-3xl font-bold text-[#D4AF37]">35%</div>
              <div class="text-xs text-muted uppercase tracking-widest">12-Month Return</div>
            </div>
            <div class="text-center p-4 glass rounded-xl border-white/5">
              <div class="text-3xl font-bold text-[#D4AF37]">15%</div>
              <div class="text-xs text-muted uppercase tracking-widest">6-Month Return</div>
            </div>
          </div>
        </div>
        <h3 class="text-2xl font-bold text-primary mb-4 font-['Playfair_Display']">Key Takeaways</h3>
        <p class="text-tertiary leading-relaxed mb-4">
          The success of Landvest Corp validates the land banking model as a reliable wealth creation vehicle. Key success factors include:
        </p>
        <ul class="list-disc list-inside space-y-2 text-tertiary">
          <li>Strategic location selection</li>
          <li>Professional due diligence</li>
          <li>Transparent investment structures</li>
          <li>Long-term value creation mindset</li>
        </ul>
      `
    }
  ];

  return (
    <>
      <section id="blog" className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Insights</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">Real Estate <span className="gold-gradient italic">Insights</span></h2>
            <p className="text-tertiary">Expert perspectives on land banking, investment strategies, and market trends from The Real Estate Doctor.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden glass-strong border-[var(--border-color)] card-glow-gold h-full cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-[#050B16] text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[10px] text-muted font-bold uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D4AF37]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#D4AF37]" /> {post.author.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors text-primary">
                    {post.title}
                  </h3>
                  <p className="text-tertiary text-sm mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:gap-3 transition-all">
                    Read Full Article <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-[#D4AF37]/20 p-8 lg:p-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-[#D4AF37] hover:text-navy transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xs text-muted font-bold uppercase tracking-widest">
                  <span className="px-3 py-1 bg-[#D4AF37] text-[#050B16] rounded-full">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" /> {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#D4AF37]" /> {selectedPost.author}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-primary font-['Playfair_Display']">
                  {selectedPost.title}
                </h2>

                <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />

                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                    <User className="text-[#050B16] w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{selectedPost.author}</p>
                    <p className="text-xs text-muted">The Real Estate Doctor</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="#contact" className="btn-gold py-3 px-6 text-sm">
                    <MessageCircle className="w-4 h-4" /> Discuss This Article
                  </a>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="btn-outline-gold py-3 px-6 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;