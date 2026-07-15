import { Dialog, DialogContent } from '@/components/ui/dialog';

interface VideoModalProps {
  videoId: string | null;
  title?: string;
  onClose: () => void;
}

const VideoModal = ({ videoId, title, onClose }: VideoModalProps) => {
  return (
    <Dialog open={!!videoId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-zinc-800 bg-black p-0 sm:p-0">
        {videoId && (
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title || 'Vídeo'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {title && <p className="px-4 pb-4 text-sm font-medium text-white">{title}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
