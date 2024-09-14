import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { saveAs } from "file-saver";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { PUBLIC_PROJECTS } from "@/constants/projects";
import plan from "/assets/docs/bouake.pdf";
import { BookingForm } from "@/components/booking-form";
import { useState } from "react";

const ProjectCard = ({
  price,
  location,
  status,
  title,
  thumbnail,
}: (typeof PUBLIC_PROJECTS)[number]) => {
  const [openBookingDialog, setOpenBookingDialog] = useState(false);

  const downloadPlan = () => {
    saveAs(plan, "plan.pdf");
  };

  return (
    <div className="overflow-hidden rounded-xl border shadow shadow-gray-200">
      <div className="relative">
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-0.5">
          <span className="text-sm text-white">{status.label}</span>
        </div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium sm:text-2xl">{title}</h3>
            <div className="inline-flex items-center text-gray-500">
              <MapPin size={14} />
              <span className="ml-0.5 text-sm">{location}</span>
            </div>
          </div>

          <span className="sm:leading-8">{formatCurrency(price)}</span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-4 flex w-full items-center">
          <div>
            {status.value === "available" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    pill
                    size="sm"
                    variant="outline"
                  >
                    Visite Virtuelle
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-md">
                  <DialogHeader>
                    <DialogTitle>Visite virtuelle - {title}</DialogTitle>
                    <DialogDescription>
                      Découvrez le projet en 3D.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="overflow-hidden rounded-lg">
                    <video
                      src="/assets/videos/visite-3d.mp4"
                      muted
                      autoPlay
                      controls
                      loop
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <>
                <Button
                  pill
                  size="sm"
                  variant="outline"
                  onClick={downloadPlan}
                >
                  Plan 2D
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      pill
                      size="sm"
                      variant="outline"
                    >
                      Visite 3D
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-screen-md">
                    <DialogHeader>
                      <DialogTitle>Visite virtuelle - {title}</DialogTitle>
                      <DialogDescription>
                        Découvrez le projet en 3D.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="overflow-hidden rounded-lg">
                      <video
                        src="/assets/videos/visite-3d.mp4"
                        muted
                        autoPlay
                        controls
                        loop
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>

          <Dialog
            open={openBookingDialog}
            onOpenChange={setOpenBookingDialog}
          >
            <DialogTrigger asChild>
              <Button
                pill
                size="sm"
                variant="outline"
                className="ml-auto space-x-2 border-emerald-200 bg-emerald-50 text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <Mail size={16} />
                <span>RDV</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-sm">
              <DialogHeader>
                <DialogTitle>
                  Prendre un rendez-vous pour{" "}
                  <span className="text-primary">{title}</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Contactez-nous pour planifier une visite.
                </DialogDescription>
              </DialogHeader>

              <div className="pt-3">
                <BookingForm onBooked={() => setOpenBookingDialog(false)} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  return (
    <section className="w-full pt-16 md:pt-40">
      <div className="container flex flex-col gap-y-20">
        {/* DESCRIPTION */}
        <div className="mx-auto flex max-w-[42rem] flex-col items-center space-y-8 text-center">
          <h2 className="section-title">Projets</h2>
          <h3 className="text-4xl font-black">
            Nous Concevons des Solutions
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Immobilières d'Excellence
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLIC_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
