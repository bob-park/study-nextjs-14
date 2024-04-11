import BackdropButton from '@/app/(afterLogin)/_component/BackdropButton';
import ChatMessage from '@/app/(afterLogin)/_component/ChatMessage';

const me = {
  id: 'me',
  nickname: '나',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg',
};

const dummy = {
  id: 'room-id1',
  name: 'room name',
  users: [
    {
      id: 'hero',
      nickname: '영웅',
      avatar: 'https://avatars.githubusercontent.com/u/74192780',
    },
    {
      id: 'me',
      nickname: '나',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg',
    },
  ],
  contents: [
    {
      id: 'message-id1',
      user: {
        id: 'hero',
        nickname: '영웅',
        avatar: 'https://avatars.githubusercontent.com/u/74192780',
      },
      content: '안녕하세요',
      createdDate: new Date(),
    },
    {
      id: 'message-id2',
      user: {
        id: 'me',
        nickname: '나',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg',
      },
      content: '안녕하세요',
      createdDate: new Date(),
    },
    {
      id: 'message-id3',
      user: {
        id: 'hero',
        nickname: '영웅',
        avatar: 'https://avatars.githubusercontent.com/u/74192780',
      },
      content: '안녕하세요',
      createdDate: new Date(),
    },
  ],
};

export default function ChatRoom({ params }: { params: { roomId: string } }) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="border-b-[1px] border-b-gray-200">
        <div className="flex items-center h-20 px-4">
          <div className="flex-none w-20">
            <BackdropButton />
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold">{dummy.name}</p>
          </div>
        </div>
      </div>
      <div className="py-12 border-b-[1px] border-b-gray-200 sticky top-0">
        <div className="flex gap-10 justify-center items-center">
          {dummy.users
            .filter((user) => user.id !== me.id)
            .map((user) => (
              <div key={`user-info-key-${user.id}`} className="col-span-1">
                <div className="flex flex-col justify-center items-center">
                  <div className="">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user.avatar} />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-lg font-bold">
                      <span>{user.nickname}</span>
                    </p>
                  </div>
                  <div className="text-gray-500">
                    <p>
                      <span>@{user.id}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* messages */}
      <div className="mt-2">
        <div className="flex flex-col w-full gap-1 justify-center items-center">
          {dummy.contents.map((item) => (
            <div key={`chat-message-key-${item.id}`} className="w-full">
              <ChatMessage
                id={item.id}
                user={item.user}
                content={item.content}
                date={item.createdDate}
                isMe={item.user.id === me.id}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
