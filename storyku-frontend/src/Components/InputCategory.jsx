import styled from "styled-components";


const InputOption = styled.select`
    width: 250px;
    padding: 5px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const InputCategory = ({onCategoryChange}) => {
    const category = ["Financial", "Technology", "Health"];

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        onCategoryChange(selectedCategory);
      };

    return (
        <>
        <Container>
        <label htmlFor="category">Category</label>
            <InputOption onChange={handleCategoryChange}>
                <option value="" disabled selected>--Category--</option>
                {category.map((c) => (
                    <option value={c} key={c}>
                        {c}
                    </option>
                ))}
            </InputOption>
            </Container>
        </>
    )
}
export default InputCategory;