import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import servicesHero from "@/assets/services-hero.jpg";

// 2BHK Imports
import b2_1 from "@/assets/2BHK-projects/2 BHK Project/1.jpg";
import b2_2 from "@/assets/2BHK-projects/2 BHK Project/2.jpg";
import b2_3 from "@/assets/2BHK-projects/2 BHK Project/3.jpg";
import b2_4 from "@/assets/2BHK-projects/2 BHK Project/4.jpg";
import b2_5 from "@/assets/2BHK-projects/2 BHK Project/5.jpg";
import b2_6 from "@/assets/2BHK-projects/2 BHK Project/6.jpg";

// 3BHK Imports
import b3_1 from "@/assets/3BHK-projects/3BHK Project/1.jpg";
import b3_2 from "@/assets/3BHK-projects/3BHK Project/2.jpg";
import b3_3 from "@/assets/3BHK-projects/3BHK Project/3.jpg";
import b3_4 from "@/assets/3BHK-projects/3BHK Project/4.jpg";
import b3_5 from "@/assets/3BHK-projects/3BHK Project/5.jpg";
import b3_6 from "@/assets/3BHK-projects/3BHK Project/6.jpg";

// Boutique Imports
import bt_1 from "@/assets/botique/Boutique Vij/1.jpg";
import bt_2 from "@/assets/botique/Boutique Vij/2.jpg";
import bt_3 from "@/assets/botique/Boutique Vij/3.jpg";
import bt_4 from "@/assets/botique/Boutique Vij/4.jpg";
import bt_5 from "@/assets/botique/Boutique Vij/5.jpg";
import bt_6 from "@/assets/botique/Boutique Vij/6.jpg";
import bt_7 from "@/assets/botique/Boutique Vij/7.jpg";
import bt_8 from "@/assets/botique/Boutique Vij/8.jpg";
import btw_1 from "@/assets/botique/Boutique Vij/Working1.jpg";
import btw_2 from "@/assets/botique/Boutique Vij/Working2.jpg";
import btw_3 from "@/assets/botique/Boutique Vij/Working3.jpg";
import btw_4 from "@/assets/botique/Boutique Vij/Working4.jpg";
import btw_5 from "@/assets/botique/Boutique Vij/Working5.jpg";

// Guntur 3BHK
import gt_1 from "@/assets/guntur-3BHK/Guntur3BHK/1.jpg";
import gt_2 from "@/assets/guntur-3BHK/Guntur3BHK/2.jpg";
import gt_3 from "@/assets/guntur-3BHK/Guntur3BHK/3.jpg";
import gt_4 from "@/assets/guntur-3BHK/Guntur3BHK/4.jpg";
import gt_5 from "@/assets/guntur-3BHK/Guntur3BHK/5.jpg";
import gt_6 from "@/assets/guntur-3BHK/Guntur3BHK/6.jpg";
import gt_7 from "@/assets/guntur-3BHK/Guntur3BHK/7.jpg";
import gt_8 from "@/assets/guntur-3BHK/Guntur3BHK/8.jpg";
import gt_9 from "@/assets/guntur-3BHK/Guntur3BHK/9.jpg";
import gt_10 from "@/assets/guntur-3BHK/Guntur3BHK/10.jpg";
import gt_11 from "@/assets/guntur-3BHK/Guntur3BHK/11.jpg";
import gt_12 from "@/assets/guntur-3BHK/Guntur3BHK/12.jpg";

