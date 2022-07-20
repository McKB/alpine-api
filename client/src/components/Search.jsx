const Search = (props) => {
    const { searchTerm, handleSearchTermInput } = props

    return (
        <div className='inputBox'>
            <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={handleSearchTermInput}
                className='w-100'
            />
        </div>
    )
}

export default Search