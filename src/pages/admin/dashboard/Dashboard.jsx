import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {FiUsers} from "react-icons/fi"; 
import {FaBlog, FaRegComment} from "react-icons/fa";
import {RiAdminLine} from 'react-icons/ri'
import { useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { useGetCommentsQuery } from '../../../redux/features/comments/commentApi';
import { useGetUserQuery } from '../../../redux/features/auth/authApi';
import BlogsChart from './BlogsChart';

const Dashboard = () => {
  const [query, setQuery] = useState({search: '', category: ''})
    const {user} = useSelector((state) => state.auth);

  const {data: blogs=[], error, isLoading} = useFetchBlogsQuery(query);
  const {data: comments=[]} = useGetCommentsQuery();
  const { data: users = {} } = useGetUserQuery();

  const userCount = users.users?.length || 0;
  const adminCounts = users.users?.filter(user => user.role === "admin").length || 0;


  return (
    <>
    {isLoading && (<div>Učitava se ....</div>)}
    <div className='space-y-6'>
      <div className='bg-bgPrimary p-5'>
        <h1>Zdravo, {user?.username}!</h1>
        <p>Dobrodošli na administratorsku kontrolnu ploču</p>
        <p>Ovdje možete upravljati objavama na CRPIT-u, upravljati sekcijama i obavljati druge administrativne zadatke.</p>
      </div>

      {/** Cards grid */}
      <div className='flex flex-col md:flex-row justify-center gap-8 pt-8'>
        <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
          <FiUsers className='size-8 text-indigo-950'/>
          <p>{userCount} Korisnika</p>
        </div>

        <div className='bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
          <FaBlog className='size-8 text-red-600'/>
          <p>{blogs.length} Blogova</p>
        </div>

        <div className='bg-lime-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
          <RiAdminLine className='size-8 text-lime-600'/>
          <p>{adminCounts} Administrator{adminCounts !==1 ? 'a' : ''}</p>
        </div>

        <div className='bg-orange-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
          <FaRegComment className='size-8 text-orange-600'/>
          <p>{comments?.totalComment} Komentara</p>
        </div>
      </div>

      {/**Graphs and chart */}
      <div className='pt-5 pb-5'>
        <BlogsChart blogs={blogs}/>
      </div>
    </div>
    </>
  )
}

export default Dashboard