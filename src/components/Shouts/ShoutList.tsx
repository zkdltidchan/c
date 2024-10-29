
import { Shout } from "./Shout";
import { Image, getImageById } from "@/domain/media";
import { Shout as IShout } from "@/domain/shout";
import { User, getUserById } from "@/domain/user";

interface ShoutListProps {
  shouts: IShout[];
  images: Image[];
  users: User[];
}

export function ShoutList({ shouts, users, images }: ShoutListProps) {
  return (
    <ul className="flex flex-col items-center w-full">
      {shouts.map((shout) => (
        <li key={shout.id} className="w-full">
          <Shout
            shout={shout}
            author={getUserById(users, shout.authorId)}
            image={getImageById(images, shout.imageId)}
          />
        </li>
      ))}
    </ul>
  );
}