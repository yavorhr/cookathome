import uuid from 'react-uuid';

import { useEffect, useState, useContext } from 'react';

import styles from './RecipeCategories.module.css';
import { Category } from './Category/Category.js';

export const RecipeCategories = ({
  filter,
  onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    < ul className={styles["categories-list"]} >
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
  kitchen: ["italian", "indian", "chinese", "japanese", "bulgarian", "greek"]
}