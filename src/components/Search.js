import React from 'react'

const Search = (props) => {

  const { submit, searchName } = props;

  return (
    <form onSubmit={submit}>
        <input type="text" onChange={searchName} />
        <button>Search</button>
    </form>
  )
}

export default Search