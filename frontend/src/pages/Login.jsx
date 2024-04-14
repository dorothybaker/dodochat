import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function Login() {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const { loading, login } = useLogin();
  const handleSubmit = async () => {
    if (!inputs.password || !inputs.username) {
      toast.error("Please fill in all fields!");
      return;
    }

    await login(inputs.username, inputs.password);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:min-w-[500px] min-w-full mx-auto">
      <div className="w-full rounded-lg sm:px-4 px-3 py-7 shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <div className="flex flex-col gap-1">
          <h1 className="sm:text-3xl text-2xl text-gray-300 font-medium">
            Welcome back to <span className="text-sky-500">dodoChat!</span>
          </h1>
          <span className="text-sm text-gray-200">
            Connecting the world, one chat at a time!
          </span>
          <span className="text-gray-300 text-sm">
            Log in to access your account.
          </span>
        </div>

        <form
          className="mt-3 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex flex-col gap-0.5">
            <label className="text-sm">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="h-[44px] px-3 placeholder-gray-500 bg-gray-950 outline-none w-full border-gray-200 rounded-md text-[15px]"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="h-[44px] px-3 placeholder-gray-500 bg-gray-950 outline-none w-full border-gray-200 rounded-md text-[15px]"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-sm text-gray-400">
              First time using dodoChat?{" "}
              <span className="text-sky-500 font-semibold cursor-pointer">
                <Link to="/register">Create an account!</Link>
              </span>
            </h3>

            <button
              type="submit"
              className="bg-sky-500 h-10 rounded-md text-white sm:w-[50%] w-full text-[15px]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
