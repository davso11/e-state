import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants/projects";
import {
  ChevronLeft,
  Download,
  FileText,
  MapPin,
  Rotate3D,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import plan from "/assets/docs/plan.pdf";
import attachments from "/assets/docs/pj.pdf";
import { saveAs } from "file-saver";

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === +id!);
  const navigate = useNavigate();

  const downloadPlan = () => {
    saveAs(plan, "plan.pdf");
  };

  const downloadAttachments = () => {
    saveAs(attachments, "attachments.pdf");
  };

  return (
    <>
      <div className="flex items-center">
        <Button
          pill
          size="icon"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} />
        </Button>
      </div>

      <div>
        <div className="relative mt-6 h-60 rounded-xl bg-purple-500">
          <Badge
            className="absolute right-4 top-4"
            variant="secondary"
          >
            {project?.status}
          </Badge>
        </div>
        <div className="p-5">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold">{project?.name}</h1>
            <span className="font-bold text-gray-500">
              {project?.paid}M/{project?.price}M
            </span>
          </div>

          <div className="mt-2 inline-flex text-gray-400">
            <MapPin size={20} />
            <span className="ml-1">
              {project?.commune}, {project?.city}
            </span>
          </div>

          <p className="mt-6">{project?.longDescription}</p>

          {/* ACTION BUTTONS */}
          <div className="mt-4 flex">
            <Button
              pill
              size="sm"
              variant="outline"
              className="flex items-center space-x-2"
              onClick={downloadPlan}
            >
              <Download size={16} />
              <span>Télécharger le plan</span>
            </Button>

            <div className="ml-auto inline-flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    pill
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <Rotate3D size={16} />
                    <span>Visite virtuelle</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-md">
                  <DialogHeader>
                    <DialogTitle>
                      Visite virtuelle - {project?.name}
                    </DialogTitle>
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

              <Button
                pill
                size="sm"
                variant="outline"
                className="flex items-center space-x-2"
                onClick={downloadAttachments}
              >
                <FileText size={16} />
                <span>Pièces jointes</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
