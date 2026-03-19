import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import servicesHero from "@/assets/services-hero.jpg";

import projectResidential1 from "@/assets/project-residential-1.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import projectTheater1 from "@/assets/project-theater-1.jpg";
import serviceTheater from "@/assets/service-theater.jpg";
import projectKitchen1 from "@/assets/project-kitchen-1.jpg";
import serviceModular from "@/assets/service-modular.jpg";
import serviceTurnkey from "@/assets/service-turnkey.jpg";
import serviceProjectMgmt from "@/assets/service-project-mgmt.jpg";
import serviceExecution from "@/assets/service-execution.jpg";
import serviceFalseCeiling from "@/assets/service-false-ceiling.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceStone from "@/assets/service-stone.jpg";

import residential2 from "@/assets/projects/residential-2.jpg";
import residential3 from "@/assets/projects/residential-3.jpg";
import residential4 from "@/assets/projects/residential-4.jpg";
import residential5 from "@/assets/projects/residential-5.jpg";
import commercial2 from "@/assets/projects/commercial-2.jpg";
import commercial3 from "@/assets/projects/commercial-3.jpg";
import commercial4 from "@/assets/projects/commercial-4.jpg";
import commercial5 from "@/assets/projects/commercial-5.jpg";
import theater2 from "@/assets/projects/theater-2.jpg";
import theater3 from "@/assets/projects/theater-3.jpg";
import theater4 from "@/assets/projects/theater-4.jpg";
import turnkey2 from "@/assets/projects/turnkey-2.jpg";
import turnkey3 from "@/assets/projects/turnkey-3.jpg";
import turnkey4 from "@/assets/projects/turnkey-4.jpg";
import projectMgmt2 from "@/assets/projects/project-mgmt-2.jpg";
import projectMgmt3 from "@/assets/projects/project-mgmt-3.jpg";
import execution2 from "@/assets/projects/execution-2.jpg";
import execution3 from "@/assets/projects/execution-3.jpg";
import ceiling2 from "@/assets/projects/ceiling-2.jpg";
import ceiling3 from "@/assets/projects/ceiling-3.jpg";
import ceiling4 from "@/assets/projects/ceiling-4.jpg";
import modular2 from "@/assets/projects/modular-2.jpg";
import modular3 from "@/assets/projects/modular-3.jpg";
import modular4 from "@/assets/projects/modular-4.jpg";
import painting2 from "@/assets/projects/painting-2.jpg";
import painting3 from "@/assets/projects/painting-3.jpg";
import painting4 from "@/assets/projects/painting-4.jpg";
import stone2 from "@/assets/projects/stone-2.jpg";
import stone3 from "@/assets/projects/stone-3.jpg";
import stone4 from "@/assets/projects/stone-4.jpg";

interface Project {
  id: string;
  title: string;
  serviceId: string;
  featuredImage: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "res-1",
    title: "Modern Villa Living Room",
    serviceId: "residential-interiors",
    featuredImage: projectResidential1,
    gallery: [projectResidential1, serviceResidential, residential2, residential3, residential4, residential5],
  },
  {
    id: "com-1",
    title: "Corporate Office Redesign",
    serviceId: "commercial-interiors",
    featuredImage: projectCommercial1,
    gallery: [projectCommercial1, serviceCommercial, commercial2, commercial3, commercial4, commercial5],
  },
  {
    id: "the-1",
    title: "Private Home Cinema",
    serviceId: "home-theatres",
    featuredImage: projectTheater1,
    gallery: [projectTheater1, serviceTheater, theater2, theater3, theater4],
  },
  {
    id: "tur-1",
    title: "Turnkey Luxury Apartment",
    serviceId: "turnkey-projects",
    featuredImage: serviceTurnkey,
    gallery: [serviceTurnkey, turnkey2, turnkey3, turnkey4, projectResidential1],
  },
  {
    id: "pm-1",
    title: "Multi-Floor Project Coordination",
    serviceId: "project-management",
    featuredImage: serviceProjectMgmt,
    gallery: [serviceProjectMgmt, projectMgmt2, projectMgmt3, serviceExecution, commercial2],
  },
  {
    id: "de-1",
    title: "End-to-End Interior Transformation",
    serviceId: "design-execution",
    featuredImage: serviceExecution,
    gallery: [serviceExecution, execution2, execution3, projectResidential1, residential2],
  },
  {
    id: "fc-1",
    title: "Luxury False Ceiling Installation",
    serviceId: "false-ceilings",
    featuredImage: serviceFalseCeiling,
    gallery: [serviceFalseCeiling, ceiling2, ceiling3, ceiling4, residential3],
  },
  {
    id: "mod-1",
    title: "Modular Kitchen & Wardrobe Suite",
    serviceId: "modular-wardrobes-kitchens",
    featuredImage: projectKitchen1,
    gallery: [projectKitchen1, serviceModular, modular2, modular3, modular4],
  },
  {
    id: "pai-1",
    title: "Custom Wall Art & Painting",
    serviceId: "painting-customisation",
    featuredImage: servicePainting,
    gallery: [servicePainting, painting2, painting3, painting4, residential4],
  },
  {
    id: "sto-1",
    title: "Premium Stone & Tile Work",
    serviceId: "granite-quartz-marble-tiles",
    featuredImage: serviceStone,
    gallery: [serviceStone, stone2, stone3, stone4, residential5],
  },
];

const serviceCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential-interiors", label: "Residential" },
  { id: "commercial-interiors", label: "Commercial" },
  { id: "home-theatres", label: "Home Theatres" },
  { id: "turnkey-projects", label: "Turnkey" },
  { id: "project-management", label: "Project Mgmt" },
  { id: "design-execution", label: "Design & Execution" },
  { id: "false-ceilings", label: "False Ceilings" },
  { id: "modular-wardrobes-kitchens", label: "Modular" },
  { id: "painting-customisation", label: "Painting" },
  { id: "granite-quartz-marble-tiles", label: "Stone & Tiles" },
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
          {/* Filter Tabs */}
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

          {/* Projects Grid */}
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

      {/* Lightbox */}
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
