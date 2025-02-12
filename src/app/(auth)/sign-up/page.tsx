import { SendOtpForm } from "@/components/blocks";
import { FullScreenVideo, Overlay } from "@/components/elements";

const SignUpPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <FullScreenVideo src="/videos/sign-up.mp4" />
      <Overlay zIndex="-z-40" />
      <SendOtpForm />
    </div>
  );
};

export default SignUpPage;
