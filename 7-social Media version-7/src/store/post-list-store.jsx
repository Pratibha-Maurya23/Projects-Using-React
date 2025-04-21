import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newPostList = currpostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currpostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currpostlist];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postlistreducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, postRactions, postTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: postRactions,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    userId: "user-0",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacationa. Hope to enjoys a lot. Peace out.",
    reactions: 2,
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    userId: "user-12",
    title: "Pass ho gaye bhai",
    body: "4 saal ki masti ke baad bhi ho gaye hai pass. Hard to believe",
    reactions: 15,
    tags: ["Graduating", "Unbelieveable"],
  },
];
export default PostListProvider;
