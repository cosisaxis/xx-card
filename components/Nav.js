import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link className="text-2xl font-bold text-blue-400" href={"/"}>Digicard</Link>
      <ul>
        {!user && (
          <Link legacyBehavior href={"/auth/login"}>
            <a className="py-2 px-4 text-lg bg-blue-400 text-white rounded-lg font-medium ml-8 ">
              Login
            </a>
          </Link>
        )}

        {user && (
          <div>
            <Link href={"/dashboard"}>
              <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className="w-12 rounded-full"  />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
