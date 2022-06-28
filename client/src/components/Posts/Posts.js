import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid> // on xs means on mobile devices takes 12 part of 12 and on sm or larger takes 6 of 12 parts
      ))}
    </Grid>
  );
};

export default Posts;
