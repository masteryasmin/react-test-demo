import React, { useEffect, useState} from 'react'
import {APIService} from '../service/index'

const postAPIObj = new APIService()


function Comments(props ){

  return (<>
    <div> {props.comments.map(item => {
      return (<><div> <p>{item.name} - <strong>Author {item.email}</strong></p></div>
            <div><p>{item.body}</p></div>
      </>)
    })} </div>
  </>)
}


export default function UserCommentsPosts(props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [page,commnets] = useState(1);
  const [perPage,setPerPage] = useState(5);

    const [userPosts, setUserPosts] = useState('')
    const [userComments, setUserComments] = useState('')
    const [currentComments, setCurrentComments] = useState(0)
    
    async function getPostData(userId) {
      const posts = await postAPIObj.fetch("users/" + userId + "/posts")
      setUserPosts(posts)

      
    }

    useEffect(() => {    
        getPostData(props.userId);
    
      },[]);
      async function showComments(postId){
        const commnets = await postAPIObj.fetch("posts/" + postId + "/comments")
       
        console.log('commnets---',commnets.slice(page-1*perPage));
       //commnets.slice(page-1*perPage)

        setCurrentComments(postId)
        setUserComments(commnets.slice(page-1*perPage))
      }

     async function addPost (userId){
        const posts = await postAPIObj.post("users/" + userId + "/posts",{title: title, body:body})
        console.log('posts new ' , posts)
        getPostData(props.userId);

      }

    return(
        
       <div className="container">
             <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col"># Comments</th>
            </tr>
          </thead>
          {userPosts && (
          <tbody>
            <tr>
              <td></td>

              <td><input type="input" value={title} onChange={(e)=> setTitle(e.target.value)}/></td>
              <td><textarea  value={body} onChange={(e)=> setBody(e.target.value)}/></td>
              <td><button type="button" onClick={()=>addPost(props.userId)} class="btn btn-primary">Add Post</button></td>
              
             </tr>
          {userPosts.map(post => {
            return(
              <><tr key={post.id}>
              <td>{post.id}</td>

              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button type="button" onClick={()=>showComments(post.id)} class="btn btn-primary">Show Comments</button></td>
              
             </tr> 
              <tr colspan={4}>
              <div >{currentComments == post.id && userComments?<Comments comments={userComments}></Comments>:null }</div>
             
              </tr>
              </>)
          })}
          </tbody>
          )}
        </table>

    </div>
    );
}
