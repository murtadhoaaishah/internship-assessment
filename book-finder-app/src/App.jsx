import React, { useState } from 'react'

const App = () => {
    const [query, setQuery] = useState('')

    return (
        <div>
            search     <input value={query}
                onChange={e => setQuery(e.target.value)} />
        </div>
    )
}

export default App


