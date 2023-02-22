"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const SideBar = () => {
  const { data: session } = useSession();

  const [chat, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chat);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* Model Selection */}</div>

          {/* Map through the ChatRows */}
          {chat?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile-pic"
          className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer"
        />
      )}
    </div>
  );
};

export default SideBar;
