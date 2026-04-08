import { MessageCircle } from "lucide-react";

type WhatsAppChatProps = {
  phoneE164?: string;
  message?: string;
};

const WhatsAppChat = ({
  phoneE164 = "254705287804",
  message = "Hello Blossoms of Ghetto! I’d like to know more.",
}: WhatsAppChatProps) => {
  const href = `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with us</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
};

export default WhatsAppChat;

