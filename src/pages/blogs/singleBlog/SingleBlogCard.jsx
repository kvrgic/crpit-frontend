import React from 'react'
import { formatDate } from '../../../utilis/formateDate';
import EditorJSHTML from "editorjs-html"
import { useSelector } from 'react-redux';

const editorJSHTML = EditorJSHTML();

const SingleBlogCard = ({blog}) => {
    const {title, description, content, coverImg, category, rating, author, createdAt} = blog || {};
    const htmlContent = editorJSHTML.parse(content);
    const currentUser = useSelector((state) => state.auth.user);
    
  return (
    <>
        <div className='bg-white p-8'>
            { /* Zaglavlje bloga */ }
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p className='mb-6'>{formatDate(createdAt)} by 
                    <span className='text-blue-400 cursor-pointer'> {currentUser?.username}</span></p>
            </div>

            <div>
                <img src={coverImg} alt="cover Image" className='w-full md:h-[520px] bg-cover' />
            </div>

            {/* Detalji bloga */}
            <div className='mt-8 space-x-4'>
                <div dangerouslySetInnerHTML={{__html: htmlContent}} className='space-y-3 editorjsdiv'/>

                {/**<div>
                    <span className='text-lg font-medium'>Ocjena: </span>
                    <span>{rating} (na osnovu 2,370 recenzija)</span>
                </div>*/}
                
            </div>
        </div>
    </>
  )
}

export default SingleBlogCard