import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const AuthLayout =  async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/');
  toast.success("Signed in successfully!")
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout