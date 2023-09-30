import React, { useState, useRef } from 'react'
import styles from './Category.module.scss'
import axios from 'axios'

const Category = ({ categories, setJoke, setIsLoading }) => {
    const [category, setCategory] = useState('')
    const selectRef = useRef()

    const handleSearch = () => {
        setIsLoading(true)
        axios
            .get(`http://localhost:3000/category/${category}`)
            .then((response) => {
                setJoke(response.data)
            })
            .catch()
            .finally(() => setIsLoading(false))
    }

    console.log(selectRef?.current?.active)

    return (
        <div className={styles.category}>
            <div className={styles.freeText}>
                <div>
                    <button>Category</button>
                </div>
                <div>Free Text</div>
            </div>
            <div className={styles.categorySearch}>
                <label>Category:</label>
                <select onChange={(event) => setCategory(event.target.value)}>
                    <option></option>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Category
