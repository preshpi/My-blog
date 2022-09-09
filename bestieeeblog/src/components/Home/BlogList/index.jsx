import { React, useEffect } from 'react';
import BlogItem from './BlogItem';
import Aos from 'aos';
import "aos/dist/aos.css";
import './styles.css';

const BlogList = ({ blogs }) => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <div className='blogList-wrap' data-aos="fade-up">
      {blogs.map((blog) => (
        <BlogItem blog={blog}/>
      ))}
    </div>
  );
};

export default BlogList;
