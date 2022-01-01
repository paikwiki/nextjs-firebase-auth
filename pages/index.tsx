import type { NextPage } from "next";
import Head from "next/head";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase-client";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleLogin = async () => {
    const userCredencial = await signInWithPopup(auth, provider);
    router.push({
      pathname: "./logined",
      query: { userName: userCredencial.user.displayName },
    });
  };
  return (
    <div>
      <Head>
        <title>Next.js Firebase authentication</title>
        <meta name="description" content="Next.js Firebase authentication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js Firebase authentication</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
