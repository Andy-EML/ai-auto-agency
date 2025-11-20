import { MessageCircle } from 'lucide-react';

interface FloatingChatButtonProps {
  onClick: () => void;
}

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Open chat"
      title="Chat with us"
    >
      {/* Background glow effect */}
      <div className="absolute -inset-2 bg-terracotta blur-lg group-hover:opacity-60 transition-opacity duration-300 opacity-20 rounded-full animate-pulse"></div>

      {/* Main button */}
      <div className="relative w-16 h-16 bg-terracotta border-3 border-charcoal shadow-brutal rounded-full flex items-center justify-center hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <MessageCircle className="w-8 h-8 text-off-white" />
      </div>
    </button>
  );
}
