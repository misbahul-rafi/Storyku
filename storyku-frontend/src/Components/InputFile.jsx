import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const InputFile = () => {
    return (
        <Container>
            <label htmlFor="cover">Images Cover</label>
            <input type="file" name="cover" id="cover" />
        </Container>
    )
}

export default InputFile;