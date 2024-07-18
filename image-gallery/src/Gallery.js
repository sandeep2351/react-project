import React from 'react';

const Gallery = ({data}) => {
    return (
        <div className="row">
            {data.map((image) => (
                <div key={image.id} className="col-md-3 ">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}  className="img" height="200" width="250" alt="Flickr Image"/>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
