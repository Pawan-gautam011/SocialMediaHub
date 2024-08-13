import React from 'react'
import { reactionAdded } from '../Navbar/PostSlice';
import { useDispatch } from 'react-redux';

const reactionEmojis = {
    like: '👍',
    dislike: '👎',
    love: '❤️',
    haha: '😂',
    wow: '😮',
    sad: '😥',
    angry: '😡'
}

const Reaction = ({ post }) => {

    const dispatch = useDispatch();

    const onReactionClick = (key) => {
        dispatch(reactionAdded({ postId: post.id, reaction: key }));
    }

    return (
        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 space-y-2 sm:space-y-0 mt-4">
            {Object.entries(reactionEmojis).map(([key, value]) => (
                <button
                    key={key}
                    type="button"
                    className="flex items-center justify-center w-20 h-12 bg-gray-100 hover:bg-blue-100 text-xl rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    onClick={() => onReactionClick(key)}
                >
                    <span className="mr-2">{value}</span>
                    <span className="text-sm">{post.reactions[key]}</span>
                </button>
            ))}
        </div>
    )
}

export default Reaction;
