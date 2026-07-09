import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  name: "",
  email: "",
  age: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.age) {
      nextErrors.age = "Age is required.";
    } else if (Number(formData.age) <= 0) {
      nextErrors.age = "Age must be greater than 0.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      age: Number(formData.age),
    };

    console.log("Register form submitted:", payload);

    navigate("/about", {
      state: payload,
    });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-3 py-4 text-white sm:px-4 sm:py-8">
      <div className="mx-auto w-full max-w-lg rounded-2xl border border-zinc-800 bg-[#171717] p-4 shadow-xl sm:p-6">
        <div className="mb-6 border-b border-zinc-800 pb-4">
          <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Submit your details to continue to the About page.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-700 bg-[#101010] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-700 bg-[#101010] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="age" className="mb-2 block text-sm font-medium text-zinc-300">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min="1"
              value={formData.age}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-700 bg-[#101010] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-500"
              placeholder="Enter your age"
            />
            {errors.age && <p className="mt-2 text-sm text-red-400">{errors.age}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
