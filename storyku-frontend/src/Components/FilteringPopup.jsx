
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import InputStatus from "./InputStatus";
import InputCategory from "./InputCategory";

const FilterContainer = styled.div`
    background: #AAD9BB;
    width: 70vw;
    height: 80vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`;

const FormContainer = styled.div`
    background: #D5F0C1;
    width: 300px;
    height: 500px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 20px;
`;

const Buttons = styled.div`
    width: 80%;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 10px;
    margin-top: 10px;

    button {
        margin-right: 10px;
    }

    button[type="submit"] {
        background: #80BCBD;
    }
`;

const Close = styled(IoMdClose)`
    font-size: 45px;
    position: absolute;
    right: 1px;
    cursor: pointer;
`;

const FilteringPopup = ({ onClose }) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <FilterContainer>
                <Close onClick={handleClose} />
                <h1>Filter</h1>
                <FormContainer>
                    <InputStatus></InputStatus>
                    <InputCategory></InputCategory>
                </FormContainer>
                <Buttons>
                    <button type="reset" onClick={handleClose}>
                        Reset
                    </button>
                    <div className="container">
                        <button type="button" onClick={handleClose}>
                            Cancel
                        </button>
                        <button type="submit">Filter</button>
                    </div>
                </Buttons>
            </FilterContainer>
        </>
    );
};

export default FilteringPopup;
