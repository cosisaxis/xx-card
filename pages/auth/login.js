import { GrTwitter } from "react-icons/gr";
import { TwitterAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {

  const [user, loading] = useAuthState(auth);
  const route =  useRouter();
  const twitterProvider = new TwitterAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const twitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider);
      console.log(result.user)

    } catch (error) {
        console.log(error);
    }
  };

  const googleLogin = async () => {
    try{
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
      route.push("/dashboard")
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    if(user) {
      route.push("/dashboard")
    } else {
      console.log("login");
    }
  })

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Login</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with twitter provider</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={twitterLogin}
          className="text-white bg-blue-400 p-4 w-full rounded-lg flex align-middle gap-2"
        >
          <GrTwitter className="text-2xl" /> Sign in with twitter
        </button>
        <button
          onClick={googleLogin}
          className="text-white bg-blue-400 p-4 w-full rounded-lg flex align-middle gap-2"
        >
          <GrTwitter className="text-2xl" /> Sign in with twitter
        </button>
      </div>
    </div>
  );
}
