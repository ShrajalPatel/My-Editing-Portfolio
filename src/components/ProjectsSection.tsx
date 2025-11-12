import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 🎥 Import 10 unique videos for Reels & Anime categories
import reel1 from "@/assets/reels/R1.mp4";
import reel2 from "@/assets/reels/R2.mp4";
import reel3 from "@/assets/reels/R3.mp4";
import reel4 from "@/assets/reels/R4.mp4";
import reel5 from "@/assets/reels/R5.mp4";
import reel6 from "@/assets/reels/R6.mp4";
import reel7 from "@/assets/reels/R7.mp4";
import reel8 from "@/assets/reels/R8.mp4";
import reel9 from "@/assets/reels/R8.mp4";
import reel10 from "@/assets/reels/R8.mp4";

import anime1 from "@/assets/anime/A-Maria.mp4";
import anime2 from "@/assets/anime/A-Saitama.mp4";
import anime3 from "@/assets/anime/A-Tanjiro.mp4";
import anime4 from "@/assets/anime/A-Obanai.mp4";
import anime5 from "@/assets/anime/A-Luffy.mp4";
import anime6 from "@/assets/anime/A-Kitagawa.mp4";
import anime7 from "@/assets/anime/A-Zoroo.mp4";
import anime8 from "@/assets/anime/A-Marshal.mp4";
import anime9 from "@/assets/anime/A-Sanji.mp4";
import anime10 from "@/assets/anime/A-Zoro.mp4";

// 🖼 Import 10 unique images for Photo, Banner, Thumbnail
import photo1 from "@/assets/photos/photo1.jpg";
import photo2 from "@/assets/photos/photo2.jpg";
import photo3 from "@/assets/photos/photo3.jpg";
import photo4 from "@/assets/photos/photo4.jpg";
import photo5 from "@/assets/photos/photo5.jpg";
import photo6 from "@/assets/photos/photo6.jpg";
import photo7 from "@/assets/photos/photo7.jpg";
import photo8 from "@/assets/photos/photo8.jpg";
import photo9 from "@/assets/photos/photo9.jpg";
import photo10 from "@/assets/photos/photo10.jpg";

import banner1 from "@/assets/banners/banner1.jpg";
import banner2 from "@/assets/banners/banner2.jpg";
import banner3 from "@/assets/banners/banner3.jpg";
import banner4 from "@/assets/banners/banner4.jpg";
import banner5 from "@/assets/banners/banner5.jpg";
import banner6 from "@/assets/banners/banner6.jpg";
import banner7 from "@/assets/banners/banner7.jpg";
import banner8 from "@/assets/banners/banner8.jpg";
import banner9 from "@/assets/banners/banner9.jpg";
import banner10 from "@/assets/banners/banner10.jpg";

import thumb1 from "@/assets/thumbs/T1.jpg";
import thumb2 from "@/assets/thumbs/T2.jpg";
import thumb3 from "@/assets/thumbs/T3.jpg";
import thumb4 from "@/assets/thumbs/T4.jpg";
import thumb5 from "@/assets/thumbs/T5.jpg";
import thumb6 from "@/assets/thumbs/T6.jpg";
import thumb7 from "@/assets/thumbs/T7.jpg";
import thumb8 from "@/assets/thumbs/T8.jpg";
import thumb9 from "@/assets/thumbs/T9.jpg";
import thumb10 from "@/assets/thumbs/T10.jpg";

const projects = [
  {
    category: "Reel Edits",
    media: [reel1, reel2, reel3, reel4, reel5, reel6, reel7, reel8, reel9, reel10],
    type: "video",
    items: [
      { title: "01", views: "1.2M" },
      { title: "02", views: "850K" },
      { title: "03", views: "920K" },
      { title: "04", views: "1.5M" },
      { title: "05", views: "680K" },
      { title: "06", views: "790K" },
      { title: "07", views: "2.3M" },
      { title: "08", views: "540K" },
      { title: "09", views: "410K" },
      { title: "10", views: "950K" },
    ],
  },
  {
    category: "Anime Edits",
    media: [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9, anime10],
    type: "video",
    items: [
      { title: "01", views: "1.2M" },
      { title: "02", views: "850K" },
      { title: "03", views: "920K" },
      { title: "04", views: "1.5M" },
      { title: "05", views: "680K" },
      { title: "06", views: "790K" },
      { title: "07", views: "2.3M" },
      { title: "08", views: "540K" },
      { title: "09", views: "410K" },
      { title: "10", views: "950K" },
    ],
  },
  {
    category: "Photo Edits",
    media: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10],
    type: "image",
    items: [
      { title: "01", views: "1.2M" },
      { title: "02", views: "850K" },
      { title: "03", views: "920K" },
      { title: "04", views: "1.5M" },
      { title: "05", views: "680K" },
      { title: "06", views: "790K" },
      { title: "07", views: "2.3M" },
      { title: "08", views: "540K" },
      { title: "09", views: "410K" },
      { title: "10", views: "950K" },
    ],
  },
  {
    category: "Banners",
    media: [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10],
    type: "image",
    items: [
      { title: "01", views: "1.2M" },
      { title: "02", views: "850K" },
      { title: "03", views: "920K" },
      { title: "04", views: "1.5M" },
      { title: "05", views: "680K" },
      { title: "06", views: "790K" },
      { title: "07", views: "2.3M" },
      { title: "08", views: "540K" },
      { title: "09", views: "410K" },
      { title: "10", views: "950K" },
    ],
  },
  {
    category: "Thumbnails",
    media: [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9, thumb10],
    type: "image",
    items: [
      { title: "01", views: "1.2M" },
      { title: "02", views: "850K" },
      { title: "03", views: "920K" },
      { title: "04", views: "1.5M" },
      { title: "05", views: "680K" },
      { title: "06", views: "790K" },
      { title: "07", views: "2.3M" },
      { title: "08", views: "540K" },
      { title: "09", views: "410K" },
      { title: "10", views: "950K" },
    ],
  },
] as const;

// 🧩 Card Component that handles both video & image
const ProjectCard = ({
  item,
  media,
  type = "image",
}: {
  item: { title: string; views: string };
  media: string;
  type?: "video" | "image";
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="glass rounded-lg overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          {type === "video" ? (
            <video
              src={media}
              controls
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={media}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
        <div className="p-4 space-y-2">
          <h4 className="font-semibold text-foreground truncate">{item.title}</h4>
          <p className="text-sm text-primary">{item.views} views</p>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({
  category,
  index,
}: {
  category: (typeof projects)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-6"
    >
      {/* Category Heading */}
      <h3 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
        {category.category}
      </h3>

      {/* Carousel */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {category.items.map((item, idx) => (
            <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <ProjectCard
                item={item}
                media={category.media[idx]}
                type={category.type}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12 glass border-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-none transition-shadow duration-300" />
        <CarouselNext className="-right-12 glass border-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-none transition-shadow duration-300" />
      </Carousel>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">My Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest creative work across different categories
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((category, index) => (
            <CategorySection key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
