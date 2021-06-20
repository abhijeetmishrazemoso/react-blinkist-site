import React from 'react';
import BookCard from '../../BookCard';
import TabbedBooks from './TabbedBooks';

export default function TabsWithCards({ imageSrc }) {
    const currReading = [];
    const booksFinished = [];
    const reading ="reading";
    const finished = "finished";
    currReading[currReading.length] = (<BookCard  imageSrc={imageSrc} readingTabProp={reading} initialReadState={reading}
        title="Nature and Man" subtitle="Does this not go anywhere?" />);

    currReading[currReading.length]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} initialReadState={reading}
    title="Politics & Science" subtitle="There you have it, the yards of socialism" />);

    currReading[currReading.length]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} initialReadState={reading}
        title="Society and Pschycology" subtitle="Does this have a fortune?" />);

    booksFinished[booksFinished.length] = (<BookCard  imageSrc={imageSrc} readingTabProp={finished} initialReadState={reading}
        title="Nature and Man" subtitle="Does this not go anywhere?" />);

    booksFinished[booksFinished.length]=(<BookCard  imageSrc={imageSrc} readingTabProp={finished} initialReadState={reading}
    title="Politics & Science" subtitle="There you have it, the yards of socialism" />);

    booksFinished[booksFinished.length]=(<BookCard  imageSrc={imageSrc} readingTabProp={finished} initialReadState={reading}
        title="Society and Pschycology" subtitle="Does this have a fortune?" />);

    console.log(currReading.length);
    return (
        <TabbedBooks booksCurrReading={currReading} booksFinished={booksFinished}/>
    );
}
