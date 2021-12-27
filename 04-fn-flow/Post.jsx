export function Post(props) {
  const { id, title, removePost } = props;
  
  return (
    <div>
      <h3>
        {title}
        <button onClick={() => removePost(id)} style={{ margin: "0 1px" }}>
          x
        </button>
      </h3>
    </div>
  );
}
