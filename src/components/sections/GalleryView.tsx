
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ref, get } from 'firebase/database';
import { database } from '@/lib/firebase';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Images, PlayCircle, AlertCircle, X } from 'lucide-react';
import { GalleryMedia } from '@/types';

export function GalleryView() {
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  const { data: galleryItems, isLoading, error } = useQuery({
    queryKey: ['galleryItems'],
    queryFn: async (): Promise<GalleryMedia[]> => {
      const galleryRef = ref(database, 'galleryItems');
      const snapshot = await get(galleryRef);
      
      if (!snapshot.exists()) {
        return [];
      }
      
      const data = snapshot.val();
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load gallery items. Please try again later.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Images className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Our Gallery</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our training sessions, achievements, and the vibrant community at Raina's Sports.
          </p>
        </div>

        {/* Gallery Grid */}
        {!galleryItems || galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <Images className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No media found</h3>
            <p className="text-muted-foreground">
              Gallery content will be available soon. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedMedia(item)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        data-ai-hint={item.dataAiHint}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                        <PlayCircle className="h-16 w-16 text-white opacity-80" />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                    )}
                    {item.title && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Gallery Modal */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            {selectedMedia && (
              <>
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="flex items-center justify-between">
                    <span>{selectedMedia.title || selectedMedia.alt}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedMedia(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogTitle>
                </DialogHeader>
                <div className="p-6 pt-4">
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.alt}
                      data-ai-hint={selectedMedia.dataAiHint}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                  ) : (
                    <div className="bg-gray-900 rounded-lg p-8 text-center">
                      <PlayCircle className="h-24 w-24 text-white mx-auto mb-4 opacity-80" />
                      <p className="text-white mb-2">Video Player Placeholder</p>
                      <p className="text-gray-300 text-sm">URL: {selectedMedia.src}</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
