import React from 'react'

function SearchButton (props) {
  return (
    <React.Fragment>
      <button className="btn btn-primary my-1" type="submit" name="button">{props.title}</button>
    </React.Fragment>
  )
}

export default SearchButton
