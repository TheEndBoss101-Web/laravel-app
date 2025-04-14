/* eslint-disable */
import Markdown from '@/components/markdown';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [markdown, setMarkdown] = useState('# I am heading');

    return (
        <div>
            <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
            <Markdown content={markdown} />
        </div>
    );
};

export default App;