// Honer Homes
import hh_1 from "@/assets/honer-homes/HonerHomes-Aquantis/1.jpeg";
import hh_2 from "@/assets/honer-homes/HonerHomes-Aquantis/2.jpeg";
import hh_3 from "@/assets/honer-homes/HonerHomes-Aquantis/3.jpeg";
import hh_4 from "@/assets/honer-homes/HonerHomes-Aquantis/4.jpeg";
import hh_5 from "@/assets/honer-homes/HonerHomes-Aquantis/5.jpeg";
import hh_6 from "@/assets/honer-homes/HonerHomes-Aquantis/6.jpeg";
import hh_7 from "@/assets/honer-homes/HonerHomes-Aquantis/7.jpeg";
import hh_8 from "@/assets/honer-homes/HonerHomes-Aquantis/8.jpeg";
import hh_9 from "@/assets/honer-homes/HonerHomes-Aquantis/9.jpeg";
import hh_10 from "@/assets/honer-homes/HonerHomes-Aquantis/10.jpeg";
import hh_11 from "@/assets/honer-homes/HonerHomes-Aquantis/11.jpeg";
import hh_12 from "@/assets/honer-homes/HonerHomes-Aquantis/12.jpeg";
import hh_13 from "@/assets/honer-homes/HonerHomes-Aquantis/13.jpeg";
import hh_14 from "@/assets/honer-homes/HonerHomes-Aquantis/14.jpeg";
import hh_15 from "@/assets/honer-homes/HonerHomes-Aquantis/15.jpeg";
import hh_16 from "@/assets/honer-homes/HonerHomes-Aquantis/16.jpeg";

// Jewellery Office
import jo_1 from "@/assets/jewellery-office/JewelleryOffice-Eluru/1.jpg";
import jo_2 from "@/assets/jewellery-office/JewelleryOffice-Eluru/2.jpg";
import jo_3 from "@/assets/jewellery-office/JewelleryOffice-Eluru/3.jpg";
import jo_4 from "@/assets/jewellery-office/JewelleryOffice-Eluru/4.jpg";
import jo_5 from "@/assets/jewellery-office/JewelleryOffice-Eluru/5.jpg";

// NSL East County
import nsl_1 from "@/assets/NSL-east-Country/NSLEastCounty/1.jpeg";
import nsl_2 from "@/assets/NSL-east-Country/NSLEastCounty/2.jpeg";
import nsl_3 from "@/assets/NSL-east-Country/NSLEastCounty/3.jpeg";
import nsl_4 from "@/assets/NSL-east-Country/NSLEastCounty/4.jpeg";
import nsl_5 from "@/assets/NSL-east-Country/NSLEastCounty/5.jpeg";
import nsl_6 from "@/assets/NSL-east-Country/NSLEastCounty/6.jpeg";
import nsl_7 from "@/assets/NSL-east-Country/NSLEastCounty/7.jpeg";
import nsl_8 from "@/assets/NSL-east-Country/NSLEastCounty/8.jpeg";
import nsl_9 from "@/assets/NSL-east-Country/NSLEastCounty/9.jpeg";
import nsl_10 from "@/assets/NSL-east-Country/NSLEastCounty/10.jpeg";
import nsl_11 from "@/assets/NSL-east-Country/NSLEastCounty/11.jpeg";
import nsl_12 from "@/assets/NSL-east-Country/NSLEastCounty/12.jpeg";
import nsl_13 from "@/assets/NSL-east-Country/NSLEastCounty/13.jpeg";
import nsl_14 from "@/assets/NSL-east-Country/NSLEastCounty/14.jpeg";
import nsl_15 from "@/assets/NSL-east-Country/NSLEastCounty/15.jpeg";
import nsl_16 from "@/assets/NSL-east-Country/NSLEastCounty/16.jpeg";
import nsl_17 from "@/assets/NSL-east-Country/NSLEastCounty/17.jpeg";
import nsl_18 from "@/assets/NSL-east-Country/NSLEastCounty/18.jpeg";

