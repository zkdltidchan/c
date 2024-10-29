
import { RecommendUser } from "./RecommendUser";
import { User } from "@/domain/user";

interface RecommendUserListProps {
    users: User[];
    max: number;
}

export function RecommendUserList({ users, max }: RecommendUserListProps) {
    return (
        <div className="border border-stroke p-6 dark:border-strokedark rounded-md dark:bg-boxdark bg-white">
            <h4 className="mb-3 text-sm font-semibold text-black dark:text-white">You may also like</h4>
            <div className="flex flex-col gap-2.5">
                {users.slice(0, max).map((user, key) => (
                    <div key={key}>
                        <RecommendUser user={user} />
                    </div>
                ))}

                {users.length > max && (
                    <div className="text-left">
                        <button className="text-xs font-medium text-primary hover:underline">Show More</button>
                    </div>
                )}
            </div>
        </div>
    );
}