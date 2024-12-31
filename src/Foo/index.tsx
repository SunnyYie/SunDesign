import React from 'react';

interface FooProps {
    title: string
}

export default function Foo({ title }: FooProps) {
    return <h4>{title}</h4>;
}

