import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

function Register() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, register } = useRegister();
  const handleSubmit = async () => {
    if (
      !inputs.fullName ||
      !inputs.username ||
      !inputs.email ||
      !inputs.gender ||
      !inputs.password ||
      !confirmPassword
    ) {
      toast.error("Please fill in all the fields!");
      return;
    }
    if (inputs.password !== confirmPassword) {
      toast.error("Both passwords should match!");
      return;
    }
    if (inputs.password === confirmPassword && inputs.password.length < 7) {
      toast.error("Password must be greater than 7 characters!");
      return;
    }

    await register(inputs);
    setInputs({
      fullName: "",
      username: "",
      email: "",
      password: "",
      gender: "",
    });

    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center sm:min-w-[500px] min-w-full mx-auto h-full">
      <div className="w-full rounded-lg sm:px-4 px-3 py-7 shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 h-max overflow-y-scroll">
        <div className="flex flex-col gap-1">
          <h1 className="sm:text-3xl text-2xl text-gray-300 font-medium">
            Welcome to <span className="text-sky-500">dodoChat!</span>
          </h1>
          <span className="text-sm text-gray-200">
            Connecting the world, one chat at a time!
          </span>
          <span className="text-gray-300 text-sm">Create an account.</span>
        </div>

        <form
          className="mt-3 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex flex-col gap-0.5">
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="h-[44px] px-3 placeholder-gray-500 bg-gray-950 outline-none w-full border-gray-200 rounded-md text-[15px]"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
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
            <label className="text-sm">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              className="h-[44px] px-3 placeholder-gray-500 bg-gray-950 outline-none w-full border-gray-200 rounded-md text-[15px]"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div className="flex justify-between gap-3 sm:flex-row flex-col">
            <div className="flex flex-col gap-0.5 flex-1 w-full">
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
            <div className="flex flex-col gap-0.5 flex-1 w-full">
              <label className="text-sm">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="h-[44px] px-3 placeholder-gray-500 bg-gray-950 outline-none w-full border-gray-200 rounded-md text-[15px]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm">Gender: </span>
            <div className="flex gap-2 items-center">
              <label className="text-sm">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="radio border-gray-400"
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-sm">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="radio border-gray-400"
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-sm text-gray-400">
              Already have an account?{" "}
              <span className="text-sky-500 font-semibold cursor-pointer">
                <Link to="/login">Login!</Link>
              </span>
            </h3>

            <button
              type="submit"
              className="bg-sky-500 h-10 rounded-md text-white sm:w-[50%] w-full text-[15px] flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
