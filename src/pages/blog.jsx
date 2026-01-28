import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Blog = () => {

  const [articles , setArticles] = useState([]) ;

  useEffect(() => {
    axios.get('http://localhost:8000/api/articles/')
    .then(res => {
      console.log(res.data);
      setArticles(res.data);
    })
    .catch(err => console.log(err));  
  },[]);


  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Get yourself updated on our latest informations and knowledge of basis.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* First Card */}
          {articles.map(article => (
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg"
             key={article.id}>
              <Link 
              to={`/articles/${article.id}`}
              >
          <div >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt="Article image"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  Article
                </a>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {article.title}
                </p>
                <p className="mt-3 text-base text-gray-500 truncate">
                  {article.content}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only">Roel Aufderehar</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Roel Aufderehar"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    Roel Aufderehar
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                  <span aria-hidden="true">·</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
        </div>
          ))}

        </div>


      </div>
    </div>
  );
};

export default Blog;
