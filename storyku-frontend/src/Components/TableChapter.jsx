import styled from "styled-components";

const Table = styled.table`
  width: 76vw;
  td:last-child {
    text-align: center;
`;

const TableChapter = ({ chapters }) => {
  if (!Array.isArray(chapters)) {
    console.error('Error: "chapters" is not an array.', chapters);
    return null;
  }

  console.log('Value of chapters:', chapters);

  const columns = ["Title", "Last Update", "File", "Action"];

  const ChapterList = () => (
    <Table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {chapters.map((chapter, index) => (
          <tr key={chapter.id || index}>
            <td>{chapter.chapter_title}</td>
            <td>{chapter.last_update}</td>
            <td>{chapter.file}</td>
            <td>
              <button>Delete</button>
              <span> | </span>
              <button onClick={() => updateClick(chapter.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <>
      <h1>Chapters</h1>
      <ChapterList />
    </>
  );
};

export default TableChapter;
