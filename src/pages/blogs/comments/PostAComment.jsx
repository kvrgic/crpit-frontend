import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/blogsApi';

const PostAComment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState('')
    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    //console.log(user)
    const [postComment] = usePostCommentMutation();
    const {refetch} = useFetchBlogByIdQuery(id, {skip: !id})

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!user) {
        alert('Molimo vas da se prijavite kako biste mogli komentarisati ovu objavu');
        navigate("/login");
        return;
      }
      const newComment = {
        comment: comment,
        user: user?._id,
        postId: id
      }
      //console.log(newComment)
      try {
        const response = await postComment(newComment).unwrap();
        console.log(response);
        alert('Komentar je uspješno objavljen!')
        setComment('');
        refetch()

      } catch (error) {
        //console.error("POST COMMENT ERROR:", error);
        alert('Došlo je do greške prilikom objave komentara')
      }
    }

  return (
    <div className='mt-8'>
        <h3 className='text-lg font-medium mb-8'>Ostavite komentar</h3>
        <form onSubmit={handleSubmit}>
            <textarea name="text" 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols="30"
            rows="10"
            placeholder='Podijelite svoje mišljenje o ovoj objavi ....'
            className='w-full bg-bgPrimary focus:outline-none p-5'
            />
            <button type='submit' className='w-full bg-primary hover:bg-indigo-950 text-white font-medium py-3 rounded-md'>Objavi komentar</button>
        </form>
    </div>
  )
}

export default PostAComment