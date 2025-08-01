"use client";

import { api } from '@/convex/_generated/api';
import { useConvexQuery } from '@/hooks/use-convex-query';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import ProjectGrid from './_components/project-grid';
import EmptyState from './_components/empty-state';
import { Separator } from '@/components/ui/separator';
import NewProjectModal from './_components/new-project-modal';

const Dashboard = () => {
  const [showNewProjectModal,setShowNewProjectModal] = useState(false);

  const { data: projects, error, isLoading } = useConvexQuery(api.projects.getUserProjects);
  console.log(projects);

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-10">
        { /* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Projects
            </h1>
            <p className="text-white/70">
              Create and manage your AI-powered image designs. 
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() => setShowNewProjectModal(true)}
            size="lg"
            className="gap-2 cursor-pointer"
          >
            <Plus className="h-5 w-5" />
            New Project
          </Button>
        </div>
        <Separator className="my-4" />

        {/* Projects Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : projects && projects.length  ? (
          <ProjectGrid projects={projects} />
        ) : 
          (<EmptyState onCreateProject={()=> setShowNewProjectModal(true)} />)
        }

        {/* New Project Modal */}
        <NewProjectModal 
          isOpen={showNewProjectModal}
          onClose={() => setShowNewProjectModal(false)}
        />
      </div>
    </div>
  )
}

export default Dashboard;
