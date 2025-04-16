/* eslint-disable */

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Head } from '@inertiajs/react';

import { PostTable } from '@/components/posts-table';

interface PostsProps {
    posts?: object;
    status?: string;
}

export default function article1({ posts }: PostsProps) {
    return (
        <>
            <Head title="POSTS.INDEX">
                {/*<link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />*/}
            </Head>

            <div className="flex h-full flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[100%] flex-col-reverse lg:flex-row">
                        <div className="flex-1 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-base leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                            <h1 className="mb-1 text-2xl font-medium">POSTS.INDEX</h1>
                            <p className="mb-2 text-xl text-[#706f6c] dark:text-[#A1A09A]">{typeof posts}</p>
                            <ul>
                                {Object.entries(posts).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                                    </li>
                                ))}
                            </ul>

                            <PostTable posts={posts}></PostTable>

                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
