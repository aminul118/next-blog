import Heading from "@/components/shared/Heading";

const BlogDetails = async ({ params }) => {
  const { blogId } = await params;

  // Fetch the blog data
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const blog = await data.json();

  return (
    <div className="space-y-8 pt-8">
      <Heading title="BLOG DETAILS" />
      <div className="dark:bg-slate-800 bg-gray-100 border max-w-3xl mx-auto p-24 space-y-4">
        <h1 className="text-3xl">
          <span className="font-semibold">Title:</span> {blog.title}
        </h1>
        <p>{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
