import  { ShoutService } from "./service";
import ShoutApi from "./api";

const shoutService = new ShoutService(ShoutApi);

export default shoutService