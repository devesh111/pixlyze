import { useCanvas } from "@/context/context";
import { Crop, Expand, Eye, Maximize2, Palette, Sliders, Text } from "lucide-react";
import CropContent from "./_tools/crop";
import ResizeControls from "./_tools/resize";
import AdjustControls from "./_tools/adjust";
import AIEdit from "./_tools/ai-edit";
import TextControls from "./_tools/text";
import AIExtenderControls from "./_tools/ai-extend";
import BackgroundControls from "./_tools/background-controls";

const TOOL_CONFIGS = {
  resize: {
    title: "Resize",
    icon: Expand,
    description: "Change project dimensions",
    iconColor: "#bb36bb",
  }, 
  crop: {
    title: "Crop",
    icon: Crop,
    description: "Crop and trim your image",
    iconColor: "#51bac7",
  },
  adjust: {
    title: "Adjust",
    icon: Sliders,
    description: "Brightness, Contrast and more",
    iconColor: "#b1b13c",
  },
  background: {
    title: "Background",
    icon: Palette,
    description: "Remove or change background",
    iconColor: "#38c299",
  },
  ai_extender: {
    title: "AI Image Extender",
    icon: Maximize2,
    description: "Extend image boundaries with AI",
    iconColor: "#bb36bb",
  },
  text: {
    title: "Add text",
    icon: Text,
    description: "Customize in various fonts",
    iconColor: "#51bac7",
  },
  ai_edit: {
    title: "AI Editing",
    icon: Eye,
    description: "Enhance image quality with AI",
    iconColor: "#b1b13c",
  },
}

const EditorSidebar = ({ project }) => {
  const { activeTool } = useCanvas();
  const toolConfig = TOOL_CONFIGS[activeTool];

  if(!toolConfig) {
    return null;
  }

  const Icon = toolConfig.icon;

  return (
    <div className="min-w-78 border-r flex flex-col px-2">
      {/* Sidebar Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="backdrop-blur-2xl bg-white/5 border-1 border-white/10 p-2 rounded-full hover:transform hover:scale-115 transition-all duration-400">
            <Icon className="h-7 w-7" color={toolConfig.iconColor} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-md font-semibold text-white">
              {toolConfig.title}
            </h2>
            <p className="text-xs text-white">
              {toolConfig.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 p-4 overflow-y-scroll">
        {renderToolContent(activeTool, project)}
      </div>
      
    </div>
  )
}

const renderToolContent = (activeTool, project) => {
  switch (activeTool) {
    case "crop":
      return <CropContent />;
    case "resize":
      return <ResizeControls project={project} />
    case "adjust":
      return <AdjustControls />
    case "background":
      return <BackgroundControls project={project} />;
    case "ai_extender":
      return <AIExtenderControls project={project} />;
    case "text":
      return <TextControls />;
    case "ai_edit":
      return <AIEdit project={project} />;
    default:
      return <div className="text-white">Select a tool to get started</div>
  }
}

export default EditorSidebar;