import { useNavigate } from "react-router-dom";

const Table = ({ stories }) => {
  const navigate = useNavigate();
    const columns = ["Title", "Writer", "Category", "Tags", "Status", "Action"];
  
    const updateClick = (id) =>{
      navigate(`/manage-story/${id}`)
    }
    const StoryList = () => (
      <tbody>
        {stories.map((story, index) => (
          <tr key={story.id || index}>
            <td>{story.title}</td>
            <td >{story.writer}</td>
            <td>{story.category}</td>
            <td>
            {story.tags
              ? story.tags.map((tag, i) =>
                  i === story.tags.length - 1 ? tag : `${tag}, `
                )
              : null}
            </td>
            <td>{story.status ? "Publish" : "Draft"}</td>
            <td>
              <button>Delete</button>
              <button onClick={()=> updateClick(story.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  
    return (
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <StoryList />
      </table>
    );
  };
  
export default Table;
