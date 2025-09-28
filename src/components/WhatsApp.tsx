import Image from "next/image";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <Link href="https://wa.me/5519988048662" target="_blank" className="fixed bottom-5 right-5" title="Chat on WhatsApp">
      <Image src="/whatsapp-button.svg" width={220} height={92} alt="WhatsApp" className="hidden lg:block" />
      <Image src="/whatsapp-button.svg" width={160} height={92} alt="WhatsApp" className="block lg:hidden" />
    </Link>
  );
}