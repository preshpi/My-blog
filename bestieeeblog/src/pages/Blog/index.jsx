import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="m-5">
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap' data-aos="fade-up">
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 className="dark:text-white mt-2">{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc dark:text-white leading-8'>{blog.description}</p>
          <p className="blog-desc dark:text-white leading-8"> {blog.desc}</p>
          <p className="blog-desc dark:text-white leading-8"> {blog.desc2}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
