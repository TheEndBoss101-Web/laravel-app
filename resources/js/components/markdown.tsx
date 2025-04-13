import { loadHighlightTheme } from '@/lib/utils';
import 'katex/dist/katex.css';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
//import rehypeMermaid from 'rehype-mermaid'; // Not fucking working //TODO: Fix this
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkSmartypants from 'remark-smartypants';

interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    useEffect(() => {
        loadHighlightTheme();
    }, []);

    return (
        /*<div className="prose prose-neutral dark:prose-invert max-w-none">*/
        <div className="prose prose-neutral dark:prose-invert">
            <ReactMarkdown
                remarkPlugins={[
                    remarkGfm,
                    remarkSmartypants, // Apply SmartyPants formatting
                    //remarkMermaid, // Enable Mermaid diagrams
                    remarkMath, // Enable Math support
                ]}
                rehypePlugins={[
                    rehypeHighlight,
                    rehypeKatex, // Enable KaTeX for math rendering
                    //rehypeMermaid,
                ]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default Markdown;
