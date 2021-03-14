import React, {Component} from 'react';
import PostItem from './PostItem';

class PostList extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data}));
            
    }


    render(){
        return(
            <div>
                <h2>Lista postari:</h2>
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {this.state.posts.map( post => {
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
}

export default PostList;