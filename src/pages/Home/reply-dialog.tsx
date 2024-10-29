import { useState } from "react";

import { useGetMe } from "@/application/queries/use-get-me";
import { useReplyToShout } from "@/application/reply-to-shout";
// import { LoginDialog } from "@/components/login-dialog";
// import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/Ui/Dialog";
// import { Input } from "@/components/Ui/Input";
// import { Label } from "@/components/Ui/Label";
// import { Textarea } from "@/components/Ui/textarea";
import { isAuthenticated } from "@/domain/me";
import { PencilSquareIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

interface ReplyFormElements extends HTMLFormControlsCollection {
    message: HTMLTextAreaElement;
    image: HTMLInputElement;
}

interface ReplyForm extends HTMLFormElement {
    readonly elements: ReplyFormElements;
}

interface ReplyDialogProps {
    recipientHandle: string;
    children: React.ReactNode;
    shoutId: string;
}

export function ReplyDialog({
    recipientHandle,
    children,
    shoutId,
}: ReplyDialogProps) {
    const [open, setOpen] = useState(false);
    const [replyError, setReplyError] = useState<string>();
    const replyToShout = useReplyToShout({ recipientHandle });
    const me = useGetMe();

    if (me.isError || !isAuthenticated(me.data)) {
        // return <LoginDialog>{children}</LoginDialog>;
        return <p>You must be logged in to reply</p>;
    }

    async function handleSubmit(event: React.FormEvent<ReplyForm>) {
        event.preventDefault();

        const message = event.currentTarget.elements.message.value;
        const files = Array.from(event.currentTarget.elements.image.files ?? []);

        const result = await replyToShout.mutateAsync({
            recipientHandle,
            message,
            files,
            shoutId,
        });

        if (result.error) {
            setReplyError(result.error);
        } else {
            setOpen(false);
        }
    }

    return (
        <>
            <DialogTrigger asChild onClick={() => setOpen(true)}>{children}</DialogTrigger>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] dark:bg-boxdark dark:text-white sm:rounded-4">
                    <DialogHeader>
                        <DialogTitle>Shout out loud!</DialogTitle>
                        <DialogDescription>
                            Shout out your darkest thoughts to the world.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Username"
                        >
                            Message*
                        </label>
                        <div className="relative">
                            <span className="absolute left-4.5 top-4">
                                <PencilSquareIcon className="h-4.5 w-4.5" />
                            </span>
                            <textarea
                                className="w-full rounded-2xl border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="bio"
                                id="bio"
                                rows={6}
                                placeholder="Write your message here"
                                defaultValue={""}
                            />
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="Username"
                            >
                                Image
                            </label>
                            <div className="relative drop-shadow-2">
                                {/* <span>Image</span> */}
                                {/* <img src={newProfile} alt="profile" /> */}
                                <label
                                    htmlFor="profile"
                                    className="flex h-6.5 w-6.5 cursor-pointer items-center justify-center rounded-2xl bg-primary text-white hover:bg-opacity-90 sm:-bottom-2 sm:-right-1"
                                >
                                    <ArrowUpCircleIcon className="h-3.5 w-3.5" />
                                    <input type="file" name="profile" id="profile" className="sr-only" />
                                </label>
                            </div>
                        </div>
                        <DialogFooter>
                            <button
                                type="submit"
                                className="w-full"
                                disabled={replyToShout.isLoading}
                            >
                                Shout out!
                            </button>
                        </DialogFooter>
                        {replyError && (
                            <div className="text-red-500 text-sm font-bold text-center mt-4">
                                {replyError}
                            </div>
                        )}
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}