// Siliguri
import sl_1 from "@/assets/siliguri/Siliguri-3BHK/1.jpg";
import sl_2 from "@/assets/siliguri/Siliguri-3BHK/2.jpg";
import sl_3 from "@/assets/siliguri/Siliguri-3BHK/3.jpg";
import sl_4 from "@/assets/siliguri/Siliguri-3BHK/4.jpg";
import sl_5 from "@/assets/siliguri/Siliguri-3BHK/5.jpg";
import sl_6 from "@/assets/siliguri/Siliguri-3BHK/6.jpg";
import sl_7 from "@/assets/siliguri/Siliguri-3BHK/7.jpg";
import sl_8 from "@/assets/siliguri/Siliguri-3BHK/8.jpg";
import sl_9 from "@/assets/siliguri/Siliguri-3BHK/9.jpg";
import sl_10 from "@/assets/siliguri/Siliguri-3BHK/10.jpg";
import sl_11 from "@/assets/siliguri/Siliguri-3BHK/11.jpg";
import sl_12 from "@/assets/siliguri/Siliguri-3BHK/12.jpg";
import sl_13 from "@/assets/siliguri/Siliguri-3BHK/13.jpg";
import sl_14 from "@/assets/siliguri/Siliguri-3BHK/14.jpg";
import sl_15 from "@/assets/siliguri/Siliguri-3BHK/15.jpg";
import sl_16 from "@/assets/siliguri/Siliguri-3BHK/16.jpg";
import sl_17 from "@/assets/siliguri/Siliguri-3BHK/17.jpg";
import sl_18 from "@/assets/siliguri/Siliguri-3BHK/18.jpg";
import sl_19 from "@/assets/siliguri/Siliguri-3BHK/19.jpg";
import sl_20 from "@/assets/siliguri/Siliguri-3BHK/20.jpg";

// Sri Adithya Athena
import sa_1 from "@/assets/sri-adithya-athena/SriAdithyaAthena/1.jpeg";
import sa_2 from "@/assets/sri-adithya-athena/SriAdithyaAthena/2.jpeg";
import sa_3 from "@/assets/sri-adithya-athena/SriAdithyaAthena/3.jpeg";
import sa_4 from "@/assets/sri-adithya-athena/SriAdithyaAthena/4.jpeg";
import sa_5 from "@/assets/sri-adithya-athena/SriAdithyaAthena/5.jpeg";
import sa_6 from "@/assets/sri-adithya-athena/SriAdithyaAthena/6.jpeg";
import sa_7 from "@/assets/sri-adithya-athena/SriAdithyaAthena/7.jpeg";
import sa_8 from "@/assets/sri-adithya-athena/SriAdithyaAthena/8.jpeg";
import sa_9 from "@/assets/sri-adithya-athena/SriAdithyaAthena/9.jpeg";
import sa_10 from "@/assets/sri-adithya-athena/SriAdithyaAthena/10.jpeg";
import sa_11 from "@/assets/sri-adithya-athena/SriAdithyaAthena/11.jpeg";
import sa_12 from "@/assets/sri-adithya-athena/SriAdithyaAthena/12.jpeg";
import sa_13 from "@/assets/sri-adithya-athena/SriAdithyaAthena/13.jpeg";
import sa_14 from "@/assets/sri-adithya-athena/SriAdithyaAthena/14.jpeg";
import sa_15 from "@/assets/sri-adithya-athena/SriAdithyaAthena/15.jpeg";
import sa_16 from "@/assets/sri-adithya-athena/SriAdithyaAthena/16.jpeg";
import sa_17 from "@/assets/sri-adithya-athena/SriAdithyaAthena/17.jpeg";
import sa_18 from "@/assets/sri-adithya-athena/SriAdithyaAthena/18.jpeg";
import sa_19 from "@/assets/sri-adithya-athena/SriAdithyaAthena/19.jpeg";
import sa_20 from "@/assets/sri-adithya-athena/SriAdithyaAthena/20.jpeg";
import sa_21 from "@/assets/sri-adithya-athena/SriAdithyaAthena/21.jpeg";
import sa_22 from "@/assets/sri-adithya-athena/SriAdithyaAthena/22.jpeg";
import sa_23 from "@/assets/sri-adithya-athena/SriAdithyaAthena/23.jpeg";

