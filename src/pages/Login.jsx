import { googleLogin } from "../services/authService";
import BackButton from "../components/BackButton";
function Login() {

  const handleLogin =
    async () => {

      try {

        const result =
          await googleLogin();

        const user =
          result.user;

      localStorage.setItem(
  "civic_user",
  JSON.stringify({
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    role: "citizen",
  })
);

        alert(
          "Login Successful"
        );

        window.location.href =
          "/";

      } catch (error) {

        console.error(error);

      }

    };

  return (
    <div className="min-h-screen bg-[#050B1D] flex justify-center items-center">

      <div className="bg-white/5 border border-cyan-500/20 p-10 rounded-3xl text-center">
      <BackButton />

        <h1 className="text-4xl font-bold text-white mb-5">
          Civic Orbit Login
        </h1>

        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl text-white font-semibold"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}

export default Login;