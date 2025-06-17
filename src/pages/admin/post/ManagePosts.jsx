import React, { useState } from 'react'
import { useDeleteBlogMutation, useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { Link } from "react-router-dom";
import { formatDate } from '../../../utilis/formateDate';
import { MdModeEdit } from "react-icons/md";


const ManagePosts = () => {
  const [query, setQuery] = useState({search: '', category: ''});
  const {data: blogs = [], error, isLoading} = useFetchBlogsQuery(query);
  const [deleteBlog] = useDeleteBlogMutation()

  const handleDelete = async(id) => {
    try {
      const response = await deleteBlog(id).unwrap();
      alert(response.message);
      refetch()
    } catch (error) {
      console.error("Failed to delete blog: ", error);
    }
  }
  return (
    <>
    {isLoading && <div>Učitava se ...</div>}
    <section className="py-1 bg-blueGray-50">
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">Svi blogovi</h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button className="bg-[#1E73BE]  text-white active:bg-primary text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Vidi sve</button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Redni broj</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Naslov bloga</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Datum objave</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Uredi ili upravljaj</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Izbriši</th>
              </tr>
            </thead>

            <tbody>
              {
                blogs && blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{index + 1}</th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left text-blueGray-700 break-words max-w-xs">{blog.title}</th>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{formatDate(blog.createdAt)}</td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <Link to={`/dashboard/update-items/${blog?._id}`} className="hover:text-blue-700">
                      <span className="flex gap-1 items-center justify-center"><MdModeEdit />Edit</span>
                      </Link>
                    </td>
                    <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button 
                      className="bg-red-600 text-white px-2 py-1"
                      onClick={() => handleDelete(blog._id)}>
                        Izbriši
                      </button>
                    </td>
                  </tr>
                ))
              }   
            </tbody>

          </table>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made with 
              <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by 
              <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </>
  )
}

export default ManagePosts