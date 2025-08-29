// Video asset management system for portfolio projects
// This file contains structured data for all video content

import autoPartsImage from 'figma:asset/434426cee9c39012681a1036a51242fd2e48a8c3.png';

export interface VideoAsset {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  category: string;
  tags: string[];
  featured: boolean;
}

export const videoAssets: VideoAsset[] = [
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description: 'Complete demo of our full-stack e-commerce solution featuring product browsing, advanced search, shopping cart management, secure payment processing with Stripe integration, order tracking, and admin dashboard functionalities.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NTE0Mzg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 45,
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'E-commerce'],
    featured: true
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking Application',
    description: 'Comprehensive mobile banking app demo showcasing biometric authentication, account overview, secure money transfers, bill payments, transaction history, budgeting tools, and push notifications for account activities.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MjI5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 38,
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Biometrics', 'FinTech'],
    featured: true
  },
  {
    id: 'auto-parts-platform',
    title: 'Auto Parts Trading Platform',
    description: 'B2B automotive parts sourcing platform featuring comprehensive parts catalog with VIN lookup, supplier network management, bulk ordering system, quality control processes, global shipping logistics, and supply chain tracking from China manufacturers.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: autoPartsImage,
    duration: 52,
    category: 'import',
    tags: ['B2B Platform', 'Supply Chain', 'Automotive', 'Global Trade'],
    featured: true
  },
  {
    id: 'electronics-import',
    title: 'Electronics Import Business',
    description: 'Complete electronics trading platform showcasing product sourcing from Chinese manufacturers, quality assurance processes, compliance tracking, inventory management, market analysis tools, and global distribution network for consumer electronics and smart devices.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1636614223954-db6a663293ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTMxNjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 41,
    category: 'import',
    tags: ['Electronics', 'Quality Control', 'Global Distribution', 'Tech Products'],
    featured: false
  },
  {
    id: 'fashion-accessories',
    title: 'Fashion Bags & Accessories Import',
    description: 'Fashion accessories import business demo featuring trend analysis, material sourcing, custom branding services, design consultation, quality control processes, and retail distribution network for premium bags, backpacks, and fashion accessories.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1705869213986-cc8dc227fae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWdzJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NTMxNjQ5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 35,
    category: 'import',
    tags: ['Fashion', 'Custom Branding', 'Design', 'Accessories'],
    featured: false
  },
  {
    id: 'luxury-watches',
    title: 'Luxury Watches Import',
    description: 'Premium timepieces trading platform showcasing authentication processes, brand partnership management, after-sales service systems, market research tools, warranty tracking, and distribution network for smart watches and luxury timepieces.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1669623065785-81e84e8e88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaGVzJTIwdGltZXBpZWNlc3hlbnwxfHx8fDE3NTUyMTI0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 43,
    category: 'import',
    tags: ['Luxury Goods', 'Authentication', 'Brand Partnerships', 'Timepieces'],
    featured: false
  },
  {
    id: 'cosmetics-beauty',
    title: 'Cosmetics & Beauty Products',
    description: 'Beauty products import and distribution platform featuring regulatory compliance tracking, private labeling services, brand development support, market entry strategies, and comprehensive supply chain management for cosmetics and lifestyle products.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU1MzE2NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 39,
    category: 'import',
    tags: ['Beauty Products', 'Regulatory Compliance', 'Private Label', 'Brand Development'],
    featured: false
  },
  {
    id: 'medical-equipment',
    title: 'Hospital Equipment Trading',
    description: 'Medical devices and hospital equipment import platform showcasing FDA compliance processes, technical support systems, global healthcare distribution network, equipment certification tracking, and specialized logistics for medical technology.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU1MjI4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 47,
    category: 'import',
    tags: ['Medical Equipment', 'FDA Compliance', 'Healthcare', 'Global Distribution'],
    featured: true
  },
  {
    id: 'smart-parking',
    title: 'Smart Parking Management System',
    description: 'IoT-enabled parking management solution demo featuring real-time space monitoring, automated billing systems, mobile payment integration, analytics dashboard, traffic flow optimization, and comprehensive parking facility management.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1709364531162-6e613646afa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwc3lzdGVtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTUyNDE3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 44,
    category: 'iot',
    tags: ['IoT', 'Smart City', 'Parking Management', 'Mobile Payments'],
    featured: false
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website Development',
    description: 'Modern corporate website development showcasing responsive design principles, CMS integration, SEO optimization techniques, performance analytics, content management workflows, and multi-language support for international business presence.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU1MjE2MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 36,
    category: 'web',
    tags: ['Corporate Website', 'CMS', 'SEO', 'Responsive Design'],
    featured: false
  }
];

// Helper functions for video asset management
export const getVideoByCategory = (category: string): VideoAsset[] => {
  return videoAssets.filter(video => video.category === category);
};

export const getFeaturedVideos = (): VideoAsset[] => {
  return videoAssets.filter(video => video.featured);
};

export const getVideoById = (id: string): VideoAsset | undefined => {
  return videoAssets.find(video => video.id === id);
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Video categories for filtering
export const videoCategories = [
  { id: 'all', label: 'All Projects', count: videoAssets.length },
  { id: 'web', label: 'Web Development', count: getVideoByCategory('web').length },
  { id: 'mobile', label: 'Mobile Apps', count: getVideoByCategory('mobile').length },
  { id: 'import', label: 'Import & Export', count: getVideoByCategory('import').length },
  { id: 'iot', label: 'IoT Solutions', count: getVideoByCategory('iot').length }
];