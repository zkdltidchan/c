import  { FeedService } from "./service";
// import FeedApi from "./api";
import FeedApi from "./api-mock"

const feedService = new FeedService(FeedApi);

export default feedService