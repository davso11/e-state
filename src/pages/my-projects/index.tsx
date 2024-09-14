import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/projects";

export const MyProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Projets</h1>
        <p className="desc mt-2 text-sm">
          Vous pouvez consulter ici la liste de vos projets.
        </p>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Mes projets ({PROJECTS.length})
            </h2>
            <div>
              Payé: {PROJECTS.reduce((acc, project) => acc + project.paid, 0)}M
              / {PROJECTS.reduce((acc, project) => acc + project.price, 0)}M
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm"
                onClick={() => navigate(`/my-projects/${project.id}`)}
              >
                <div className="relative h-36 bg-purple-500">
                  <Badge
                    className="absolute right-2 top-2"
                    variant="secondary"
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="p-4 pb-5">
                  <div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{project.name}</h3>
                        <p className="text-sm font-bold text-gray-500">
                          {project.paid}M/{project.price}M
                        </p>
                      </div>
                      <div className="inline-flex items-center text-gray-500">
                        <MapPin size={14} />
                        <p className="ml-0.5 text-xs">
                          {project.commune}, {project.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
