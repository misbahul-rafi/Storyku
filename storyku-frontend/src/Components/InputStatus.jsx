import styled from "styled-components";

const InputOption = styled.select`
  width: 250px;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStatus = ({ onStatusChange }) => {
  const statusOptions = [
    { label: "Publish", value: "true" },
    { label: "Draft", value: "false" },
  ];

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value === "true"; // Convert string to boolean
    onStatusChange(selectedStatus);
  };

  return (
    <>
      <Container>
        <label htmlFor="Status">Status</label>
        <InputOption onChange={handleStatusChange}>
          <option value="" disabled selected>--Status--</option>
          {statusOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </InputOption>
      </Container>
    </>
  );
};

export default InputStatus;
