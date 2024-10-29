import { HeartIcon, ChatBubbleLeftRightIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/Ui/Card";
import { Image } from "@/domain/media";
import { Shout as IShout } from "@/domain/shout";
import { User, fallbackAuthor } from "@/domain/user";

import { ReplyDialog } from "../../pages/Home/reply-dialog";

interface ShoutProps {
  shout: IShout;
  author?: User;
  image?: Image;
}

export function Shout({ shout, author = fallbackAuthor, image }: ShoutProps) {
  return (
    <Card key={shout.id} className="w-full rounded-none">
      <Link to={`/profile/${author.handle}`}>
        <CardHeader className="pb-2 flex-row gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={author.avatar}
            alt={author.handle}
          />
          <span className="font-semibold">{`${author.name}`}</span>
          <span className="font-semibold">{`@${author.handle}`}</span>
          <span className="flex-1 text-right text-xs text-muted-foreground whitespace-nowrap">
            {shout.createdAt} {" "} ago
          </span>
        </CardHeader>
      </Link>
      <CardContent>
        <CardDescription>{shout.text}</CardDescription>
        {image && (
          <img
            className="mt-4 object-contain"
            style={{ width: 350, maxHeight: 200 }}
            src={image.url}
            alt=""
          />
        )}
      </CardContent>
      <CardFooter className="flex gap-2 p-3 border-t-neutral-300">
        <ReplyDialog shoutId={shout.id} recipientHandle={author.handle}>
          <button className="gap-2">
            <ChatBubbleLeftRightIcon className="h-4 w-4 " />
            {shout.replies.length}
          </button>
        </ReplyDialog>
        <button className="gap-2">
          <HeartIcon className="h-4 w-4" />
          {shout.likes}
        </button>
        <button className="gap-2">
          <ArrowPathRoundedSquareIcon className="h-4 w-4" />
          {shout.reshouts}
        </button>
      </CardFooter>
    </Card>
  );
}