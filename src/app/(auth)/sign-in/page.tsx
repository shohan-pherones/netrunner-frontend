import { SignInForm } from "@/components/blocks";
import { FullScreenVideo, Overlay } from "@/components/elements";

const SignInPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <FullScreenVideo src="/videos/sign-in.mp4" />
      <Overlay zIndex="-z-40" />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
