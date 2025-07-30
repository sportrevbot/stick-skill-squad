import { Play } from "lucide-react";

export const YouTubePlaceholder = () => {
  return (
    <section className="py-16 bg-ice-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-hockey-gray/10 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-hockey-gray/30">
            <div className="text-center">
              <div className="w-20 h-20 bg-hockey-gray/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-hockey-gray" />
              </div>
              <p className="text-hockey-gray font-semibold text-lg">
                YouTube Video Placeholder
              </p>
              <p className="text-hockey-gray/70 text-sm mt-2">
                This space reserved for training video content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};