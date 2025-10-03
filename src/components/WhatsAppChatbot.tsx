import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "971509172474";

  const handleSendMessage = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Gateway Education.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Chat bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-background border border-border rounded-2xl shadow-elegant p-6 w-80 animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-islamic-teal flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Gateway Education</h3>
                  <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about our Islamic Madrasa or School Tuition? Chat with us on WhatsApp!
            </p>
            <button
              onClick={handleSendMessage}
              className="w-full bg-islamic-teal hover:bg-islamic-teal/90 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </button>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-islamic-teal hover:bg-islamic-teal/90 text-white w-14 h-14 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsAppChatbot;
