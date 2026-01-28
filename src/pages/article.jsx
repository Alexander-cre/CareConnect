import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null); // single article, not array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/articles/${id}/`)
      .then((res) => {
        console.log(res.data);
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!article) return <p className="text-center py-10">Article not found.</p>;

  return (
    <div className="relative p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded shadow-md p-6">
          {/* Category */}
          <a
            href="#"
            className="text-cyan-800 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
          >
            {article.category || "Uncategorized"}
          </a>

          {/* Title */}
          <h1 className="text-gray-900 font-bold text-4xl mt-2">
            {article.title}
          </h1>

          {/* Meta info */}
          <div className="py-4 text-sm text-gray-600 flex items-center space-x-4">
            <span>{article.author || "Anonymous"}</span>
            <span>•</span>
            <span>{new Date(article.created_at).toLocaleDateString()}</span>
          </div>

          <hr />

          {/* Main Content */}
          <div className="prose prose-lg max-w-none my-6">
            <p>{article.content}</p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags?.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-cyan-800 font-medium hover:text-gray-900 transition duration-300"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
