import Tag from './my_tag';
import './my_tags.css';

const Tags = ({ tags }) => {

  return (
    <div className='tag-container'>
      <h2>Tags</h2>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>  
  );
};

export default Tags;
