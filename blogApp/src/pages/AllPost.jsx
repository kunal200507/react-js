import React from 'react'
import { Postcard, Container } from '../components'
import databaseconfig from '../Authentication/databaseConfig'
import { useState } from 'react'

function AllPost() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseconfig.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])




    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex felx-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost