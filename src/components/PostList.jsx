import React, {Component} from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';

function PostList(props){

        return(
            <div>
                <h2>Lista postari:</h2>
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {props.posts.map( post => {
                        return <PostItem
                            userId = {post.userId}
                            id = {post.id}
                            title = {post.title}
                            body = {post.body}
                            key = {post.id}
                        />
                    })}
                </div>
            </div>
        )
    
}

function mapStateToProps(state){
    return {
        posts: state.posts.data
    }
}

export default connect(mapStateToProps)(PostList);