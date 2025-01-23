import Link from "next/link";

const BlogCard = ({ blog }) => {
  const { title, body, id } = blog;
  return (
    <div>
      <div className="dark:bg-slate-800 bg-gray-100 h-64">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{title}</h2>
          <p>
            {body.slice(0, 60)} ..
            <Link href={`/${id}`} className="text-blue-400">
              read details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
