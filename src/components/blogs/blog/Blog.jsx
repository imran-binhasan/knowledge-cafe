import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    const {cover,author_name,author_img,post_date,reading_time,title,hashtags} = blog;
    return (
        <div className="border">
            <p>Name : {author_name}</p>
            <p>Posted Date : {post_date}</p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;