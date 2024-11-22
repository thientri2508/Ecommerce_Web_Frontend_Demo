import { Checkbox, Tag } from 'antd';

interface CheckboxWithTagProps {
  tags: string[];
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckboxWithTag: React.FC<CheckboxWithTagProps> = ({ tags, selectedValues, setSelectedValues }) => {

  const handleTagClick = (tag: string) => {
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(tag)) {
        return prevSelectedValues.filter((item) => item !== tag);
      } else {
        return [...prevSelectedValues, tag];
      }
    });
  };

  return (
    <div className='mt-5 flex flex-wrap gap-3'>
      {tags?.map((tag) => (
        <Tag
          key={tag}
          color={selectedValues.includes(tag) ? 'blue' : 'default'}
          onClick={() => handleTagClick(tag)} 
          style={{ cursor: 'pointer', userSelect: 'none', fontSize: '14px', padding:'5px 10px' }}
        >
          <Checkbox
            checked={selectedValues.includes(tag)} 
            onChange={() => handleTagClick(tag)}    
            style={{ display: 'none' }} 
          />
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default CheckboxWithTag;
