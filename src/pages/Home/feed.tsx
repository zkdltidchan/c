import { useGetFeed } from "@/application/queries/use-get-feed";
// import { LoadingView } from "@/components/loading";
import { ShoutList } from "../../components/Shouts/ShoutList";
import { RecommendUserList } from "@/components/RecommendUser/RecommendUserList";
import { useGetRecommendUsersProfile } from "@/application/get-recommend-users-profile";

export function Feed() {
    const feed = useGetFeed();
    const recommenUsers = useGetRecommendUsersProfile();


    if (feed.isError) {
        return <div>An error occurred</div>;
    }

    if (!feed.data) {
        return <div>An error occurred</div>;
    }

    if (recommenUsers.isLoading) {
        return <div>An error occurred</div>;
    }

    if (recommenUsers.error) {
        return <div>An error occurred</div>;
    }

    if (!recommenUsers.users) {
        return <div>An error occurred</div>;
    }

    return (
        <div className="flex gap-6 p-5">
            <div className="w-full overflow-hidden shadow-default">
                <ShoutList
                    shouts={feed.data.shouts}
                    users={feed.data.users}
                    images={feed.data.images}
                />
            </div>
            <div className="hidden md:block space-y-4 w-1/2 rounded-sm shadow-default flex flex-col">
                    <RecommendUserList users={recommenUsers.users} max={3} />
                    <RecommendUserList users={recommenUsers.users} max={3} />
                    <RecommendUserList users={recommenUsers.users} max={3} />
            </div>
        </div>
    );
}