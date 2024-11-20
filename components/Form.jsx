// Form.jsx

import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Ad</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your services with the community. Let others find your
        expertise in plumbing, gardening, etc.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Service Description
          </span>

          <textarea
            value={post.prompt} // Consider renaming 'prompt' to 'description' for clarity
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Describe your service"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Service Category{" "}
            <span className="font-normal">
              (#plumbing, #gardening, #electrician, etc.)
            </span>
          </span>
          <input
            value={post.tag} // Consider renaming 'tag' to 'category' for clarity
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Category"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
