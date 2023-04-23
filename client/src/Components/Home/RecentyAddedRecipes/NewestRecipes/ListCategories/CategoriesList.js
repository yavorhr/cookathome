import uuid from 'react-uuid';


import styles from './CategoriesList.module.css';
import { Category } from '../Category/Category.js';

export const CategoriesList = ({
  filter,
  onSelect }) => {

  return (
    <ul className={styles["categories-list"]} >
      {categories[filter] &&

        categories[filter].map(c =>
          <Category key={uuid()}
            filter={filter}
            data={c}
            onSelect={onSelect}
          />
        )}
    </ul>
  )
}

const categories = {
  category: ["veggeterian", "meat"],
  season: ["spring", "summer", "autumn", "winter"],
  level: ["beginner", "intermediate", "advanced", "chef"],
  kitchen: ["italian", "bulgarian", "greek"]
}