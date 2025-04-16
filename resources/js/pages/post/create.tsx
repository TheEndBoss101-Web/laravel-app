/* eslint-disable */

import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';

type PostForm = {
    title: string;
    summary: string;
    body: string;
};

export default function postsCreate() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<PostForm>>({
        title: '',
        summary: '',
        body: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <>
            <Head title="POSTS.CREATE">
                {/*<link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />*/}
            </Head>

            <div className="flex h-full flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[100%] flex-col-reverse lg:flex-row">
                        <div className="flex-1 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-base leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 text-2xl font-medium">POSTS.CREATE</h1>

                            <form className="flex flex-col gap-6" onSubmit={submit}>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">title</Label>
                                        <Textarea
                                            id="title"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="Hello World!"
                                        />
                                        <InputError message={errors.title} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="summary">summary</Label>
                                        <Textarea
                                            id="summary"
                                            required
                                            tabIndex={2}
                                            value={data.summary}
                                            onChange={(e) => setData('summary', e.target.value)}
                                            placeholder="AAAAAA"
                                        />
                                        <InputError message={errors.summary} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="body">body</Label>
                                        <Textarea
                                            id="body"
                                            required
                                            tabIndex={2}
                                            value={data.body}
                                            onChange={(e) => setData('body', e.target.value)}
                                            placeholder="body"
                                        />
                                        <InputError message={errors.body} />
                                    </div>

                                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
