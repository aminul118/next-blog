import BlogCard from "./BlogCard";
import Heading from "./shared/Heading";

const BlogPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await data.json();

  return (
    <div>
      <Heading title="BLOG POSTS" />
      <div className="grid lg:grid-cols-3  2xl:grid-cols-4 gap-4 py-8">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