// SRR River
import srr_1 from "@/assets/SRR-River/SRR-River/1.jpeg";
import srr_2 from "@/assets/SRR-River/SRR-River/2.jpeg";
import srr_3 from "@/assets/SRR-River/SRR-River/3.jpeg";
import srr_4 from "@/assets/SRR-River/SRR-River/4.jpeg";
import srr_5 from "@/assets/SRR-River/SRR-River/5.jpeg";
import srr_6 from "@/assets/SRR-River/SRR-River/6.jpeg";
import srr_7 from "@/assets/SRR-River/SRR-River/7.jpeg";
import srr_8 from "@/assets/SRR-River/SRR-River/8.jpeg";
import srr_9 from "@/assets/SRR-River/SRR-River/9.jpeg";
import srr_10 from "@/assets/SRR-River/SRR-River/10.jpeg";
import srr_11 from "@/assets/SRR-River/SRR-River/11.jpeg";
import srr_12 from "@/assets/SRR-River/SRR-River/12.jpeg";
import srr_13 from "@/assets/SRR-River/SRR-River/13.jpeg";
import srr_14 from "@/assets/SRR-River/SRR-River/14.jpeg";
import srr_15 from "@/assets/SRR-River/SRR-River/15.jpeg";
import srr_16 from "@/assets/SRR-River/SRR-River/16.jpeg";

// Tadepalli Villa
import tv_1 from "@/assets/Tadepalli-Villa/TadepalliVilla/1.jpg";
import tv_2 from "@/assets/Tadepalli-Villa/TadepalliVilla/2.jpg";
import tv_3 from "@/assets/Tadepalli-Villa/TadepalliVilla/3.jpg";
import tv_4 from "@/assets/Tadepalli-Villa/TadepalliVilla/4.jpg";
import tv_5 from "@/assets/Tadepalli-Villa/TadepalliVilla/5.jpg";
import tv_6 from "@/assets/Tadepalli-Villa/TadepalliVilla/6.jpg";
import tv_7 from "@/assets/Tadepalli-Villa/TadepalliVilla/7.jpg";

// Villa5 VR Constructions
import v5_1 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/1.jpg";
import v5_2 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/2.jpg";
import v5_3 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/3.jpg";
import v5_4 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/4.jpg";
import v5_5 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/5.jpg";
import v5_6 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/6.jpg";
import v5_7 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/7.jpg";
import v5_8 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/8.jpg";
import v5_9 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/9.jpg";
import v5_10 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/10.jpg";
import v5_11 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/11.jpg";
import v5_12 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/12.jpg";
import v5_13 from "@/assets/Villa5-VR-Constructions/Villa5-VRConstructions/13.jpg";

interface Project {
  id: string;
  title: string;
  serviceId: string;
  featuredImage: string;
  gallery: string[];
}

const serviceCategories = [
  { id: "all", label: "All Projects" },
  { id: "2bhk-projects", label: "2BHK Projects" },
  { id: "3bhk-projects", label: "3BHK Projects" },
  { id: "boutique", label: "Boutique" },
  { id: "guntur-3bhk", label: "Guntur 3BHK" },
  { id: "honer-homes", label: "Honer Homes" },
  { id: "jewellery-office", label: "Jewellery Office" },
  { id: "nsl-east-country", label: "NSL East Country" },
  { id: "siliguri", label: "Siliguri" },
  { id: "sri-adithya-athena", label: "Sri Adithya Athena" },
  { id: "srr-river", label: "SRR River" },
  { id: "tadepalli-villa", label: "Tadepalli Villa" },
  { id: "villa5-vr-constructions", label: "Villa5 VR Constructions" },
];

