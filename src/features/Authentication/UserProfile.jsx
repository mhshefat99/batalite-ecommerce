import { CircleUser } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      {" "}
      <SignedOut>
        <SignInButton mode="modal">
          <div className="border px-2 py-1 flex items-center gap-2 cursor-pointer">
            <CircleUser />
            <div>
              <p className="text-xs font-semibold">Account</p>
              <p className="text-sm font-bold">Login</p>
            </div>
          </div>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center gap-2 border px-2 py-1 cursor-pointer">
          <UserButton />
          <div>
            <p className="text-xs text-gray-500 font-semibold">Welcome Back</p>
            <p className="text-xs text-gray-700 font-bold">{user?.firstName}</p>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}

export default UserProfile;
