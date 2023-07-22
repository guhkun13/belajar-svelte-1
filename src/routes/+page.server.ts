import type { PageServerLoad } from "./$types"
import messages from "../../data/messages.json";

export const load: PageServerLoad = () => {
    const payload = {
        "messages" : messages
    };
    
    return payload;
}