const projects: Project[] = [
  {
    id: "proj-1",
    title: "2 BHK Residential Project",
    serviceId: "2bhk-projects",
    featuredImage: b2_1,
    gallery: [b2_1, b2_2, b2_3, b2_4, b2_5, b2_6],
  },
  {
    id: "proj-2",
    title: "3 BHK Premium Project",
    serviceId: "3bhk-projects",
    featuredImage: b3_1,
    gallery: [b3_1, b3_2, b3_3, b3_4, b3_5, b3_6],
  },
  {
    id: "proj-3",
    title: "Boutique Vijayawada",
    serviceId: "boutique",
    featuredImage: bt_1,
    gallery: [bt_1, bt_2, bt_3, bt_4, bt_5, bt_6, bt_7, bt_8, btw_1, btw_2, btw_3, btw_4, btw_5],
  },
  {
    id: "proj-4",
    title: "Guntur 3BHK Residence",
    serviceId: "guntur-3bhk",
    featuredImage: gt_1,
    gallery: [gt_1, gt_2, gt_3, gt_4, gt_5, gt_6, gt_7, gt_8, gt_9, gt_10, gt_11, gt_12],
  },
  {
    id: "proj-5",
    title: "Honer Homes Aquantis",
    serviceId: "honer-homes",
    featuredImage: hh_1,
    gallery: [hh_1, hh_2, hh_3, hh_4, hh_5, hh_6, hh_7, hh_8, hh_9, hh_10, hh_11, hh_12, hh_13, hh_14, hh_15, hh_16],
  },
  {
    id: "proj-6",
    title: "Jewellery Office Eluru",
    serviceId: "jewellery-office",
    featuredImage: jo_1,
    gallery: [jo_1, jo_2, jo_3, jo_4, jo_5],
  },
  {
    id: "proj-7",
    title: "NSL East County",
    serviceId: "nsl-east-country",
    featuredImage: nsl_1,
    gallery: [nsl_1, nsl_2, nsl_3, nsl_4, nsl_5, nsl_6, nsl_7, nsl_8, nsl_9, nsl_10, nsl_11, nsl_12, nsl_13, nsl_14, nsl_15, nsl_16, nsl_17, nsl_18],
  },
  {
    id: "proj-8",
    title: "Siliguri 3BHK Project",
    serviceId: "siliguri",
    featuredImage: sl_1,
    gallery: [sl_1, sl_2, sl_3, sl_4, sl_5, sl_6, sl_7, sl_8, sl_9, sl_10, sl_11, sl_12, sl_13, sl_14, sl_15, sl_16, sl_17, sl_18, sl_19, sl_20],
  },
  {
    id: "proj-9",
    title: "Sri Adithya Athena",
    serviceId: "sri-adithya-athena",
    featuredImage: sa_1,
    gallery: [sa_1, sa_2, sa_3, sa_4, sa_5, sa_6, sa_7, sa_8, sa_9, sa_10, sa_11, sa_12, sa_13, sa_14, sa_15, sa_16, sa_17, sa_18, sa_19, sa_20, sa_21, sa_22, sa_23],
  },
  {
    id: "proj-10",
    title: "SRR River View",
    serviceId: "srr-river",
    featuredImage: srr_1,
    gallery: [srr_1, srr_2, srr_3, srr_4, srr_5, srr_6, srr_7, srr_8, srr_9, srr_10, srr_11, srr_12, srr_13, srr_14, srr_15, srr_16],
  },
  {
    id: "proj-11",
    title: "Tadepalli Villa",
    serviceId: "tadepalli-villa",
    featuredImage: tv_1,
    gallery: [tv_1, tv_2, tv_3, tv_4, tv_5, tv_6, tv_7],
  },
  {
    id: "proj-12",
    title: "Villa 5 VR Constructions",
    serviceId: "villa5-vr-constructions",
    featuredImage: v5_1,
    gallery: [v5_1, v5_2, v5_3, v5_4, v5_5, v5_6, v5_7, v5_8, v5_9, v5_10, v5_11, v5_12, v5_13],
  },
];

const PreviousProjects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("service") || "all";
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const filteredProjects = useMemo(
    () => (activeFilter === "all" ? projects : projects.filter((p) => p.serviceId === activeFilter)),
    [activeFilter]
  );

  const setFilter = (id: string) => {
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ service: id });
    }
  };

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const newIndex = (lightbox.index + dir + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, index: newIndex });
  };

  return (
    <div>
      <HeroBanner image={servicesHero} title="Previous Projects" subtitle="Our Portfolio of Excellence" />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 text-xs tracking-luxury uppercase border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project.gallery, 0)}
                >
                  <div className="overflow-hidden border border-primary/10">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="font-heading text-xl text-primary mb-1 group-hover:text-gold-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs tracking-luxury uppercase text-muted-foreground">
                      {serviceCategories.find((c) => c.id === project.serviceId)?.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {project.gallery.length} photos
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground font-accent italic text-lg mt-12">
              No projects found for this category yet. Stay tuned!
            </p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <X size={28} />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                  className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                  className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={lightbox.images[lightbox.index]}
              alt="Project gallery"
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-xs tracking-luxury text-muted-foreground">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreviousProjects;