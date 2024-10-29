import { Link } from "react-router-dom";
import { User } from "@/domain/user";

interface RecommendUserProps {
    user: User;
}

export function RecommendUser({ user }: RecommendUserProps) {
    return (
        <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-full">
                <img src={user.avatar} alt="profile" />
            </div>
            <div>
                <Link to={`/profile/${user.handle}`} className="text-xs font-medium text-black dark:text-white">{user.name}</Link>
                <p className="text-xs">{user.id}</p>
            </div>
            <button className="text-xs hover:text-primary dark:text-white bg-gray-2 hover:bg-blue-500 dark:hover:bg-meta-5 py-1 px-2.5 rounded dark:bg-meta-4">Follow</button>
        </div>
    );
}