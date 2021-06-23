import React from 'react';
import CompleteBookDetails from '../molecules/CompleteBookDetails';

function BookDetails({imageSrc, title, subtitle, author, desc }) {
    return (
        <CompleteBookDetails imageSrc={imageSrc} title={title} subtitle={subtitle}
        author={author} desc={desc} />
    );
}

export default BookDetails;
