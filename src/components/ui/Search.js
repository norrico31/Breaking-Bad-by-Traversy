import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ setQuery }) => {
    const [text, setText] = useState('')

    const onChange = q => {
        setText(q)
        setQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder='Search characters' autoFocus value={text} onChange={(e) => onChange(e.target.value)}/>
            </form>
        </section>
    )
}

Search.propTypes = {
    setQuery: PropTypes.func.isRequired
}
export default Search
