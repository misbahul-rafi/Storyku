import React, { useState } from 'react';
import styled from 'styled-components';

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.span`
  background-color: grey;
  font-size: 1rem;
  color: #ffffff;
  border-radius: 4px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputBadge = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputMultipleBadge = ({onBadgeChange}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    if (inputText.includes(',') || inputText.includes(' ')) {
      const newTags = inputText
        .split(/,|\s/)
        .filter((tag) => tag.trim() !== '');
      const filteredTags = newTags.filter(
        (newTag) => !tags.includes(newTag)
      );
      if(tags == null){
        setTags(prevTags = tags);
      }
      setTags(prevTags => {
        const updatedTags = [...prevTags, ...filteredTags];
        onBadgeChange(updatedTags);
        return updatedTags;
      });
  
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <>
      <InputBadge
        type="text"
        placeholder="Add tags"
        value={inputValue}
        onChange={handleInput}
      />
      <BadgeContainer>
        {tags.map((tag) => (
          <Badge key={tag} onClick={() => handleRemoveTag(tag)}>
            {tag} &#10005;
          </Badge>
        ))}
      </BadgeContainer>
    </>
  );
};

export default InputMultipleBadge;
