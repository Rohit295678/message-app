import getConversations from "../action/getConversations";
import getUsers from "../action/getUser";
import Sidebar from "../components/sidebar/Sidebar";
import ConverstionList from "./components/ConversationList";

export default async function ConversationsLayout({
    children
}:{
    children: React.ReactNode
}) {
    const conversations = await getConversations();
    const users = await getUsers();
    return(
        <Sidebar>
            <div className="h-full">
                <ConverstionList
                users={users} 
                initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    )
};