import React, { useState, useEffect } from 'react'
import styles from './App.module.scss'
import JokePage from 'src/components/JokePage'
import Category from 'src/components/Category'
import axios from 'axios'

const App = () => {
    const [categories, setCategories] = useState([])
    const [joke, setJoke] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios
            .get('http://localhost:3000/categories')
            .then((response) => {
                setCategories(response.data)
            })
            .catch()
    }, [])

    return (
        <div className={styles.app}>
            <div className={styles.title}>
                <h1>Chuck Norris jokes</h1>
            </div>
            <Category
                categories={categories}
                setJoke={(joke) => {
                    setJoke(joke)
                }}
                setIsLoading={setIsLoading}
            />
            <JokePage joke={joke} isLoading={isLoading} />
        </div>
    )
}

export default App
