import React from 'react';

const Albums = (props) => {

  if (props.album && props.album.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <ul className="list-group fadeInUp">
      {props.albums.map(album =>
        <li key={album.id} className="list-group-item">{album.title}</li>
      )}
    </ul>
  );
};


export default Albums;