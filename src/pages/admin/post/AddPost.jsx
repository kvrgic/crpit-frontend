import React, { use, useEffect, useRef, useState } from 'react';
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import { usePostBlogMutation } from '../../../redux/features/blogs/blogsApi';



const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDescrition, setMetaDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [postBlog, {isLoading}] = usePostBlogMutation()

  const {user} = useSelector((state) => state.auth);
  //console.log(" Korisnik", user)

  useEffect(() => {
    const editor = new EditorJS({
        holder: 'editorjs', 
        onReady: () => {
          editorRef.current = editor;
        },
        autofocus: true, 
        tools: {
          header: {
            class: Header, 
            inlineToolbar: true,
          }, 
          list: {
            class: List,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            inlineToolbar: true,
          }
        }
    })

    return () => {
      editor.destroy();
      editorRef.current = null;
    }

  }, [])

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      //console.log(content)
      const newPost = {
        title,
        coverImg,
        content,
        category,
        description: metaDescrition,
        author: user?._id,
        rating
      }
      //console.log (newPost);
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      alert("Blog je uspješno objavljen!")
      navigate('/')

    } catch (error) {
      console.log("Failed to submit post", error);
      setMessage("Došlo je do greške pri slanju posta. Molimo vas pokušajte ponovo.")
    }
  }

  return (
    <div  className='bg-white md:p-8 p-2'>
      <h2 className='text-2xl font-semibold'>Kreiraj novi blog post</h2>
      <form
      onSubmit={handleSubmit}
      className='space-y-5 pt-8'
      >
        <div className='space-y-4'>
          <label className='font-semibold text-xl'>Naslov bloga: </label>
          <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
          placeholder='npr. Naučno stručna konferencija INN & TECH ....' 
          required
          />
        </div>

        {/** blog details */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-4'>

          {/** left side */}
          <div className='md:w-2/3 w-full'>
          <p className='font-semibold text-xl mb-5'>Sadržaj</p>
          <p className='text-xs italic'>Unesi sadržaj posta ovdje ....</p>
          <div id='editorjs'></div>
          </div>

          {/** right side */}
          <div className='md:w-1/3 w-full border p-5 space-y-5'>
            <p className='text-xl font-semibold'>Izaberi izgled blog posta</p>

            {/** images */}
            <div className='space-y-4'>
              <label className='font-semibold'>Naslovna slika bloga: </label>
              <input 
              type="text" 
              value={coverImg}
              onChange={(e) => setCoverImg(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='npr. https://unsplash.com/image/cover-photo-of-blog.png ....' 
              required
              />
            </div>

            {/** category */}
            <div className='space-y-4'>
              <label className='font-semibold'>Kategorija: </label>
              <input 
              type="text" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='INN&TECH/Inovacije/Tehnologija' 
              required
              />
            </div>

            {/** meta description */}
            <div className='space-y-4'>
              <label className='font-semibold'>Kratki opis: </label>
              <textarea
              type="text" 
              cols={4}
              rows={4}
              value={metaDescrition}
              onChange={(e) => setMetaDescription(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder='Unesi kratki SEO opis bloga' 
              required
              />
            </div>

            {/** rating */}
            <div className='space-y-4'>
              <label className='font-semibold'>Ocjena: </label>
              <input
              type="number" 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              required
              />
            </div>

            {/** author */}
            <div className='space-y-4'>
              <label className='font-semibold'>Autor: </label>
              <input
              type="text" 
              value={user.username}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder={`{user.username} (not editable)`}
              disabled
              />
            </div>
          </div>
        </div>

        {
          message && <p className='text-red-500'>{message}</p>
        }
        <button type='submit'
        disabled={isLoading}
        className='w-full mt-5 bg-primary hover:bg-indigo-950 text-white font-medium py-3 rounded-md'>
          Dodaj novi blog
        </button>
      </form>
    </div>
  )
}

export default AddPost